(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderDetailByOrders-orderDetailByOrders"],{"0e64":function(e,t,i){"use strict";i.r(t);var a=i("f56b"),n=i("4ef0");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("39c6");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"e97bad9c",null,!1,a["a"],d);t["default"]=s.exports},"0ef2":function(e,t,i){var a=i("8fa4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("26c89aa1",a,!0,{sourceMap:!1,shadowMode:!1})},"39c6":function(e,t,i){"use strict";var a=i("0ef2"),n=i.n(a);n.a},"4ef0":function(e,t,i){"use strict";i.r(t);var a=i("f917"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"65b3":function(e,t,i){"use strict";(function(e){var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.uniHttp=void 0;var n=a(i("cebc")),o=a(i("795b")),d="",r=function(t){var i="undefiend"==t.method?"GET":t.method;t.header=void 0==t.header?{aid:"001"}:t.header;var a=JSON.parse(localStorage.getItem("storage_web_app_userInfo")),r=null==a?{account:"",token:""}:{account:a.id,token:a.token};return new o.default(function(a,o){e.log(r),uni.request({url:"".concat(d).concat(t.path),data:(0,n.default)({},t.data),method:i,header:(0,n.default)({},r,t.header),success:function(i){e.log(i),200==i.statusCode?(e.log(i),200==i.data.code?200==i.data.data.errorCode||1==i.data.data?a(i.data.data):109==t.header.aid?a(i.data.data):124==t.header.aid?e.log("不做错误提示"):(uni.showToast({title:i.data.data.errorMsg,icon:"none",duration:2200}),o(i)):124==t.header.aid?e.log("不做错误提示"):(uni.showToast({title:i.data.message,icon:"none",duration:2200}),o(i))):999==i.data.code?uni.showToast({title:"登录过期,请重新登录",icon:"none",duration:2200,success:function(){uni.navigateTo({url:"/pages/login/login"})}}):(uni.showToast({title:"异常状态码: "+i.statusCode,icon:"none",duration:2200}),o(i))},fail:function(e){uni.showToast({title:"数据请求失败,请重试! ",icon:"none",duration:2200}),o(e)}})})};t.uniHttp=r}).call(this,i("5a52")["default"])},"8fa4":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-e97bad9c]{background-color:#eee;padding-bottom:%?140?%}.order-header[data-v-e97bad9c]{width:%?750?%;height:%?170?%;background:-webkit-linear-gradient(left,#ff625f,#ff7a56);background:linear-gradient(90deg,#ff625f,#ff7a56);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-header uni-image[data-v-e97bad9c]{height:%?80?%;width:%?80?%;margin-left:%?30?%}.order-header>uni-view[data-v-e97bad9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#fff;margin-left:%?30?%}.order-header>uni-view>uni-text[data-v-e97bad9c]:nth-child(1){font-size:%?30?%}.order-header>uni-view>uni-text[data-v-e97bad9c]:nth-child(2){font-size:%?25?%;margin-top:%?15?%}.order-time[data-v-e97bad9c]{font-size:%?28?%;margin-left:%?50?%}.receiving-address[data-v-e97bad9c]{background-color:#fff}.describe[data-v-e97bad9c]{width:%?750?%;height:%?90?%;border-bottom:%?1?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.describe uni-view[data-v-e97bad9c]{width:%?8?%;height:%?44?%;background-color:#ff4343;border-radius:%?8?%;margin-left:%?20?%}.describe uni-text[data-v-e97bad9c]{color:#666;font-size:%?28?%;margin-left:%?15?%;font-weight:700;letter-spacing:%?3?%}.receiving-address>uni-view[data-v-e97bad9c]:nth-child(2){width:%?750?%;height:%?145?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.receiving-address>uni-view:nth-child(2)>uni-image[data-v-e97bad9c]:nth-child(1){height:%?40?%;width:%?40?%;margin-left:%?25?%}.receiving-address>uni-view:nth-child(2)>uni-view[data-v-e97bad9c]:nth-child(2){margin:%?20?%;font-size:%?28?%;color:#666;width:%?580?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.receiving-address>uni-view:nth-child(2)>uni-view:nth-child(2)>uni-view[data-v-e97bad9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?30?%}.receiving-address>uni-view:nth-child(2)>uni-view:nth-child(2)>uni-text[data-v-e97bad9c]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;width:%?580?%;margin-top:%?20?%}.receiving-address>uni-view:nth-child(2)>uni-image[data-v-e97bad9c]:nth-child(3){height:%?45?%;width:%?45?%;margin-right:%?20?%}.receiving-address>uni-image[data-v-e97bad9c]{width:%?750?%;height:%?15?%}.commodity-information[data-v-e97bad9c]{background-color:#fff;margin-top:%?20?%}.commodity-list[data-v-e97bad9c]{border-bottom:%?1?% solid #eee;width:%?750?%;height:%?270?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.commodity-list>uni-image[data-v-e97bad9c]{width:%?200?%;height:%?200?%;border-radius:%?10?%;margin-left:%?30?%}.commodity-list>uni-view[data-v-e97bad9c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:%?20?%;height:%?200?%}.commodity-list>uni-view>uni-view[data-v-e97bad9c]:nth-child(1){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;width:%?395?%;font-size:%?29?%;color:#333;font-weight:700}.commodity-list>uni-view>uni-view[data-v-e97bad9c]:nth-child(2){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;width:%?460?%;color:#666;font-size:%?25?%}.moneyNUm[data-v-e97bad9c]{color:#ff4343;font-size:%?35?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?470?%}.moneyNUm span[data-v-e97bad9c]{font-size:%?26?%}.moneyNUm uni-text[data-v-e97bad9c]{color:#333;font-size:%?26?%}.more[data-v-e97bad9c]{border-bottom:%?1?% solid #eee;margin-left:%?20?%;padding-right:%?20?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#676767}.more>uni-text[data-v-e97bad9c]:nth-child(2){color:#333}.total[data-v-e97bad9c]{border-bottom:%?1?% solid #eee;margin-left:%?20?%;padding-right:%?20?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#ff4343}.payment-method[data-v-e97bad9c]{margin-top:%?20?%;padding:0 %?20?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff}.payment-method>uni-view[data-v-e97bad9c]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.payment-method>uni-view uni-image[data-v-e97bad9c]{height:%?60?%;width:%?60?%}.payment-method>uni-view uni-text[data-v-e97bad9c]{font-size:%?30?%;margin-left:%?20?%}.payment-method>uni-image[data-v-e97bad9c]{height:%?40?%;width:%?40?%}.orderDetails-bottom[data-v-e97bad9c]{position:fixed;bottom:0;width:%?750?%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;background-color:#fff}.orderDetails-bottom .cancelOrder[data-v-e97bad9c]{width:%?220?%;height:%?70?%;background-color:#999;color:#fff;font-size:%?30?%;margin-right:%?20?%;border-radius:%?35?%;line-height:%?70?%;text-align:center}.orderDetails-bottom .ToOrder[data-v-e97bad9c]{background-color:#ff4343;width:%?220?%;height:%?70?%;color:#fff;font-size:%?30?%;margin-right:%?20?%;border-radius:%?35?%;line-height:%?70?%;text-align:center}.orderDetails-bottom .deletOrder[data-v-e97bad9c]{width:%?220?%;height:%?70?%;border:%?1?% solid #ff4343;background-color:#fff;color:#ff4343;font-size:%?30?%;margin-right:%?20?%;border-radius:%?35?%;line-height:%?70?%;text-align:center}.orderDetails-bottom .grey[data-v-e97bad9c]{width:%?220?%;height:%?70?%;border:%?1?% solid #666;background-color:#fff;color:#666;font-size:%?30?%;margin-right:%?20?%;border-radius:%?35?%;line-height:%?70?%;text-align:center}body.?%PAGE?%[data-v-e97bad9c]{background-color:#eee}",""])},f56b:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"order-header"},[1==e.orderStatus?i("v-uni-image",{attrs:{src:"/static/images/wait.png"}}):e._e(),2==e.orderStatus||3==e.orderStatus||4==e.orderStatus||5==e.orderStatus||6==e.orderStatus?i("v-uni-image",{attrs:{src:"/static/images/Collect.png"}}):e._e(),7==e.orderStatus?i("v-uni-image",{attrs:{src:"/static/images/fail.png"}}):e._e(),i("v-uni-view",[1==e.orderStatus?i("v-uni-text",[e._v("等待买家付款")]):e._e(),1==e.orderStatus?i("v-uni-text",[e._v("订单将在库存不足时自动关闭")]):e._e(),2==e.orderStatus?i("v-uni-text",[e._v("等待卖家发货")]):e._e(),3==e.orderStatus?i("v-uni-text",[e._v("已发货")]):e._e(),4==e.orderStatus?i("v-uni-text",[e._v("已签收，待确认收货")]):e._e(),5==e.orderStatus?i("v-uni-text",[e._v("待评价")]):e._e(),6==e.orderStatus?i("v-uni-text",[e._v("交易完成")]):e._e(),7==e.orderStatus?i("v-uni-text",[e._v("订单已取消")]):e._e()],1),1==e.orderStatus?i("v-uni-view",{staticClass:"order-time"},[e._v("剩余："+e._s(e.time.m)+"分"+e._s(e.time.s)+"秒")]):e._e()],1),i("v-uni-view",{staticClass:"receiving-address"},[i("v-uni-view",{staticClass:"describe"},[i("v-uni-view"),i("v-uni-text",[e._v("收货地址")])],1),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressFun.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/SP_add.png"}}),e.address.phone?i("v-uni-view",[i("v-uni-view",[i("v-uni-text",[e._v(e._s(e.address.consignee))]),i("v-uni-text",[e._v(e._s(e.address.phone))])],1),i("v-uni-text",[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.area)+e._s(e.address.address))])],1):e._e(),e.address.phone?e._e():i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressFun.apply(void 0,arguments)}}},[e._v("添加收货地址")]),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==e.orderStatus,expression:"orderStatus==1"}],attrs:{src:"/static/images/right.png"}})],1),i("v-uni-image",{attrs:{src:"/static/images/SP_add_bg.png"}})],1),i("v-uni-view",{staticClass:"commodity-information"},[i("v-uni-view",{staticClass:"describe"},[i("v-uni-view"),i("v-uni-text",[e._v("商品信息")])],1),e._l(e.orderVoList,function(t,a){return[i("v-uni-view",{key:a+"_0",staticClass:"commodity-list",attrs:{"data-goodsid":t.goodsId},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.commodity_details.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.skuImg}}),i("v-uni-view",[i("v-uni-view",[e._v(e._s(t.goodsName))]),i("v-uni-view",[e._v(e._s(t.skuName))]),i("v-uni-view",{staticClass:"moneyNUm"},[i("v-uni-view",[i("span",[e._v("￥")]),e._v(e._s(t.marketPrice))]),i("v-uni-text",[e._v("x"+e._s(t.skuQty))])],1)],1)],1)]}),i("v-uni-view",{staticClass:"more"},[i("v-uni-text",[e._v("运费")]),i("v-uni-text",[e._v("￥8.00")]),i("v-uni-text",[e._v("包邮")])],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-text",[e._v("订单编号")]),i("v-uni-text",[e._v(e._s(e.parendNo))])],1),i("v-uni-view",{staticClass:"total"},[i("v-uni-text",[e._v("总计")]),i("v-uni-text",[e._v("￥"+e._s(e.money))])],1)],2),1==e.orderStatus?i("v-uni-view",{staticClass:"payment-method"},[i("v-uni-view",[i("v-uni-image",{attrs:{src:"/static/images/weixin.png"}}),i("v-uni-text",[e._v("微信支付")])],1),i("v-uni-image",{attrs:{src:"/static/images/gou.png"}})],1):e._e(),i("v-uni-view",{staticClass:"orderDetails-bottom"},[1==e.orderStatus?i("v-uni-view",{staticClass:"cancelOrder",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelOrder.apply(void 0,arguments)}}},[e._v("取消订单")]):e._e(),1==e.orderStatus?i("v-uni-view",{staticClass:"ToOrder",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ToOrder.apply(void 0,arguments)}}},[e._v("支付")]):e._e(),7==e.orderStatus?i("v-uni-view",{staticClass:"deletOrder",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deletOrder.apply(void 0,arguments)}}},[e._v("删除订单")]):e._e(),2==e.orderStatus?i("v-uni-view",{staticClass:"ToOrder",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.remind.apply(void 0,arguments)}}},[e._v("提醒发货")]):e._e(),3==e.orderStatus||4==e.orderStatus?i("v-uni-view",{staticClass:"grey",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sureOrder.apply(void 0,arguments)}}},[e._v("确认收货")]):e._e(),5==e.orderStatus?i("v-uni-view",{staticClass:"grey",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ToEvaluated.apply(void 0,arguments)}}},[e._v("待评价")]):e._e(),6==e.orderStatus?i("v-uni-view",{staticClass:"grey",on:{click:function(t){arguments[0]=t=e.$handleEvent(t)}}},[e._v("订单完成")]):e._e(),3==e.orderStatus||4==e.orderStatus||5==e.orderStatus||6==e.orderStatus?i("v-uni-view",{staticClass:"grey",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logistics.apply(void 0,arguments)}}},[e._v("物流")]):e._e()],1)],1)},o=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return a})},f917:function(e,t,i){"use strict";(function(e){var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("e814"));i("a481");var o=i("65b3"),d={data:function(){return{orderVoList:"",money:"",address:"",chooseId:"",parendNo:"",supId:"",time:{m:"",s:""},timers:"",orderStatus:""}},components:{},props:{},onLoad:function(e){var t=this;t.parendNo=e.parendNo,t.supId=e.supId,t.orderStatus=e.orderStatus,this.getOrderDetail()},onReady:function(){},onShow:function(){this.pageLoading=!1;var t=this;e.log("---",this.chooseId,"--------"),this.chooseId&&(0,o.uniHttp)({path:getApp().globalData.getAddressByMemberId+t.chooseId,header:{aid:110},method:"GET"}).then(function(i){t.address=i.memberAddrVo,e.log(t.address)})},onHide:function(){},onUnload:function(){clearInterval(this.timers);var e=this;1==this.orderStatus&&(0,o.uniHttp)({path:getApp().globalData.supplementOrderMoney,data:{totalPayAmout:e.money,parendNo:e.parendNo,openId:getApp().globalData.openId,consignee:e.address.consignee,phone:e.address.phone,province:e.address.province,city:e.address.city,area:e.address.area,address:e.address.address,addressId:e.chooseId,wxMemId:e.$store.getters["login/get_userInfo"].id},header:{aid:124},method:"put"}).then(function(e){})},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getOrderDetail:function(){var t=this;uni.showLoading({title:"加载中...",mask:!0});var i=7==this.orderStatus||1==this.orderStatus?0:1;(0,o.uniHttp)({path:getApp().globalData.getOrderDetailByCondition,data:{parendNo:this.parendNo,supId:this.supId,category:i},header:{aid:126},method:"post"}).then(function(i){if(i.orderTYVo.orderVoList.length>0){for(var a=0;a<i.orderTYVo.orderVoList.length;a++){var n=getApp().globalData.imgUrl+"/"+i.orderTYVo.orderVoList[a].skuImg;i.orderTYVo.orderVoList[a].skuImg=n,i.orderTYVo.orderVoList[a].marketPrice=i.orderTYVo.orderVoList[a].marketPrice.toFixed(2)}e.log(i.orderTYVo.orderDetailVo),i.orderTYVo.orderVoList[0].totalAmount=i.orderTYVo.orderVoList[0].totalAmount.toFixed(2),t.orderVoList=i.orderTYVo.orderVoList,t.address=i.orderTYVo.orderDetailVo,t.money=i.orderTYVo.orderVoList[0].totalAmount,i.orderTYVo.orderDetailVo.addressId?t.chooseId=i.orderTYVo.orderDetailVo.addressId:t.getInitAdress(),uni.hideLoading(),t.timer()}})},getInitAdress:function(){var e=this;(0,o.uniHttp)({path:"/member/api/memberInternal/getDefaultAddress/"+this.$store.getters["login/get_userInfo"].id,header:{aid:109}}).then(function(t){e.address=t,e.chooseId=t.id})},timer:function(){var e=this,t=new Date(this.orderVoList[0].createTime.replace(/-/g,"/")),i=(new Date).getTime()-t.getTime();i=9e5-i,this.timers=setInterval(function(){var t=(0,n.default)(i/1e3/60%60,10),a=(0,n.default)(i/1e3%60,10);e.time={m:e.checkTime(t),s:e.checkTime(a)},i-=1e3,i<0&&1==e.orderStatus&&(0,o.uniHttp)({path:getApp().globalData.orderClosureByParendNo,data:{totalPayAmout:e.money,parendNo:e.parendNo,openId:getApp().globalData.openId,consignee:e.address.consignee,phone:e.address.phone,province:e.address.province,city:e.address.city,area:e.address.area,address:e.address.address,wxMemId:e.$store.getters["login/get_userInfo"].id},header:{aid:123},method:"put"}).then(function(t){200==t.errorCode&&uni.showToast({title:"订单已取消",success:function(t){e.orderStatus=7,clearInterval(e.timers)},fail:function(e){},complete:function(e){}})})},1e3)},checkTime:function(e){return e<10&&(e="0"+e),e},addressFun:function(){this.pageLoading||1!=this.orderStatus||(this.pageLoading=!0,uni.navigateTo({url:"/pages/addressManagement/addressManagement?id="+this.chooseId+"&where=1"}))},commodity_details:function(t){var i=this;(0,o.uniHttp)({path:getApp().globalData.getGoodsStatusById+t.currentTarget.dataset.goodsid,header:{aid:130},method:"GET"}).then(function(a){e.log(a),4==a.goodsVo.goodsStatus?uni.showToast({title:"该商品已下架"}):i.pageLoading||(i.pageLoading=!0,uni.navigateTo({url:"/pages/commodity_details/commodity_details?goodsId="+t.currentTarget.dataset.goodsid}))})},remind:function(){uni.showToast({title:"已提醒发货",success:function(e){},fail:function(e){},complete:function(e){}})},ToEvaluated:function(){uni.showToast({title:"暂无评价功能",icon:"none",success:function(e){},fail:function(e){},complete:function(e){}})},cancelOrder:function(){var t=this;uni.showModal({title:"提示",content:"确定取消订单",success:function(i){i.confirm?(e.log("cancel"),(0,o.uniHttp)({path:getApp().globalData.orderClosureByParendNo,data:{totalPayAmout:t.money,parendNo:t.parendNo,openId:getApp().globalData.openId,consignee:t.address.consignee,phone:t.address.phone,province:t.address.province,city:t.address.city,area:t.address.area,address:t.address.address,addressId:t.chooseId,wxMemId:t.$store.getters["login/get_userInfo"].id},header:{aid:123},method:"put"}).then(function(e){200==e.errorCode&&uni.showToast({title:"订单已取消",success:function(e){t.orderStatus=7,clearInterval(t.timers)},fail:function(e){},complete:function(e){}})})):i.cancel}})},ToOrder:function(){var t=this;this.address.phone?(0,o.uniHttp)({path:getApp().globalData.createUnifiedOrder,data:{totalPayAmout:t.money,parendNo:t.parendNo,openId:getApp().globalData.openId,consignee:t.address.consignee,phone:t.address.phone,province:t.address.province,city:t.address.city,area:t.address.area,address:t.address.address,addressId:t.chooseId,wxMemId:t.$store.getters["login/get_userInfo"].id},header:{aid:121},method:"post"}).then(function(e){e.prepayId?(0,o.uniHttp)({path:getApp().globalData.generateSignature,data:{prepayId:e.prepayId},header:{aid:122},method:"post"}).then(function(e){e.sign&&uni.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:"MD5",paySign:e.sign,success:function(e){clearInterval(t.timers),t.orderStatus=2,uni.showToast({title:"支付成功"})}})}):uni.showModal({title:"提示",content:"订单异常，请重新下单"})}):this.address.phone||uni.showModal({title:"提示",content:"请完善收货信息",success:function(t){t.confirm?uni.navigateTo({url:"/pages/addressManagement/addressManagement"}):t.cancel&&e.log("用户点击取消")}})},logistics:function(){e.log(this.address),this.pageLoading||(this.pageLoading=!0,uni.navigateTo({url:"/pages/orderTracking/orderTracking?logisticsCode="+this.address.logisticsCode+"&logisticsPostid="+this.address.logisticsPostid}))},sureOrder:function(){var e=this;uni.showModal({title:"提示",content:"是否确认收货",success:function(t){t.confirm&&(0,o.uniHttp)({path:getApp().globalData.confirmReceive,data:{parendNo:e.parendNo,supId:e.supId,openId:getApp().globalData.openId,wxMemId:e.$store.getters["login/get_userInfo"].id},header:{aid:128},method:"put"}).then(function(t){e.orderStatus=5})}})},deletOrder:function(){var t=this;uni.showModal({title:"提示",content:"确定删除订单",success:function(i){if(i.confirm){var a=7==t.orderStatus?0:1;(0,o.uniHttp)({path:getApp().globalData.deleteOrderByCondition,data:{parendNo:t.parendNo,supId:t.supId,category:a},header:{aid:127},method:"delete"}).then(function(t){e.log(t),uni.navigateBack({delta:1})})}else i.cancel}})}}};t.default=d}).call(this,i("5a52")["default"])}}]);