<template>
	<view>
		<view v-if="homePageMap.length">
		  <swiper indicator-dots="true" class="jingxuan-swiper" indicator-active-color="#ff7eb3" autoplay="true" circular="true"> 
			<block v-for="(item, unique) in homePageMap" :key="unique">
			  <swiper-item>      
				<image :src="item.contentWxImg" @click="goBanner(item)" mode="aspectFill"></image>
			  </swiper-item>
			</block>
		  </swiper>
		</view>
		<view id="nav-wrap" :class="'nav ' + (verticalScroll?'Top':'')">
		  <view class="nav-wrap">
			<block v-for="(item, unique) in goodsTabsVoList" :key="unique">  
			  <view :data-index="unique" @click="chooseNavFun(unique)" :class="chooseNavIndex==unique?'choose':''">{{item.tabName}}</view>
			</block>
		  </view>
		</view>
		<view class="jingxuan-main" :style="'margin-top:' + (verticalScroll?'80':'0') + 'rpx'">
		  <block v-for="(item, c) in currentgoodsVo" :key="c" v-if="currentgoodsVo.length!=0">
			<view class="jingxuan-main-box" @click="commodity_details(item.goodsId)">
				<view>
				  <image :src="item.goodsPic"></image>
				  <!-- <view bindtap='dianzan' data-dianzan='{{item.dianzan}}' data-id='{{item.id}}'> 
					<image src="{{item.zan==0?'../../images/zan_unchecked.png':'../../images/zan_checkeded.png'}}"></image>
					<text>{{item.zan}}</text>
				  </view> -->
				</view>
				<view>
				  <text>{{item.goodsName}}</text> 
				  <view>
					<text>￥</text>
					<text>{{item.showPriceInteger}}.</text>
					<text>{{item.showPriceDecimal}}</text>
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
      homePageMap: [],//轮播图
      repeatedLoading:true,//是否加载更多
	  //商品tabnav 分类
      goodsTabsVoList: [],
      //tab选择的下标
	  chooseNavIndex:0,
      chooseNav: '{{}}',
	  //页面是否上下滚动
      verticalScroll: false,
      winWidth: '',
      winHeight: '',
	  pageLoading:false,//是否正在加载页面
      goodsVo1: [],
      goodsVo2: [],
      goodsVo3: [],
	  currentgoodsVo:[],
	  tabsgoodsVoList:[],//用于承载goodsVo1 goodsVo12 goodsVo3
	  isloadedend:false,//各个tabs列表是否加载结束
	};
  },

  components: {},
  props: {},

  //生命周期函数--监听页面加载
  onLoad: function (options) {
	   this.tabsgoodsVoList=[this.goodsVo1,this.goodsVo2,this.goodsVo3];
	  uni.showLoading({
	  	title:"加载中...",
		mask:true
	  });
	 //this.$store.commit('login');
	 Promise.all(
		[
			uniHttp({//轮播图
				"path":"/goods/api/goodsInternal/getHomePageSowingMap/1/10",
				"header":{
					"aid":"102"
				}
			}),
			uniHttp({//tab列表
				"path":"/goods/api/goodsInternal/getTabsListByCategory/1",
				"header":{
					"aid":"103"
				}
			})
		]
		).then(res=>{
		  uni.hideLoading();
		  console.log(res)
		  let swoingMapData=res[0];
		  let tabsListData=res[1];
		  console.log(typeof swoingMapData.data.data.errorCode)
		  //轮播图
			if (swoingMapData.data.data.errorCode == "200") {
				if (swoingMapData.data.data.shopContentVoList.length > 0) {
				  for (var i = 0; i < swoingMapData.data.data.shopContentVoList.length; i++) {
					var img = getApp().globalData.imgUrl + "/" + swoingMapData.data.data.shopContentVoList[i].contentWxImg;
					swoingMapData.data.data.shopContentVoList[i].contentWxImg = img;
				  }
				  this.homePageMap.push(...swoingMapData.data.data.shopContentVoList)
				}
			}
			if (tabsListData.data.data.errorCode == "200") {
			    this.goodsTabsVoList=tabsListData.data.data.goodsTabsVoList;
				if(this.goodsTabsVoList.length!=0){
					//获取tabs商品列表
					this.getgoodsVo(0)
				}
			}
		})
		uni.getSystemInfo({
		  success:(res)=>{
			  this.winWidth=res.windowWidth,
			  this.winHeight=res.windowHeight
		  }
		});
  },

  //生命周期函数--监听页面初次渲染完成
  onReady: function () {},

  //生命周期函数--监听页面显示
  onShow: function () {
    this.pageLoading = false;
  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {},

  //生命周期函数--监听页面卸载
  onUnload: function () {},

  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {},

  //页面上拉触底事件的处理函数
  onReachBottom: function () {
    //今日主推=0  新品=1   ding=2
	if (this.repeatedLoading) {
		console.log('onReachBottom')
		this.repeatedLoading=false;
		this.goodsTabsVoList[this.chooseNavIndex].page = this.goodsTabsVoList[this.chooseNavIndex].page + 1;
		this.getgoodsVo(this.chooseNavIndex);
	}
	console.log(this.repeatedLoading)
  },

  // 用户点击右上角分享

  onShareAppMessage: function () {},
  
  onPageScroll: function (e) {
    uni.createSelectorQuery().select('.jingxuan-main').boundingClientRect(rect=>{
      if (rect.top <= 34) {
          this.verticalScroll=true
      } else {
          this.verticalScroll=false
      }
    }).exec();
  },
  methods: {
   //点击banner进去商品详情页
    goBanner: function (item) {
      if (item.contentType == 2) {
        uni.navigateTo({
          url: '/pages/h5/h5?h5Url=' + item.h5Url
        });
      } else if (item.contentType == 1) {
        uni.navigateTo({
          url: '/pages/commodity_details/commodity_details?goodsId=' + item.desc
        });
      } else {}
    },
	//点击商品进去商品详情页
    commodity_details: function (goodsid) {
      if (!this.pageLoading) {
        this.pageLoading= true;
		uni.navigateTo({
		  url: '/pages/commodity_details/commodity_details?goodsId=' + goodsid
		});
        
      }
    },
	//tab切换
    chooseNavFun: function (index) {
		this.chooseNavIndex=index;
		this.currentgoodsVo=this.tabsgoodsVoList[index];
		this.tabsgoodsVoList=[this.goodsVo1,this.goodsVo2,this.goodsVo3];
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
			let page=this.goodsTabsVoList[index].page.toString();
			let id=this.goodsTabsVoList[index].id.toString();	
			uniHttp({
				"path":`/goods/api/goodsInternal/getGoodsListByHome/${page}/${id}`,
				"header":{
					"aid":"104"
				}
			}).then(res=>{
				this.repeatedLoading= true;
				let goodslist=res;
				if (goodslist.data.data.errorCode == "200") {
					console.log(goodslist.data.data.goodsVoList.length);
					if (goodslist.data.data.goodsVoList.length > 0) {
						for (var i = 0; i < goodslist.data.data.goodsVoList.length; i++) {
						  var img = getApp().globalData.imgUrl + "/" + goodslist.data.data.goodsVoList[i].goodsPic;
						  goodslist.data.data.goodsVoList[i].goodsPic = img;
						}
						this.tabsgoodsVoList[index].push(...goodslist.data.data.goodsVoList);
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
				} else {
				  uni.showModal({
				    title: '提示',
				    content: res.data.msg
				  });
				}
				uni.hideLoading();
			})
		}else{
			//this.repeatedLoading=true;
			console.log('我是有底线的')
		}
    }

  }
};
</script>
<style>
@import "./jingxuan.css";
</style>