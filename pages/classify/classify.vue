<template>
<view>
<view class="nav-wrap">
  <block v-for="(item, unique) in goodsTabsVoList" :key="unique">  
    <view  @tap="chooseNav(unique)" :class="chooseNavIndex==unique?'choose':''">{{item.tabName}}</view>
  </block> 
</view>
<view class="jingxuan-main">
  <block v-for="(item, c) in currentgoodsVo" :key="c" v-if="currentgoodsVo.length!=0">
    <view class="jingxuan-main-box" @tap="commodity_details(item.id)">
        <view>
          <image :src="item.mainImg"></image>
        </view>
        <view>
          <text>{{item.goodsName}}</text>
          <view>
            <text>￥</text>
            <text class="goodsListMoney1">{{item.mainPriceInteger}}.</text>
            <text class="goodsListMoney2">{{item.mainPriceDecimal}}</text>
          </view>
        </view>
    </view>
  </block>
   <view v-show="isloadedend" class="bottomText">已全部加载</view>
</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      repeatedLoading:true,
      goodsTabsVoList:[],//[]
      goodsVo1: [],
      goodsVo2: [],
      goodsVo3: [],
      goodsVo4: [],
      goodsVo5: [],
	  currentgoodsVo:[],
	  chooseNavIndex: 0,
	  tabsgoodsVoList:[],//用于承载goodsVo1 goodsVo12 goodsVo3 goodsVo4 goodsVo5
	  isloadedend:false,
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.tabsgoodsVoList=[this.goodsVo1,this.goodsVo2,this.goodsVo3,this.goodsVo4,this.goodsVo5];
	  uni.showLoading({
	  	title:"加载中...",
		mask:true
	  });
    // #ifdef MP-WEIXIN
    getApp().globalData.login();
    // #endif
		uniHttp({//tab列表
			"path":"/goods/api/goodsInternal/getTabsListByCategory/2",
			"header":{
				"aid":"103"
			}
		}).then(res=>{
			uni.hideLoading();
			let goodsTabsdata=res;
			this.goodsTabsVoList = goodsTabsdata.goodsTabsVoList;
			if (this.goodsTabsVoList.length!=0) {
				this.getgoodsVo(0);
			}
		})
 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.pageLoading = false;
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //不会重复加载
   if (this.repeatedLoading) {
		this.repeatedLoading=false;
		this.goodsTabsVoList[this.chooseNavIndex].page = this.goodsTabsVoList[this.chooseNavIndex].page + 1;
		this.getgoodsVo(this.chooseNavIndex);
	}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    chooseNav: function (index) {
		this.chooseNavIndex=index;
		this.currentgoodsVo=this.tabsgoodsVoList[index];
		if(!this.tabsgoodsVoList[index].length){
			this.isloadedend=false;
			this.getgoodsVo(index);
		}
    },

   //获取tabs分类对应下的商品列表
   getgoodsVo(index){
		if(!this.isloadedend){
			this.repeatedLoading=false;
			uni.showLoading({
				title:"加载中...",
				mask:true
			});
			var page=this.goodsTabsVoList[index].page=="undefined"?"1":this.goodsTabsVoList[index].page.toString();
			var id=this.goodsTabsVoList[index].id=="undefined"?"null":this.goodsTabsVoList[index].id.toString();	
			uniHttp({
				"path":`/goods/api/goodsInternal/getGoodsList/${page}/${id}`,
				"header":{
					"aid":"105"
				}
			}).then(res=>{
				this.repeatedLoading= true;
				let goodslist=res;
				if (goodslist.goodsVoList.length > 0) {
					for (var i = 0; i < goodslist.goodsVoList.length; i++) {
					  var img = getApp().globalData.imgUrl + "/" + goodslist.goodsVoList[i].goodsPic;
					  goodslist.goodsVoList[i].goodsPic = img;
					}
					this.tabsgoodsVoList[index].push(...goodslist.goodsVoList);
					this.currentgoodsVo=this.tabsgoodsVoList[index];
				}else{
					this.isloadedend=true;
					console.log('isend');
				}
				 //隐藏导航条加载动画。
				 // #ifdef MP-WEIXIN
				 uni.hideNavigationBarLoading();
				 // #endif
				 uni.stopPullDownRefresh();
				uni.hideLoading();
			}).catch(err=>{
				this.repeatedLoading= true;
				uni.hideLoading();
			})
		}else{
			//this.repeatedLoading=true;
			console.log('我是有底线的')
		}
    },
    commodity_details(id) {
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/commodity_details/commodity_details?goodsId=' + id
        });
      }
    }
}
};
</script>
<style>
@import "./classify.css";
</style>