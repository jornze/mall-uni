<template>
<view>
<view class="person">
  <view @tap="login"> 
     <image src="/static/images/bg.png"></image>
     <view class="head-img">
       <image :src="userImg"></image>
     </view>
     <view class="class-round" v-if="isLogin==true">
       <image src="/static/images/associator.png"></image>
     </view>
     <view class="num-round" v-if="isLogin==true">{{this.$store.getters['login/get_userInfo'].memLevel}}</view>
     <view class="class" v-if="isLogin==true">钻石会员</view>
     <view class="num" v-if="isLogin==true">用户等级</view>
     <view class="uesr-name" v-if="isLogin==true">{{this.$store.getters['login/get_userInfo'].nickname}}</view>
	 <view class="uesr-name" v-if="isLogin==false" @click="goLogin">{{userName}}</view>
  </view>
  <view>
    <view>
       <view>{{coupon}}</view>
       <view>优惠券</view>
    </view>
    <view @tap="shoppingCart">
       <view>{{shoppingCarNum}}</view>
       <view>购物车</view>
    </view>
  </view>
</view>
<view class="order">
  <view @tap="orderStatus" data-orderStatus="0">
    <view>我的订单</view>
    <view>
       <view>查看全部订单</view>
       <image src="/static/images/right.png"></image>
    </view>
  </view>
  <view>
    <view @tap="orderStatus" data-orderStatus="1">
      <image src="/static/images/Unpaid.png"></image>
      <text>待支付</text>
      <view class="numOrder" v-if="UP">{{UP}}</view>
    </view>
    <view @tap="orderStatus" data-orderStatus="2">
      <image src="/static/images/PendingDelivery.png"></image>
      <text>待发货</text>
      <view class="numOrder" v-if="UD">{{UD}}</view>
    </view>
    <view @tap="orderStatus" data-orderStatus="3">
      <image src="/static/images/harvested.png"></image>
      <text>待收货</text>
      <view class="numOrder" v-if="UG">{{UG}}</view>
    </view>
    <view @tap="orderStatus" data-orderStatus="5">
      <image src="/static/images/evaluate.png"></image>
      <text>待评价</text>
      <view class="numOrder" v-if="UC">{{UC}}</view>
    </view>
  </view>
</view>
<view class="more">
  <view>
    <view>
      <image src="/static/images/my_integral.png"></image>
      <text>我的积分</text>
    </view>
    <image src="/static/images/right.png"></image>
  </view>
  <view @tap="address">
    <view>
      <image src="/static/images/my_address.png"></image>
      <text>地址管理</text>
    </view>
    <image src="/static/images/right.png"></image>
  </view>
  <view>
    <view>
      <image src="/static/images/AboutUs.png"></image>
      <text>关于我们</text>
    </view>
    <image src="/static/images/right.png"></image>
  </view>
  <button open-type="contact" session-from="wx">
    <view>
      <image src="/static/images/CustomerService.png"></image>
      <text>客服中心</text>
    </view>
    <image src="/static/images/right.png"></image>
  </button>
</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      userName: '未登录',
      userImg: require('@/static/images/moren.jpeg'),
      shoppingCarNum: 0,
      coupon: 0,
      UC: '',
      UD: '',
      UG: '',
      UP: ''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
	
    // #ifdef MP-WEIXIN
    getApp().globalData.login();
    // #endif
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	  if(this.isLogin){
		  this.getPayLNum();//获取待支付等信息
		  this.getShopingCarNum();//获取购物侧数据
	  }
    this.pageLoading = false;
	this.userImg=getApp().globalData.userImg;
    var that = this;
    // #ifdef MP-WEIXIN
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: getApp().globalData.url1 + getApp().globalData.wxRedirect + res.code,
            header: {
              aid: 100
            },
            success: function (res) {
              if (res.data.data.type == 1) {
                getApp().globalData.openId = res.data.data.memberWechat.openId;
                getApp().globalData.userType = res.data.data.type;
                getApp().globalData.shoppingCarNum = res.data.data.memberWechat.shoppingCarNum;
                getApp().globalData.userImg = res.data.data.memberWechat.avatarUrl;
                getApp().globalData.userName = res.data.data.memberWechat.nickname;
                getApp().globalData.memId = res.data.data.memberWechat.id;
                that.setData({
                  userName: res.data.data.memberWechat.nickname,
                  userImg: res.data.data.memberWechat.avatarUrl,
                  shoppingCarNum: res.data.data.memberWechat.shoppingCarNum
                });
                wx.request({
                  url: getApp().globalData.url3 + getApp().globalData.getOrderGroupByMemid + getApp().globalData.memId,
                  data: '',
                  header: {
                    aid: 108
                  },
                  method: 'GET',
                  dataType: 'json',
                  responseType: 'text',
                  success: function (res) {
                    that.setData({
                      UC: parseInt(res.data.data.orderQuantity.UC),
                      UD: parseInt(res.data.data.orderQuantity.UD),
                      UG: parseInt(res.data.data.orderQuantity.UG),
                      UP: parseInt(res.data.data.orderQuantity.UP)
                    });
                  }
                });
              } else {
                getApp().globalData.openId = res.data.data.openId;
                wx.showModal({
                  title: '提示',
                  content: '小可爱，微信授权一键登录',
                  success: function (res) {
                    if (res.confirm) {
                      wx.navigateTo({
                        url: '/pages/authorization/authorization'
                      });
                    } else if (res.cancel) {}
                  }
                });
              }
            }
          });
        } else {}
      }
    });
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
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    login() {
      if (!this.pageLoading) {
        this.pageLoading = true;
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.request({
                url: getApp().globalData.url1 + getApp().globalData.wxRedirect + res.code,
                header: {
                  aid: 100
                },
                success: function (res) {
                  if (res.data.data.type == 1) {} else {
                    wx.showModal({
                      title: '提示',
                      content: '小可爱，微信授权一键登录',
                      success: function (res) {
                        if (res.confirm) {
                          wx.navigateTo({
                            url: '/pages/authorization/authorization'
                          });
                        } else if (res.cancel) {}
                      }
                    });
                  }
                }
              });
            } else {}
          }
        });
      }
    },

    shoppingCart() {
      var that = this;
		if(this.isLogin==true){
			     that.pageLoading = true;
			    wx.navigateTo({
			      url: '/pages/shoppingCart/shoppingCart'
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

    orderStatus(e) {
		var that = this;
		if(this.isLogin==true){
			that.pageLoading = true;
			uni.navigateTo({
			  url: '/pages/allOrders/allOrders?orderStatus=' + e.currentTarget.dataset.orderstatus
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
    address() {
		var that = this;
		if(this.isLogin==true){
			uni.navigateTo({
			       url: '/pages/addressManagement/addressManagement'
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
	goLogin:function(){
		uni.navigateTo({
		       url: '/pages/login/login'
		}); 
	},
	getShopingCarNum:function(){//获取100code
		var that = this;
		
		uniHttp({
			path:'/member/api/memberInternal/getShoppingCartList/'+'1' + '/10/' + this.$store.getters['login/get_userInfo'].id + '/1',
			header:{
				aid:117,
				
			}
		}).then(res=>{
			that.getSCarNum(res.skuId_count)
		})	
	},
	getSCarNum:function(skuIdCount){//获取118code
		var that = this;
		uniHttp({
			path:'/goods/api/goodsInternal/getSkuVoListBySkuIdList',
			data:{
				skuId_count: skuIdCount
			},
			header:{
				aid:118,
				
			},
			method:"post",
		}).then(res=>{
			this.shoppingCarNum=res.goodsSkuVoList.length;
		})	
		
	},
	getPayLNum:function(){//获取108code
		var that = this;
		uniHttp({
			path:'/orders/api/orderInternal/getOrderGroupByMemid/'+this.$store.getters['login/get_userInfo'].id,
			header:{
				aid:108,
				
			}
		}).then(res=>{
			this.UC=parseInt(res.orderQuantity.UC);
			this.UD=parseInt(res.orderQuantity.UD);
			this.UG=parseInt(res.orderQuantity.UG);
			this.UP=parseInt(res.orderQuantity.UP);
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
@import "./my.css";
</style>
