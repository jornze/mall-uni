<template>
<view>
<view class="none">
  <image src="/static/images/daishouhuo.png" v-if="flag"></image>
  <view v-if="flag">暂无收货地址</view>
</view>
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

export default {
  data() {
    return {
      repeatedLoading: true,
      page: 1,
      address: [
		  {"id":"2","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"1","isDefault":1,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"3","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"4","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"5","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"6","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"5","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  {"id":"6","isDefault":0,"consignee":"哈哈哈","phone":"18888","province":"浙江","city":"杭州","area":"蒋村街道","address":"西溪人家"},
		  ],//[]
      chooseId: '',
      where: '',
      flag: ''//''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  // uni.showLoading({
		 //  title:"加载中...",
		 //  mask:true
	  // })
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
	  console.log('22')
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
    if (this.repeatedLoading) {
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
		console.log(pages)
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
    newAddress: function () {//添加新地址
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/newAddress/newAddress'
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
      var that = this;
      uni.request({
        url: getApp().globalData.url1 + getApp().globalData.getAddressListByMemberId + '1/10/' + getApp().globalData.memId,
        data: '',
        header: {
          aid: 113
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
			uni.hideLoading();
            that.flag=res.data.data.flag;
          if (res.data.data.errorCode == 200) {
            if (res.data.data.memberAddrVoList.length > 0) {
              for (var i = 0; i < res.data.data.memberAddrVoList.length; i++) {
                that.address.push(res.data.data.memberAddrVoList[i]);
              }
            }
          }
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    },
    getMoreAddress() {//加载更多地址
      var that = this;
      uni.request({
        url: getApp().globalData.url1 + getApp().globalData.getAddressListByMemberId + that.page + '/10/' + getApp().globalData.memId,
        data: '',
        header: {
          aid: 113
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (res.data.data.memberAddrVoList.length > 0) {
			  that.repeatedLoading = true;
            for (var i = 0; i < res.data.data.memberAddrVoList.length; i++) {
               that.address.push(res.data.data.memberAddrVoList[i]);
            }
          }
          uni.hideLoading()
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    }

  }
};
</script>
<style>
@import "./addressManagement.css";
</style>