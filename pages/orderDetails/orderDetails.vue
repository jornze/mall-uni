<template>
<view>
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
  <view>
    <image src="/static/images/SP_add.png"></image>
    <view v-if="address"  @tap="addressFun">
      <view>
        <text>{{address.consignee}}</text>
        <text>{{address.phone}}</text>
      </view>
      <text>{{address.province}}{{address.city}}{{address.area}}{{address.address}}</text>
    </view>
    <view v-if="address==false" @tap="addressFun">添加收货地址</view>
    <image src="/static/images/right.png"   @tap="addressFun"></image>
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
    <!-- <text v-if>￥8.00</text> -->
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
  <view class="grey" v-if="orderStatus==5">待评价</view>
  <view class="grey"  v-if="orderStatus==6">订单完成</view>
  <view class="grey" @tap="logistics" v-if="orderStatus==3||orderStatus==4||orderStatus==5||orderStatus==6">物流</view>
</view>
</view>
</template>

<script>
//是否有评价页面 orderStatus=5
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      orderVoList:[],//''
      money: '',
      address:'',
      chooseId: '',
      parendNo: '',
      supId: '',
      time: {
        m: '',
        s: ''
      },
      timers: '',
      orderStatus: '1'//订单状态
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  uni.showLoading({
	  	"title":"加载中...",
		 mask:true
	  })
	var that =this;
     this.parendNo=options.parendNo;
    uniHttp({
      path: getApp().globalData.getOrderListByParendNo + this.parendNo, 
      header: {
        aid: 120,
		
      },
      method: 'GET',
    }).then(res=>{
		if (res.orderVoList.length > 0) {
		  var moneych = 0;
		  for (var i = 0; i < res.orderVoList.length; i++) {
		    var img = getApp().globalData.imgUrl + "/" + res.orderVoList[i].skuImg;
		    res.orderVoList[i].skuImg = img;
		    res.orderVoList[i].marketPrice = res.orderVoList[i].marketPrice.toFixed(2);
		    moneych = moneych + res.orderVoList[i].marketPrice * res.orderVoList[i].skuQty;
		  }
		
			moneych = moneych.toFixed(2);
			that.orderVoList=res.orderVoList;
			that.money=moneych;
			that.orderStatus=res.orderVoList[0].orderStatus;
			that.supId=res.orderVoList[0].supId;
			uni.hideLoading()
			that.timer();
		}
	})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	  this.getInitAdress();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	  // #ifdef MP-WEIXIN
    uni.hideShareMenu();
	// #endif
    this.pageLoading = false;
    if (this.chooseId) {
     uniHttp({
        path:getApp().globalData.getAddressByMemberId + this.chooseId,
        data: '',
        header: {
          aid: 110,
		 
        },
        method: 'GET'
      }).then(res=>{
		   this.address=res.memberAddrVo;
	  })
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
    if (this.orderStatus == 1) {//补充订单金额
      uniHttp({
        path:getApp().globalData.supplementOrderMoney,
        data: {
          totalPayAmout: this.money,
          parendNo: this.parendNo,
          openId: getApp().globalData.openId,
          consignee: this.address.consignee,
          phone: this.address.phone,
          province: this.address.province,
          city: this.address.city,
          area: this.address.area,
          address: this.address.address,
          addressId: this.chooseId,
          wxMemId: this.$store.getters['login/get_userInfo'].id
        },
        header: {
          aid: 124,
		  
        },
        method: 'put',
      }).then(res=>{})
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
    getInitAdress:function(){//109
		uniHttp({
			path:'/member/api/memberInternal/getDefaultAddress/'+ this.$store.getters['login/get_userInfo'].id, //this.$store.getters['login/get_userInfo'].id;
			header:{
				aid:109,
				
			}
		}).then(res=>{
			if(Object.keys(res).length){
				this.address=res;
				this.chooseId=res.id;
			}
			
		})
    },
    timer:function(){
		var that =this;
		 var Nowtimestamp=new Date().getTime();
		 var Creattimestamp = (new Date(this.orderVoList[0].createTime)).getTime();
		 var leftTime =Creattimestamp+15 * 60 * 1000-Nowtimestamp;
      this.timers = setInterval(()=>{
        var minute = parseInt(leftTime / 1000 / 60 % 60, 10);
        var second = parseInt(leftTime / 1000 % 60, 10);
		
          that.time={
			m:that.checkTime(minute), 
			s:that.checkTime(second)
		  };
        leftTime = leftTime - 1000;
        if (leftTime < 0) {
			console.log(leftTime,that.orderStatus)
          if (that.orderStatus == 1) {
            uniHttp({
              path:getApp().globalData.orderClosureByParendNo,//getApp().globalData.url3
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
                wxMemId: that.$store.getters['login/get_userInfo'].id,//getApp().globalData.memId
              },
              header: {
                aid: 123,
				
              },
              method: 'put'
            }).then(res=>{
				if (res.errorCode == 200) {
				  uni.showToast({
				    title: '订单已取消',
				    success:(res)=>{
				      that.orderStatus=7;
				      clearInterval(that.timers);
				    },
				    fail: function (res) {},
				    complete: function (res) {}
				  });
				}
				
				
				
			}).catch(err=>{
				console.log('err')
				clearInterval(that.timers);
			})
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

    addressFun() {//添加收货地址
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/addressManagement/addressManagement?id=' + this.chooseId + '&where=1'
        });
      }
    },
    commodity_details: function (e) {//查看商品详情
      uniHttp({
        path: getApp().globalData.getGoodsStatusById + e.currentTarget.dataset.goodsid,//getApp().globalData.url2
        data: '',
        header: {
          aid: 130,
		  
        },
        method: 'GET',
      }).then(res=>{
		  if (res.goodsVo.goodsStatus == 4) {
		    uni.showToast({
		      title: '该商品已下架',
		    });
		  } else {
		    if (!this.pageLoading) {
		      this.pageLoading = true;
		      uni.navigateTo({
		        url: '/pages/commodity_details/commodity_details?goodsId=' + e.currentTarget.dataset.goodsid
		      });
		    }
		  }
	  })
    },
    remind() {//提醒发货
      uni.showToast({
        title: '已提醒发货',
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    },
    cancelOrder() {//取消订单
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定取消订单',
        success: function (res) {
          if (res.confirm) {
            uniHttp({
              path: getApp().globalData.orderClosureByParendNo,//getApp().globalData.url3
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
                wxMemId: that.$store.getters['login/get_userInfo'].id,//getApp().globalData.memId
              },
              header: {
                aid: 123,
				
              },
              method: 'put',
            }).then(res=>{
				if (res.errorCode == 200) {
				  uni.showToast({
				    title: '订单已取消',
				    success: function (res) {
				        that.orderStatus=7;
				      clearInterval(that.timers);
				    },
				    fail: function (res) {},
				    complete: function (res) {}
				  });
				}
			})
          } else if (res.cancel) {}
        }
      });
    },
    ToOrder() {//订单支付
      var that = this;
      if (this.address.phone) {
		  
        uniHttp({
          path: getApp().globalData.createUnifiedOrder,//getApp().globalData.url3
          data: {
            "totalPayAmout": that.money,
            "parendNo": that.parendNo,
            "openId": getApp().globalData.openId,
            "consignee": that.address.consignee,
            "phone": that.address.phone,
            "province": that.address.province,
            "city": that.address.city,
            "area": that.address.area,
            "address": that.address.address,
            "addressId": that.chooseId,
            "wxMemId": that.$store.getters['login/get_userInfo'].id//getApp().globalData.memId
          },
          header: {
           "aid": 121
          },
          method: 'POST', 
        }).then(res=>{
			console.log(res)
			if (res.prepayId) {
			  uniHttp({
			    path: getApp().globalData.generateSignature,//getApp().globalData.url3
			    data: {
			      prepayId: res.prepayId
			    },
			    header: {
			      aid: 122,
				  
			    },
			    method: 'post',
			  }).then(res=>{
				  if (res.sign) {
				    uni.requestPayment({
				      timeStamp: res.timeStamp,
				      nonceStr: res.nonceStr,
				      package: res.package,
				      signType: 'MD5',
				      paySign: res.sign,
				      success: function (res) {
				        clearInterval(that.timers);
				         that.orderStatus=2;
							uni.showToast({
							  title: '支付成功',
							});
				      },
				      fail: function (error) {},
				      complete: function (res) {}
				    });
				  }
			  })
			} else {
			  uni.showModal({
			    title: '提示',
			    content: '订单异常，请重新下单'
			  });
			}
		})
      } else if (!this.address.phone) {
        uni.showModal({
          title: '提示',
          content: '请完善收货信息'
        });
      }
    },
    deletOrder() {//删除订单
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定删除订单',
        success: function (res) {
          if (res.confirm) {
			  let type=that.orderStatus==7?0:1;
			uniHttp({
			  path:getApp().globalData.deleteOrderByCondition,//getApp().globalData.url3
			  data: {
			    parendNo: that.parendNo,
			    supId: that.supId,
			    category: type
			  },
			  header: {
			    aid: 127,
				
			  },
			  method: 'delete'
			}).then(res=>{
				console.log('shanchu...')
				uni.navigateBack({
					delta: 1
				});
			})
          } else if (res.cancel) {}
        }
      });
    },
    logistics() {//查看物流
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/orderTracking/orderTracking?logisticsCode=' + this.address.logisticsCode + '&logisticsPostid=' + this.address.logisticsPostid
        });
      }
    },
    sureOrder() {//确认收货
      var that = this;
      uni.showModal({
        title: '提示',
        content: '是否确认收货',
        success: function (res) {
          if (res.confirm) {
            uniHttp({
              path:getApp().globalData.confirmReceive,//getApp().globalData.url3
              data: {
                parendNo: that.parendNo,
                supId: that.supId,
                openId: getApp().globalData.openId,
                wxMemId: that.$store.getters['login/get_userInfo'].id//getApp().globalData.memId
              },
              header: {
                aid: 128,
				
              },
              method: 'put',
            }).then(res=>{
				 that.orderStatus=5;
			})
          }
        }
      });
    }

  }
};
</script>
<style>
@import "./orderDetails.css";
</style>