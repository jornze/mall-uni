<template>
<view>
<!-- <web-view src="https://m.kuaidi100.com/index_all.html?type={{logisticsCode}}&postid={{logisticsPostid}}"></web-view> -->
<view class="order-header">
  <view>
    <text>物流公司：{{logisticName}}</text>
    <text>单号：{{logisticNo}}</text>
  </view>
</view>
<view class="describe">
  <view></view>
  <text>订单跟踪</text>
</view>
<view class="logistics-cen">
  <view :class="'logistics-cen-for ' + (index==0?'logistics-cen-first':'')" v-for="(item, unique) in logisticText.data" :key="unique" :data-current="index"> 
    <image :src="index==0?'../../images/batop.png':'../../images/ba1.png'"></image>
    <view class="logistics-cen-cen">
      <view>{{item.context}}</view>
      <view>{{item.ftime}}</view>
    </view>
  </view>
</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      logisticName: '',
      logisticNo: '',
      logisticText: '',
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  uni.showLoading({
	  	title:"加载中...",
		mask:true
	  })
    var that = this;
    uniHttp({
      path:getApp().globalData.logisticDetail + '?logisticsCode=' + options.logisticsCode + '&logisticsPostid=' + options.logisticsPostid,
	  method: 'GET'
    }).then(res=>{
		let data=res.data;
		  var logisticText = JSON.parse(data.logisticText);
		  that.logisticText=logisticText;
		  that.logisticName=data.logisticName;
		  that.logisticNo=data.logisticNo;
		  uni.hideLoading()
		  if (logisticText.message !== 'ok') {
		    uni.showToast({
		      title: '快递公司正在揽件,请稍后再试',
		      mask: true,
		      icon: 'none'
		    });
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
  onShow: function () {},

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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {}
};
</script>
<style>
@import "./orderTracking.css";
</style>