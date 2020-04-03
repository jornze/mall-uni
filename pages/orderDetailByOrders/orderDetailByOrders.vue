<template>
<view>
<view> 
  <loading :hidden="hidden">加载中...</loading> 
</view>
<view class="order-header">
  <image src="/static/images/wait.png" v-if="orderStatus==1"></image>
  <image src="/static/images/Collect.png" v-if="orderStatus==2||orderStatus==3||orderStatus==4||orderStatus==5||orderStatus==6"></image>
  <image src="/static/images/fail.png" v-if="orderStatus==7"></image>
  <view>
    <text v-if="orderStatus==1">等待买家付款</text>
    <text v-if="orderStatus==1">订单将在库存不足时自动关闭</text>
    <text v-if="orderStatus==2">等待卖家发货</text>
    <text v-if="orderStatus==3">已发货</text>
    <text v-if="orderStatus==4">已签收，待确认收货</text>
    <text v-if="orderStatus==5">待评价</text>
    <text v-if="orderStatus==6">交易完成</text>
    <text v-if="orderStatus==7">订单已取消</text>
  </view>
  <view class="order-time" v-if="orderStatus==1">剩余：{{time.m}}分{{time.s}}秒</view>
</view> 
<view class="receiving-address">
  <view class="describe">
    <view></view>
    <text>收货地址</text>
  </view> 
  <view @tap="orderStatus==1?'address':''">
    <image src="/static/images/SP_add.png"></image>
    <view v-if="address.phone">
      <view>
        <text>{{address.consignee}}</text>
        <text>{{address.phone}}</text>
      </view>
      <text>{{address.province}}{{address.city}}{{address.area}}{{address.address}}</text>
    </view>
    <view v-if="!address.phone">添加收货地址</view>
    <image src="/static/images/right.png"></image>
  </view>
  <image src="/static/images/SP_add_bg.png"></image>
</view>
<view class="commodity-information"> 
  <view class="describe">
    <view></view>
    <text>商品信息</text>
  </view>
  <block v-for="(item, s) in orderVoList" :key="s">
    <view class="commodity-list" @tap="commodity_details" :data-goodsid="item.goodsId">
      <image :src="item.skuImg"></image>
      <view>
        <view>{{item.goodsName}}</view>
        <view>{{item.skuName}}</view>
        <view class="moneyNUm">
          <view><span>￥</span>{{item.marketPrice}}</view>
          <text>x{{item.skuQty}}</text>
        </view>
      </view>
    </view>
  </block>
  <view class="more">
    <text>运费</text>
    <text v-if>￥8.00</text>
    <text>包邮</text>
  </view>
  <view class="more">
    <text>订单编号</text>
    <text>{{parendNo}}</text>
  </view>
  <view class="total">
    <text>总计</text>
    <text>￥{{money}}</text>
  </view>
</view>
<view class="payment-method" v-if="orderStatus==1">
  <view>
    <image src="/static/images/weixin.png"></image>
    <text>微信支付</text>
  </view>
  <image src="/static/images/gou.png"></image>
</view>
<view class="orderDetails-bottom">
  <view class="cancelOrder" @tap="cancelOrder" v-if="orderStatus==1">取消订单</view>
  <view class="ToOrder" @tap="ToOrder" v-if="orderStatus==1">支付</view>
  <view class="deletOrder" @tap="deletOrder" v-if="orderStatus==7">删除订单</view>
  <view class="ToOrder" @tap="remind" v-if="orderStatus==2">提醒发货</view>
  <view class="grey" @tap="sureOrder" v-if="orderStatus==3||orderStatus==4">确认收货</view>
  <view class="grey" @tap="ToEvaluated" v-if="orderStatus==5">待评价</view>
  <view class="grey" @tap v-if="orderStatus==6">订单完成</view>
  <view class="grey" @tap="logistics" v-if="orderStatus==3||orderStatus==4||orderStatus==5||orderStatus==6">物流</view> 
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      hidden: false,
      orderVoList: '',
      money: '',
      address: '',
      chooseId: '',
      parendNo: '',
      supId: '',
      time: {
        m: '',
        s: ''
      },
      timers: '',
      orderStatus: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      parendNo: options.parendNo,
      supId: options.supId,
      orderStatus: options.orderStatus
    });

    if (this.orderStatus == 7 || this.orderStatus == 1) {
      wx.request({
        url: getApp().globalData.url3 + getApp().globalData.getOrderDetailByCondition,
        data: {
          parendNo: that.parendNo,
          supId: that.supId,
          category: 0
        },
        header: {
          aid: 126
        },
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (res.data.data.orderTYVo.orderVoList.length > 0) {
            for (var i = 0; i < res.data.data.orderTYVo.orderVoList.length; i++) {
              var img = getApp().globalData.imgUrl + "/" + res.data.data.orderTYVo.orderVoList[i].skuImg;
              res.data.data.orderTYVo.orderVoList[i].skuImg = img;
              res.data.data.orderTYVo.orderVoList[i].marketPrice = res.data.data.orderTYVo.orderVoList[i].marketPrice.toFixed(2);
            }

            res.data.data.orderTYVo.orderVoList[0].totalAmount = res.data.data.orderTYVo.orderVoList[0].totalAmount.toFixed(2);
            that.setData({
              orderVoList: res.data.data.orderTYVo.orderVoList,
              address: res.data.data.orderTYVo.orderDetailVo,
              money: res.data.data.orderTYVo.orderVoList[0].totalAmount,
              hidden: true
            });

            if (res.data.data.orderTYVo.orderDetailVo.addressId) {
              that.setData({
                chooseId: res.data.data.orderTYVo.orderDetailVo.addressId
              });
            }

            that.timer();
          }
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    } else {
      wx.request({
        url: getApp().globalData.url3 + getApp().globalData.getOrderDetailByCondition,
        data: {
          parendNo: that.parendNo,
          supId: that.supId,
          category: 1
        },
        header: {
          aid: 126
        },
        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (res.data.data.orderTYVo.orderVoList.length > 0) {
            for (var i = 0; i < res.data.data.orderTYVo.orderVoList.length; i++) {
              var img = getApp().globalData.imgUrl + "/" + res.data.data.orderTYVo.orderVoList[i].skuImg;
              res.data.data.orderTYVo.orderVoList[i].skuImg = img;
              res.data.data.orderTYVo.orderVoList[i].marketPrice = res.data.data.orderTYVo.orderVoList[i].marketPrice.toFixed(2);
            }

            res.data.data.orderTYVo.orderVoList[0].totalAmount = res.data.data.orderTYVo.orderVoList[0].totalAmount.toFixed(2);
            that.setData({
              orderVoList: res.data.data.orderTYVo.orderVoList,
              address: res.data.data.orderTYVo.orderDetailVo,
              money: res.data.data.orderTYVo.orderVoList[0].totalAmount,
              hidden: true
            });
            that.timer();
          }
        },
        fail: function (res) {},
        complete: function (res) {}
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
    wx.hideShareMenu();
    this.pageLoading = false;
    var that = this;

    if (this.chooseId) {
      wx.request({
        url: getApp().globalData.url1 + getApp().globalData.getAddressByMemberId + that.chooseId,
        data: '',
        header: {
          aid: 110
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          that.setData({
            address: res.data.data.memberAddrVo
          });
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.timers);
    var that = this;

    if (this.orderStatus == 1) {
      wx.request({
        url: getApp().globalData.url3 + getApp().globalData.supplementOrderMoney,
        data: {
          totalPayAmout: that.money,
          parendNo: that.parendNo,
          openId: getApp().globalData.openId,
          consignee: that.address.consignee,
          phone: that.address.phone,
          province: that.address.province,
          city: that.address.city,
          area: that.address.area,
          address: that.address.address,
          addressId: that.chooseId,
          wxMemId: getApp().globalData.memId
        },
        header: {
          aid: 124
        },
        method: 'put',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    }
  },

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
    timer: function () {
      var that = this;
      var createTime = new Date(this.orderVoList[0].createTime.replace(/-/g, "/"));
      var leftTime = new Date().getTime() - createTime.getTime();
      leftTime = 15 * 60 * 1000 - leftTime;
      this.timers = setInterval(function () {
        var minute = parseInt(leftTime / 1000 / 60 % 60, 10);
        var second = parseInt(leftTime / 1000 % 60, 10);
        that.setData({
          'time.m': that.checkTime(minute),
          'time.s': that.checkTime(second)
        });
        leftTime = leftTime - 1000;

        if (leftTime < 0) {
          if (that.orderStatus == 1) {
            wx.request({
              url: getApp().globalData.url3 + getApp().globalData.orderClosureByParendNo,
              data: {
                totalPayAmout: that.money,
                parendNo: that.parendNo,
                openId: getApp().globalData.openId,
                consignee: that.address.consignee,
                phone: that.address.phone,
                province: that.address.province,
                city: that.address.city,
                area: that.address.area,
                address: that.address.address,
                wxMemId: getApp().globalData.memId
              },
              header: {
                aid: 123
              },
              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function (res) {
                if (res.data.data.errorCode == 200) {
                  wx.showToast({
                    title: '订单已取消',
                    mask: true,
                    success: function (res) {
                      that.setData({
                        orderStatus: 7
                      });
                      clearInterval(that.timers);
                    },
                    fail: function (res) {},
                    complete: function (res) {}
                  });
                }
              },
              fail: function (res) {},
              complete: function (res) {}
            });
          }
        }
      }, 1000);
    },
    checkTime: function (i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    },

    addressFun() {
      if (!this.pageLoading) {
        this.pageLoading = true;
        wx.navigateTo({
          url: '/pages/addressManagement/addressManagement?id=' + this.chooseId + '&where=1'
        });
      }
    },

    commodity_details: function (e) {
      var that = this;
      wx.request({
        url: getApp().globalData.url2 + getApp().globalData.getGoodsStatusById + e.currentTarget.dataset.goodsid,
        data: '',
        header: {
          aid: 130
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          if (res.data.data.goodsVo.goodsStatus == 4) {
            wx.showToast({
              title: '该商品已下架',
              mask: true
            });
          } else {
            if (!that.pageLoading) {
              that.pageLoading = true;
              wx.navigateTo({
                url: '/pages/commodity_details/commodity_details?goodsId=' + e.currentTarget.dataset.goodsid
              });
            }
          }
        },
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    remind() {
      wx.showToast({
        title: '已提醒发货',
        mask: true,
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    ToEvaluated() {
      wx.showToast({
        title: '暂无评价功能',
        mask: true,
        icon: 'none',
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    },

    cancelOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '确定取消订单',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: getApp().globalData.url3 + getApp().globalData.orderClosureByParendNo,
              data: {
                totalPayAmout: that.money,
                parendNo: that.parendNo,
                openId: getApp().globalData.openId,
                consignee: that.address.consignee,
                phone: that.address.phone,
                province: that.address.province,
                city: that.address.city,
                area: that.address.area,
                address: that.address.address,
                addressId: that.chooseId,
                wxMemId: getApp().globalData.memId
              },
              header: {
                aid: 123
              },
              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function (res) {
                if (res.data.data.errorCode == 200) {
                  wx.showToast({
                    title: '订单已取消',
                    mask: true,
                    success: function (res) {
                      that.setData({
                        orderStatus: 7
                      });
                      clearInterval(that.timers);
                    },
                    fail: function (res) {},
                    complete: function (res) {}
                  });
                }
              },
              fail: function (res) {},
              complete: function (res) {}
            });
          } else if (res.cancel) {}
        }
      });
    },

    ToOrder() {
      var that = this;

      if (this.address.phone) {
        wx.request({
          url: getApp().globalData.url3 + getApp().globalData.createUnifiedOrder,
          data: {
            totalPayAmout: that.money,
            parendNo: that.parendNo,
            openId: getApp().globalData.openId,
            consignee: that.address.consignee,
            phone: that.address.phone,
            province: that.address.province,
            city: that.address.city,
            area: that.address.area,
            address: that.address.address,
            addressId: that.chooseId,
            wxMemId: getApp().globalData.memId
          },
          header: {
            aid: 121
          },
          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            if (res.data.data.prepayId) {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.generateSignature,
                data: {
                  prepayId: res.data.data.prepayId
                },
                header: {
                  aid: 122
                },
                method: 'post',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  if (res.data.data.sign) {
                    wx.requestPayment({
                      timeStamp: res.data.data.timeStamp,
                      nonceStr: res.data.data.nonceStr,
                      package: res.data.data.package,
                      signType: 'MD5',
                      paySign: res.data.data.sign,
                      success: function (res) {
                        clearInterval(that.timers);
                        that.setData({
                          orderStatus: 2
                        });
                        wx.showToast({
                          title: '支付成功',
                          mask: true
                        });
                      },
                      fail: function (error) {},
                      complete: function (res) {}
                    });
                  }
                }
              });
            } else {
              wx.showModal({
                title: '提示',
                content: '订单异常，请重新下单'
              });
            }
          }
        });
      } else if (!this.address.phone) {
        wx.showModal({
          title: '提示',
          content: '请完善收货信息'
        });
      }
    },

    logistics() {
      if (!this.pageLoading) {
        this.pageLoading = true;
        wx.navigateTo({
          url: '/pages/orderTracking/orderTracking?logisticsCode=' + this.address.logisticsCode + '&logisticsPostid=' + this.address.logisticsPostid
        });
      }
    },

    sureOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '是否确认收货',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: getApp().globalData.url3 + getApp().globalData.confirmReceive,
              data: {
                parendNo: that.parendNo,
                supId: that.supId,
                openId: getApp().globalData.openId,
                wxMemId: getApp().globalData.memId
              },
              header: {
                aid: 128
              },
              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function (res) {
                that.setData({
                  orderStatus: 5
                });
              },
              fail: function (res) {},
              complete: function (res) {}
            });
          }
        }
      });
    },

    deletOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '确定删除订单',
        success: function (res) {
          if (res.confirm) {
            if (that.orderStatus == 7) {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: that.parendNo,
                  supId: that.supId,
                  category: 0
                },
                header: {
                  aid: 127
                },
                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  wx.navigateBack({
                    delta: 1
                  });
                },
                fail: function (res) {},
                complete: function (res) {}
              });
            } else {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: that.parendNo,
                  supId: that.supId,
                  category: 1
                },
                header: {
                  aid: 127
                },
                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  wx.navigateBack({
                    delta: 1
                  });
                },
                fail: function (res) {},
                complete: function (res) {}
              });
            }
          } else if (res.cancel) {}
        }
      });
    }

  }
};
</script>
<style>
@import "./orderDetailByOrders.css";
</style>