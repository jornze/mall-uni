<script>

export default {
  globalData: {
	  url1: '/api',
    // url1: 'http://183.131.205.116:8090',
    url2: 'http://183.131.205.116:8090',
    url3: 'http://183.131.205.116:8090',
    // url1: 'http://192.168.160.21:8081',
    // url2: 'http://192.168.160.21:8082',
    // url3: 'http://192.168.160.21:8084',
    imgUrl: 'http://img.hzdjyt.com',
    //图片前缀
    wxRedirect: '/member/api/memberInternal/wxRedirect/',
    //100code
    wxUserInfoReceive: '/member/api/memberInternal/wxUserInfoReceive',
    //101授权信息
    getHomePageSowingMap: '/goods/api/goodsInternal/getHomePageSowingMap/',
    //102精选轮播图
    getTabsListByCategory: '/goods/api/goodsInternal/getTabsListByCategory/',
    //103获取tab列表
    getGoodsListByHome: "/goods/api/goodsInternal/getGoodsListByHome/",
    //104精选商品列表
    getGoodsList: "/goods/api/goodsInternal/getGoodsList/",
    //105分类商品列表
    getGoodsDetailsById: '/goods/api/goodsInternal/getGoodsDetailsById/',
    //106商品详情
    getShoppingCartCount: '/member/api/memberInternal/getShoppingCartCount/',
    //107购物车数量
    getOrderGroupByMemid: '/orders/api/orderInternal/getOrderGroupByMemid/',
    //108订单数量
    getDefaultAddress: '/member/api/memberInternal/getDefaultAddress/',
    //109默认地址
    getAddressByMemberId: '/member/api/memberInternal/getAddressByMemberId/',
    //110地址详情
    editAddress: '/member/api/memberInternal/editAddress',
    //111编辑新增地址
    deleteAddressByAddrId: '/member/api/memberInternal/deleteAddressByAddrId/',
    //112删除地址
    getAddressListByMemberId: '/member/api/memberInternal/getAddressListByMemberId/',
    //113地址列表
    addAShoppingCart: '/member/api/memberInternal/addAShoppingCart',
    //114新增购物车
    deleteShoppingCartById: '/member/api/memberInternal/deleteShoppingCartById/',
    //115删除单个购物车
    deleteShoppingCartByList: '/member/api/memberInternal/deleteShoppingCartByList',
    //116删除多个购物车
    getShoppingCartList: '/member/api/memberInternal/getShoppingCartList/',
    //117购物车skuid
    getSkuVoListBySkuIdList: '/goods/api/goodsInternal/getSkuVoListBySkuIdList',
    //118购物车sku具体数据
    generatingOrder: '/orders/api/orderInternal/generatingOrder',
    //119结算
    getOrderListByParendNo: '/orders/api/orderInternal/getOrderListByParendNo/',
    //120查订单 
    createUnifiedOrder: '/orders/api/pay/createTestUnifiedOrder',
    //121支付 old '/orders/api/orderInternal/createUnifiedOrder',
    generateSignature: '/orders/api/orderInternal/generateSignature',
    //122支付再次签名
    orderClosureByParendNo: '/orders/api/orderInternal/orderClosureByParendNo',
    //123取消订单
    supplementOrderMoney: '/orders/api/orderInternal/supplementOrderMoney',
    //124补充订单金额
    getOrderListByStatus: '/orders/api/orderInternal/getOrderListByStatus/',
    //125订单状态
    getOrderDetailByCondition: '/orders/api/orderInternal/getOrderDetailByCondition',
    //126订单详情
    deleteOrderByCondition: '/orders/api/orderInternal/deleteOrderByCondition',
    //127删除订单
    confirmReceive: '/orders/api/orderInternal/confirmReceive',
    //128确认收货
    getLogisticsDetailById: '/orders/api/orderInternal/getLogisticsDetailById/',
    //129订单列表物流按钮
    getGoodsStatusById: '/goods/api/goodsInternal/getGoodsStatusById/',
    //130商品状态
    logisticDetail: '/orders/api/orderInternal/logisticDetail',
    //物流信息
    userName: '未登录',
    openId: '',//oTtYu5f_MHip85UNqjZuJOnCiCw8
    userImg: '/static/images/moren.jpeg',
    userType: 1,
	memId: '1244516043165716481',//'' 用户id 1245979331716100097   1244516043165716481
	code:"023Q1oVE07k48f2l04WE0rAgVE0Q1oVr",// 登陆者身份编码
    shoppingCarNum: 0,
    login: function () {
		/*
      var that = this;
      uni.login({
        success: function (res) {
          if (res.code) {
            uni.request({
              url: that.url1 + that.wxRedirect + res.code,
              header: {
                aid: 100
              },
              success: function (res) {
                if (res.data.data.type == 1) {
                  that.openId = res.data.data.memberWechat.openId;
                  that.userType = res.data.data.type;
                  that.shoppingCarNum = res.data.data.memberWechat.shoppingCarNum;
                  that.userImg = res.data.data.memberWechat.avatarUrl;
                  that.userName = res.data.data.memberWechat.nickname;
                  that.memId = res.data.data.memberWechat.id;
                } else {
                  that.openId = res.data.data.openId;
                  wx.showModal({
                    title: '提示',
                    content: '小可爱，微信授权一键登录',
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateTo({
                          url: '/pages/authorization/authorization'
                        });
                      } else if (res.cancel) {
                        console.log('用户点击取消');
                      }
                    }
                  });
                }
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg);
          }
        }
      });
	  */
	 uni.showModal({
	     title: '授权登陆',
	     content: '小可爱，微信授权一键登录',
	     success: function (res) {
			 console.log(res.confirm)
	         if (res.confirm) {
				 uni.navigateTo({
				   url: '/pages/authorization/authorization'
				 });
	             // uni.authorize({
	             //     scope: 'scope.userInfo',
	             //     success() {
	             //        uni.getUserInfo({
	             // 			  provider: 'weixin',
	             // 			  success: function (infoRes) {
	             // 				console.log(infoRes);
	             // 			  }
	             // 			})
	             //     }
	             // })
	         } else if (res.cancel) {
	             console.log('用户点击取消');
	         }
	     }
	 });
	 
    }
  },
  onLaunch: function () {
	var that =this;
	console.log('onlaunch')
	uni.getStorage({
		key: 'storage_web_app_isLogin',
		success: function (res) {
			if(res.data==0){//0 未登录
				that.$store.dispatch('login/SET_isLogin',false)
			}else if(res.data==1){//1 登录
				that.$store.dispatch('login/SET_isLogin',true)
			}
		},
		fail: (err) => {
			that.$store.dispatch('login/SET_isLogin',false)
			uni.setStorage({
				key: 'storage_web_app_isLogin',
				data: '0',
				success: function () {
					console.log('首次未登录');
				}
			});
		}
	});
	uni.getStorage({
		key: 'storage_web_app_userInfo',
		success: function (res) {
			that.$store.dispatch('login/SET_userInfo',JSON.parse(res.data))
		},
		fail: (err) => {
			that.$store.dispatch('login/SET_userInfo',null)
		}
	});
	
  },
  onShow: function() {
  	console.log('App Show')
  },
  onHide: function() {
  	console.log('App Hide')
  },
  methods: {}
};
</script>
<style>
@import "./app.css";
</style>