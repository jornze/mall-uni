<template>
<view>
<view class="head-img">
  <image :src="userImg"></image>
</view>
<view class="title">确认授权账号登录TimeSee小程序</view>
<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">确认</button>
</view>
</template>

<script>

export default {
  data() {
    return {
      userImg: '/static/images/moren.jpeg'
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideShareMenu();
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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    onGotUserInfo: function (e) {
		console.log(e)
	 getApp().globalData.userName=e.detail.userInfo.nickName;
	 getApp().globalData.userImg=e.detail.userInfo.avatarUrl;
	 uni.navigateBack({
		 delta:1
	 })
      // var that = this;
      // wx.request({
      //   url: getApp().globalData.url1 + getApp().globalData.wxUserInfoReceive,
      //   data: {
      //     userInfo: e.detail.uesrInfo,
      //     rawData: e.detail.rawData,
      //     signature: e.detail.signature,
      //     encryptedData: e.detail.encryptedData,
      //     iv: e.detail.iv,
      //     openid: getApp().globalData.openId
      //   },
      //   header: {
      //     aid: 101
      //   },
      //   method: 'post',
      //   success: function (res) {
      //     if (res.data.data.errorCode == 200) {
      //       getApp().globalData.userName = res.data.data.memberWechatVo.nickname;
      //       getApp().globalData.userImg = res.data.data.memberWechatVo.avatarUrl;
      //       getApp().globalData.memId = res.data.data.memberWechatVo.id;
      //       // getApp().globalData.shoppingCarNum = res.data.data.memberWechatVo.shoppingCarNum;
      //       wx.navigateBack({
      //         delta: 1
      //       });
      //     }
      //   },
      //   fail: function (res) {},
      //   complete: function () {}
      // });
    }
  }
};
</script>
<style>
@import "./authorization.css";
</style>