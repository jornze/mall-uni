<template>
<view>
<view class="none" v-if="address.length==0">
  <image src="/static/images/daishouhuo.png"></image>
  <view>暂无收货地址</view>
</view>
<view class="mtop20"></view>
<view class="addressAll" v-if="address.length>0">
  <view class="address" v-for="(item, a) in address" :key="a">
    <view class="addressImgBox"  @tap="chooseIdFun(item.id)" v-if="where==1">
      <image src="/static/images/kong.png" v-if="where&&chooseId!==item.id"></image>
      <image src="/static/images/CollectingCopy.png" v-if="where&&chooseId==item.id"></image>
    </view>
    <view class="addressMain"  @tap="chooseIdFun(item.id)">
      <view>{{item.consignee}}<span>{{item.phone}}</span></view>
      <view>
        <view class="moren" v-if="item.isDefault==1">默认</view>
        <view class="addressMainDetails">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</view>
      </view>
    </view>
    <view class="addressEdit" @tap="editAddress" :data-id="item.id">编辑</view>
  </view>
  
</view>
<view class="bottom" @tap="newAddress">+添加新地址</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      repeatedLoading: true,
      page: 1,
      address: [],//[]
      chooseId: '',
      where: '',
      flag: ''//''//无用
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
        this.chooseId=options.id;
    }
    if (options.where) {
        this.where=options.where;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getAddress();
    this.pageLoading = false;
	// #ifdef MP-WEIXIN
    uni.hideShareMenu();
	// #endif
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
  onReachBottom: function (e) {
    //不会重复加载
	console.log(this.repeatedLoading)
    if (this.repeatedLoading) {
		console.log('ss')
      this.repeatedLoading = false;
      this.page = this.page + 1;
      this.getMoreAddress();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    chooseIdFun(addid) {
      this.chooseId=addid;
      if (this.where == 1) {
        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];
        var prevPage = pages[pages.length - 2];
        prevPage.setData({
          chooseId: addid
        });
        uni.navigateBack({
          delta: 1
        });
      }
    },
    newAddress: function () {//跳转地址新增页面
		if(this.isLogin==true){
			uni.navigateTo({
			       url: '/pages/newAddress/newAddress'
			}); 
		}else if(this.isLogin==false){
			uni.showModal({
				title: '',
				content: '暂未登录，请登录',
				success: function (res) {
					if (res.confirm) {
						uni.navigateTo({
						       url: '/pages/login/login'
						}); 
					} else if (res.cancel) {
					}
				}
			});
		}
    },
    editAddress: function (e) {//编辑地址
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/editAddress/editAddress?id=' + e.currentTarget.dataset.id
        });
      }
    },
    getAddress() {//初始化地址
		uni.showLoading({
			title:"加载中...",
			mask:true
		})
      var that = this;
	  uniHttp({ 
		  path:'/member/api/memberInternal/getAddressListByMemberId/'+'1/10/'+this.$store.getters['login/get_userInfo'].id, //this.$store.getters['login/get_userInfo'].id;
		  data:"",
		  header:{
			  aid:113
		  }
	  }).then(res=>{
		  uni.hideLoading()
		  this.address=res.memberAddrVoList;
	  })
    },
    getMoreAddress() {//加载更多地址
      var that = this;
	  uni.showLoading({
	  	title:"加载更多...",
	  	mask:true
	  })
	  uniHttp({
	  		path:'/member/api/memberInternal/getAddressListByMemberId/'+that.page+'/10/'+this.$store.getters['login/get_userInfo'].id,//this.$store.getters['login/get_userInfo'].id;
	  	    header:{
	  			 aid:113
	  		}
	  }).then(res=>{
	  		if (res.memberAddrVoList.length > 0) {
	  			that.repeatedLoading = true;
	  		    for (var i = 0; i < res.memberAddrVoList.length; i++) {
	  			  that.address.push(res.memberAddrVoList[i]);
	  		    }
	  		}
	  		uni.hideLoading()
	  })
    }

  },
   computed: {
  	isLogin() {
  		return this.$store.getters['login/get_isLogin']
  	}
  },
};
</script>
<style>
@import "./addressManagement.css";
</style>