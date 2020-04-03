<template>
<view>
<view class="none">
  <image src="/static/images/kongdaizi.png" v-if="orderStatus!=3&&flag"></image>
  <image src="/static/images/daishouhuo.png" v-if="orderStatus==3&&flag" class="daishouhuo"></image>
  <view v-if="orderStatus==1&&flag">暂无支付订单</view>
  <view v-if="orderStatus==2&&flag">暂无发货订单</view>
  <view v-if="orderStatus==3&&flag">暂无收货订单</view>
  <view v-if="orderStatus==5&&flag">暂无评价订单</view>
  <view v-if="orderStatus==0&&flag">暂无订单</view>
</view>
<block v-for="(item, o) in orderTYVoList" :key="o">
<view class="order-list" :data-parendNo="item.parendNo" :data-supId="item.orderVoList[0].supId" :data-orderStatus="item.orderVoList[0].orderStatus" @tap="orderDetails">
  <view class="describe">
    <view> 
      <view></view>
      <text>订单编号：{{item.parendNo}}</text>
    </view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==1">待支付</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==2">待发货</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==3||item.orderVoList[0].orderStatus==4">待收货</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==5">待评价</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==6">已完成</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==7">已取消</view>
  </view>
  <block v-for="(item, i) in orderTYVoList[index].orderVoList" :key="i">
  <view class="commodity-list">
    <image :src="item.skuImg"></image>
    <view>
      <view>{{item.goodsName}}</view>
      <view>{{item.skuName}}</view>
      <view>
        <view><span>￥</span>{{item.marketPrice}}</view>
        <text>x{{item.skuQty}}</text>
      </view>
    </view>
  </view>
  </block>
  <view class="order-total">
    <view>共<span>{{item.totalQuantity}}</span>件商品，实付<span>￥{{item.orderVoList[0].totalAmount}}</span></view>
    <view class="order-other">
      <view class="buyAgain" @tap.stop="logistics" v-if="item.orderVoList[0].orderStatus==3||item.orderVoList[0].orderStatus==4" :data-id="item.orderVoList[0].id">查看物流</view>
      <view class="buyAgain" v-if>再次购买</view>
      <view class="buyAgain" v-if="item.orderVoList[0].orderStatus==2" @tap.stop="remind">提醒发货</view>
      <view class="buyAgain" v-if="item.orderVoList[0].orderStatus==1">立即支付</view>
      <view class="deletOrder" v-if="item.orderVoList[0].orderStatus==7||item.orderVoList[0].orderStatus==6" @tap.stop="deletOrder" :data-parendNo="item.parendNo" :data-orderStatus="item.orderVoList[0].orderStatus" :data-supId="item.orderVoList[0].supId">删除订单</view>
    </view>
  </view>
</view>
</block>
</view>
</template>

<script>

export default {
  data() {
    return {
      orderStatus: '',
      orderTYVoList: [],
      hidden: false,
      repeatedLoading: true,
      page: 1,
      flag: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderStatus: options.orderStatus
    });

    if (options.orderStatus == 1) {
      uni.setNavigationBarTitle({
        title: '待付款'
      });
    } else if (options.orderStatus == 2) {
      uni.setNavigationBarTitle({
        title: '待发货'
      });
    } else if (options.orderStatus == 3) {
      uni.setNavigationBarTitle({
        title: '待收货'
      });
    } else if (options.orderStatus == 5) {
      uni.setNavigationBarTitle({
        title: '待评价'
      });
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
    uni.hideShareMenu();
    this.setData({
      page: 1,
      orderTYVoList: []
    });
    this.getOrderList();
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
    if (this.repeatedLoading) {
      this.repeatedLoading = false;
      this.page = this.page + 1;
      this.getOrderList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    orderDetails(e) {
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/orderDetailByOrders/orderDetailByOrders?parendNo=' + e.currentTarget.dataset.parendno + '&supId=' + e.currentTarget.dataset.supid + '&orderStatus=' + e.currentTarget.dataset.orderstatus
        });
      }
    },

    logistics(e) {
      var that = this;
      uni.request({
        url: getApp().globalData.url3 + getApp().globalData.getLogisticsDetailById + e.currentTarget.dataset.id,
        data: '',
        header: {
          aid: 129
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (!that.pageLoading) {
            that.pageLoading = true;
            uni.navigateTo({
              url: '/pages/orderTracking/orderTracking?logisticsCode=' + res.data.data.rtOrderDetail.logisticsCode + '&logisticsPostid=' + res.data.data.rtOrderDetail.logisticsPostid
            });
          }
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    deletOrder(e) {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定删除订单',
        success: function (res) {
          if (res.confirm) {
            if (e.currentTarget.dataset.orderstatus == 7) {
              that.setData({
                hidden: true
              });
              uni.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: e.currentTarget.dataset.parendno,
                  supId: e.currentTarget.dataset.supid,
                  category: 0
                },
                header: {
                  aid: 127
                },
                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  that.setData({
                    page: 1,
                    orderTYVoList: []
                  });
                  that.getOrderList();
                },
                fail: function (res) {},
                complete: function (res) {
                  that.setData({
                    hidden: false
                  });
                }
              });
            } else if (e.currentTarget.dataset.orderstatus == 6) {
              uni.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: e.currentTarget.dataset.parendno,
                  supId: e.currentTarget.dataset.supid,
                  category: 1
                },
                header: {
                  aid: 127
                },
                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  that.setData({
                    page: 1,
                    orderTYVoList: []
                  });
                  that.getOrderList();
                },
                fail: function (res) {},
                complete: function (res) {}
              });
            }
          } else if (res.cancel) {}
        }
      });
    },

    getOrderList() {
      var that = this;
      uni.request({
        url: getApp().globalData.url3 + getApp().globalData.getOrderListByStatus + this.page + '/5',
        data: {
          wxMemId: getApp().globalData.memId,
          openId: getApp().globalData.openId,
          orderStatus: this.orderStatus
        },
        header: {
          aid: 125
        },
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          that.repeatedLoading = true;
          that.setData({
            hidden: true,
            flag: res.data.data.flag
          });

          if (res.data.data.orderTYVoList.length > 0) {
            for (var i = 0; i < res.data.data.orderTYVoList.length; i++) {
              for (var j = 0; j < res.data.data.orderTYVoList[i].orderVoList.length; j++) {
                var img = getApp().globalData.imgUrl + res.data.data.orderTYVoList[i].orderVoList[j].skuImg;
                res.data.data.orderTYVoList[i].orderVoList[j].skuImg = img;
                res.data.data.orderTYVoList[i].orderVoList[j].marketPrice = res.data.data.orderTYVoList[i].orderVoList[j].marketPrice.toFixed(2);
                res.data.data.orderTYVoList[i].orderVoList[j].totalAmount = res.data.data.orderTYVoList[i].orderVoList[j].totalAmount.toFixed(2);
              }

              var orderTYVoList = that.orderTYVoList;
              orderTYVoList.push(res.data.data.orderTYVoList[i]);
            }

            that.setData({
              orderTYVoList: orderTYVoList
            });
          }
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    remind() {
      uni.showToast({
        title: '已提醒发货',
        mask: true,
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    }

  }
};
</script>
<style>
@import "./allOrders.css";
</style>