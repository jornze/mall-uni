(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-commodity_details-commodity_details"],{"3a0e":function(t,e,i){"use strict";var o,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{current:"0",circular:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.list,function(e,o){return i("v-uni-swiper-item",{key:o},[i("v-uni-image",{attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage1(o)}}})],1)}),1),i("v-uni-view",{staticClass:"imageCount"},[t._v(t._s(t.current+1)+"/"+t._s(t.list.length))])],1),i("v-uni-view",{staticClass:"commodity-content"},[i("v-uni-view",[i("v-uni-view",[i("v-uni-text",[i("v-uni-text",[t._v("￥")]),t._v(t._s(t.chooseSku.marketPrice))],1),t.chooseSku.marketPrice!==t.chooseSku.retailPrice?i("v-uni-text",[t._v("￥"+t._s(t.chooseSku.retailPrice))]):t._e()],1),i("v-uni-view",t._l(t.all.ensureList,function(e,o){return 1==e.rank?i("v-uni-text",{key:o},[t._v(t._s(e.content))]):t._e()}),1)],1),i("v-uni-view",[i("v-uni-view",[i("v-uni-view",[i("v-uni-text",{staticClass:"commodity-title"},[t._v(t._s(t.all.goodsName))]),i("v-uni-text",{staticClass:"commodity-class"},[t._v("定制版")])],1),i("v-uni-view",t._l(t.all.ensureList,function(e,o){return 2==e.rank?i("v-uni-text",{key:o,staticClass:"commodity-ensure"},[t._v(t._s(e.content))]):t._e()}),1)],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:"/static/images/Commodity_details_Collection_uncheckede_Copy.png"}}),i("v-uni-text",[t._v("已收藏")])],1)],1)],1),i("v-uni-view",{staticClass:"commodity-image"},[t._l(t.detailImgList,function(t,e){return[i("v-uni-image",{key:e+"_0",attrs:{src:t,mode:"widthFix"}})]})],2),i("v-uni-view",{staticClass:"commodity-bottom"},[i("v-uni-view",[i("v-uni-view",[i("v-uni-image",{attrs:{src:"/static/images/Commodity_details_Private_letter.png"}}),i("v-uni-text",[t._v("私信")])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoppingCart.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/images/Commodity_details_shopping_Copy.png"}}),i("v-uni-text",[t._v("购物车")]),t.shoppingCartNum?i("v-uni-view",[t._v(t._s(t.shoppingCartNum))]):t._e()],1)],1),i("v-uni-view",[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoppingCartChoose.apply(void 0,arguments)}}},[t._v("加入购物车")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyChoose.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1),t.choose?i("v-uni-view",{staticClass:"commodity-choose"},[i("v-uni-view",{staticClass:"commodity-choose-intro"},[i("v-uni-view",[i("v-uni-image",{attrs:{src:t.chooseSku.mainImg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage2(t.chooseSku.mainImg)}}})],1),i("v-uni-view",[i("v-uni-text",{staticClass:"commodity-choose-intro-name"},[t._v(t._s(t.all.goodsName))]),i("v-uni-text",{staticClass:"commodity-choose-intro-class"},[t._v("已选："+t._s(t.chooseSku.skuName)+"；")]),i("v-uni-text",{staticClass:"commodity-choose-intro-free"},[t._v("赠品：皮绳红色")]),i("v-uni-view",{staticClass:"commodity-choose-intro-money"},[i("v-uni-view",[i("span",[t._v("￥")]),t._v(t._s(t.chooseSku.marketPrice))]),i("v-uni-text",[t._v("x"+t._s(t.chooseSku.skuQty))])],1)],1),i("v-uni-image",{staticClass:"close",attrs:{src:"/static/images/close.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"commodity-choose-guige"},[i("v-uni-text",[t._v("规格")]),i("v-uni-view",[t._l(t.goodsSkuVoList,function(e,o){return[0==!e.skuStock?i("v-uni-text",{key:o+"_0",class:t.chooseIndex==o?"commodity-choose-guige-choose":"commodity-choose-guige-unchoose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseType(o)}}},[t._v(t._s(e.skuName))]):t._e(),0==e.skuStock?i("v-uni-text",{key:o+"_1",class:t.chooseIndex==o?"commodity-choose-guige-choose":"commodity-choose-guige-unchoose2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseType(o)}}},[t._v(t._s(e.skuName))]):t._e()]})],2)],1),i("v-uni-view",{staticClass:"commodity-choose-num"},[i("v-uni-text",[t._v("数量")]),i("v-uni-view",{staticClass:"buy-num"},[i("v-uni-view",{class:1==t.chooseSku.skuQty?"jian-btn-disabled":"jian-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reduce.apply(void 0,arguments)}}},[t._v("－")]),i("v-uni-input",{attrs:{value:t.chooseSku.skuQty,disabled:"true"}}),i("v-uni-view",{class:t.chooseSku.skuQty==t.chooseSku.skuStock?"jia-btn-disabled":"jia-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("+")])],1)],1),i("v-uni-view",{staticClass:"commodity-choose-free"},[i("v-uni-text",[t._v("赠品")]),i("v-uni-view",[i("v-uni-text",{staticClass:"commodity-choose-guige-unchoose"},[t._v("红色")]),i("v-uni-text",{staticClass:"commodity-choose-guige-unchoose"},[t._v("黑色")]),i("v-uni-text",{staticClass:"commodity-choose-guige-unchoose"},[t._v("随机")])],1)],1),"shoppingCart"==t.choose&&0!==t.chooseSku.skuStock?i("v-uni-view",{staticClass:"commodity-choose-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinShoppingCart.apply(void 0,arguments)}}},[t._v("加入购物车")]):t._e(),0==t.chooseSku.skuStock?i("v-uni-view",{staticClass:"commodity-choose-bottom2"},[t._v("库存不足")]):t._e(),"buy"==t.choose&&0!==t.chooseSku.skuStock?i("v-uni-view",{staticClass:"commodity-choose-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.orderDetails.apply(void 0,arguments)}}},[t._v("选好了")]):t._e()],1):t._e()],1)},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return o})},"40c33":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-8f0d6e20]{background-color:#eee;padding-bottom:%?125?%;height:100%}.swiper-box[data-v-8f0d6e20]{width:%?750?%;height:%?730?%;position:relative}uni-swiper[data-v-8f0d6e20]{width:100%;height:100%}uni-swiper uni-image[data-v-8f0d6e20]{width:100%;height:100%}.imageCount[data-v-8f0d6e20]{position:absolute;width:%?88?%;height:%?48?%;background-color:rgba(30,30,30,.4);border-radius:%?24?%;line-height:%?48?%;color:#fff;text-align:center;font-size:%?22?%;right:%?26?%;bottom:%?40?%}.commodity-content[data-v-8f0d6e20]{width:%?710?%;background-color:#fff;padding:0 %?20?%}.commodity-content>uni-view[data-v-8f0d6e20]:nth-child(1){width:%?710?%;height:%?105?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.commodity-content>uni-view:nth-child(1)>uni-view:nth-child(1)>uni-text[data-v-8f0d6e20]:nth-child(1){color:#ff4343;font-size:%?44?%;font-weight:700}.commodity-content>uni-view:nth-child(1)>uni-view:nth-child(1)>uni-text:nth-child(1) uni-text[data-v-8f0d6e20]{color:#ff4343;font-size:%?31?%;font-weight:700;margin-right:%?5?%}.commodity-content>uni-view:nth-child(1)>uni-view:nth-child(1)>uni-text[data-v-8f0d6e20]:nth-child(2){color:#aaa;font-size:%?26?%;text-decoration:line-through;margin-left:%?20?%}\r\n/* .commodity-content>view:nth-child(1)>view:nth-child(2)>text:nth-child(1){\r\n  color: #ff4343;\r\n  font-size: 26rpx;\r\n  border: 1rpx solid #ff4343;\r\n  height: 20rpx;\r\n  padding: 0 15rpx;\r\n  line-height: 20rpx;\r\n  margin-left: 20rpx;\r\n  border-radius: 5rpx;\r\n} */.commodity-content>uni-view:nth-child(1)>uni-view:nth-child(2)>uni-text[data-v-8f0d6e20]{color:#ff4343;font-size:%?26?%;border:%?1?% solid #ff4343;height:%?20?%;padding:0 %?15?%;line-height:%?20?%;margin-left:%?20?%;border-radius:%?5?%}.commodity-manjian[data-v-8f0d6e20]{color:#aaa;font-size:%?26?%;border:%?1?% solid #aaa;height:%?20?%;padding:0 %?15?%;line-height:%?20?%;margin-left:%?20?%;border-radius:%?5?%}.commodity-manjian uni-text[data-v-8f0d6e20]{color:#ff7eb3}.commodity-content>uni-view[data-v-8f0d6e20]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?710?%}.commodity-content>uni-view:nth-child(2)>uni-view:nth-child(1)>uni-view[data-v-8f0d6e20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.commodity-title[data-v-8f0d6e20]{font-size:%?32?%;font-weight:700;width:%?500?%}.commodity-class[data-v-8f0d6e20]{font-size:%?25?%;color:#6d6d6d;margin-left:%?30?%}.commodity-ensure[data-v-8f0d6e20]{font-size:%?25?%;margin-right:%?40?%;color:#aeaeae;margin-top:%?25?%}.commodity-content>uni-view:nth-child(2)>uni-view[data-v-8f0d6e20]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?100?%}.commodity-content>uni-view:nth-child(2)>uni-view:nth-child(2) uni-image[data-v-8f0d6e20]{height:%?60?%;width:%?60?%}.commodity-content>uni-view:nth-child(2)>uni-view:nth-child(2) uni-text[data-v-8f0d6e20]{font-size:%?27?%;color:#686868;margin-top:%?10?%}.commodity-information-box[data-v-8f0d6e20]{width:%?730?%;padding-left:%?20?%;background-color:#fff}.commodity-information-box>uni-view[data-v-8f0d6e20]{width:%?730?%;border-bottom:%?1?% solid #eee;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.commodity-information[data-v-8f0d6e20]{color:#7d7d7d;font-size:%?29?%}.commodity-information-title[data-v-8f0d6e20]{color:#aaa;font-size:%?26?%}.commodity-information-content[data-v-8f0d6e20]{color:#676767;font-size:%?26?%;margin-right:%?20?%}.commodity-image[data-v-8f0d6e20]{width:%?750?%;padding-bottom:%?130?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.commodity-image uni-image[data-v-8f0d6e20]{width:%?750?%}.commodity-bottom[data-v-8f0d6e20]{background-color:#fff;width:%?750?%;height:%?125?%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.commodity-bottom>uni-view[data-v-8f0d6e20]:nth-child(1){height:%?125?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.commodity-bottom>uni-view:nth-child(1)>uni-view[data-v-8f0d6e20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?125?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?130?%;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.commodity-bottom>uni-view:nth-child(1)>uni-view uni-image[data-v-8f0d6e20]{height:%?47?%;width:%?47?%}.commodity-bottom>uni-view:nth-child(1)>uni-view uni-text[data-v-8f0d6e20]{font-size:%?25?%;color:#7d7d7d}.commodity-bottom>uni-view:nth-child(1)>uni-view uni-view[data-v-8f0d6e20]{position:absolute;width:%?38?%;height:%?38?%;border-radius:50%;background-color:#ff4343;color:#fff;line-height:%?38?%;text-align:center;font-size:%?23?%;top:%?18?%;right:%?28?%}.commodity-bottom>uni-view[data-v-8f0d6e20]:nth-child(2){height:%?80?%;width:%?428?%;border-radius:%?40?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?20?%}.commodity-bottom>uni-view:nth-child(2)>uni-text[data-v-8f0d6e20]:nth-child(1){color:#fff;background-color:#fe6b6b;width:%?214?%;height:%?80?%;font-size:%?30?%;line-height:%?80?%;text-align:center}.commodity-bottom>uni-view:nth-child(2)>uni-text[data-v-8f0d6e20]:nth-child(2){color:#fff;background-color:#ff4343;width:%?214?%;height:%?80?%;font-size:%?30?%;line-height:%?80?%;text-align:center}.commodity-choose[data-v-8f0d6e20]{background-color:#fff;position:fixed;bottom:0;width:%?750?%;z-index:700}.commodity-choose-intro[data-v-8f0d6e20]{width:%?710?%;height:%?220?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%;border-bottom:%?1?% solid #eee;position:relative}.close[data-v-8f0d6e20]{position:absolute;right:%?10?%;width:%?60?%;height:%?60?%;top:0}.commodity-choose-intro>uni-view[data-v-8f0d6e20]:nth-child(1){height:%?200?%;width:%?200?%}.commodity-choose-intro>uni-view:nth-child(1) uni-image[data-v-8f0d6e20]{height:100%;width:100%}.commodity-choose-intro>uni-view[data-v-8f0d6e20]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?200?%;width:%?425?%}.commodity-choose-intro-name[data-v-8f0d6e20]{font-size:%?29?%;color:#333;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;width:%?425?%}.commodity-choose-intro-class[data-v-8f0d6e20]{font-size:%?25?%;color:#888;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;width:%?425?%}.commodity-choose-intro-free[data-v-8f0d6e20]{font-size:%?25?%;color:#888;margin:%?-30?% 0 0 %?70?%}.commodity-choose-intro-money[data-v-8f0d6e20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:%?470?%}.commodity-choose-intro-money>uni-view[data-v-8f0d6e20]{color:#ff4343;font-size:%?42?%}.commodity-choose-intro-money>uni-view span[data-v-8f0d6e20]{color:#ff4343;font-size:%?35?%}.commodity-choose-intro-money>uni-text[data-v-8f0d6e20]{color:#999;font-size:%?28?%}.commodity-choose-guige[data-v-8f0d6e20]{border-bottom:%?1?% solid #eee;padding:0 %?25?%;max-height:%?300?%;overflow:auto}.commodity-choose-guige>uni-text[data-v-8f0d6e20]{font-size:%?30?%;color:#666;margin-top:%?20?%}.commodity-choose-guige>uni-view[data-v-8f0d6e20]{margin:%?20?% 0;margin-right:%?-20?%}.commodity-choose-guige-unchoose[data-v-8f0d6e20]{background-color:#efefef;border-radius:%?60?%;font-size:%?29?%;color:#676767;padding:%?10?% %?20?%;display:inline-block;margin-right:%?20?%;margin-bottom:%?20?%}.commodity-choose-guige-unchoose2[data-v-8f0d6e20]{background-color:#efefef;border-radius:%?60?%;font-size:%?29?%;color:#d4d4d4;padding:%?10?% %?20?%;display:inline-block;margin-right:%?20?%;margin-bottom:%?20?%}.commodity-choose-guige-choose[data-v-8f0d6e20]{background-color:#ff4343;border-radius:%?60?%;font-size:%?29?%;color:#fff;padding:%?10?% %?20?%;display:inline-block;margin-right:%?20?%;margin-bottom:%?20?%}.commodity-choose-num[data-v-8f0d6e20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?710?%;height:%?90?%;border-bottom:%?1?% solid #eee;padding:0 %?20?%}.commodity-choose-num>uni-text[data-v-8f0d6e20]{font-size:%?30?%;color:#666}.buy-num[data-v-8f0d6e20]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;text-align:center}.buy-num .jian-btn[data-v-8f0d6e20]{width:%?61?%;height:100%;line-height:%?60?%;background-color:#eee;font-size:%?50?%;color:#999}.buy-num .jian-btn-disabled[data-v-8f0d6e20]{width:%?61?%;height:100%;line-height:%?60?%;background-color:#f6f6f6;font-size:%?50?%;color:#cbcbcb}.buy-num .jia-btn-disabled[data-v-8f0d6e20]{width:%?61?%;height:100%;line-height:%?60?%;background-color:#f6f6f6;font-size:%?50?%;color:#cbcbcb}.buy-num uni-view[data-v-8f0d6e20]{font-size:%?30?%;font-weight:500;color:#666}.buy-num .jia-btn[data-v-8f0d6e20]{width:%?61?%;line-height:%?60?%;height:100%;background-color:#eee;font-size:%?50?%;color:#999}.buy-num uni-input[data-v-8f0d6e20]{width:%?70?%;height:%?60?%;text-align:center;font-size:%?26?%;background-color:#eee;line-height:%?30?%;margin-left:%?3?%;margin-right:%?3?%}.commodity-choose-free[data-v-8f0d6e20]{border-bottom:%?1?% solid #eee;padding:0 %?25?%}.commodity-choose-free>uni-text[data-v-8f0d6e20]{font-size:%?30?%;color:#666;margin-top:%?20?%}.commodity-choose-free>uni-view[data-v-8f0d6e20]{margin:%?20?% 0;margin-right:%?-20?%}.commodity-choose-bottom[data-v-8f0d6e20]{background-color:#ff7e7e;width:%?750?%;height:%?110?%;color:#fff;font-size:%?35?%;text-align:center;line-height:%?110?%}.commodity-choose-bottom2[data-v-8f0d6e20]{background-color:#909399;width:%?750?%;height:%?110?%;color:#f5f5f5;font-size:%?35?%;text-align:center;line-height:%?110?%}body.?%PAGE?%[data-v-8f0d6e20]{background-color:#eee}",""])},"4cdb":function(t,e,i){var o=i("40c33");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("5781f13d",o,!0,{sourceMap:!1,shadowMode:!1})},"4fc3":function(t,e,i){"use strict";var o=i("4cdb"),n=i.n(o);n.a},"65b3":function(t,e,i){"use strict";(function(t){var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.uniHttp=void 0;var n=o(i("cebc")),a=o(i("795b")),s="",d=function(e){var i="undefiend"==e.method?"GET":e.method;e.header=void 0==e.header?{aid:"001"}:e.header;var o=JSON.parse(localStorage.getItem("storage_web_app_userInfo")),d=null==o?{account:"",token:""}:{account:o.id,token:o.token};return new a.default(function(o,a){t.log(d),uni.request({url:"".concat(s).concat(e.path),data:(0,n.default)({},e.data),method:i,header:(0,n.default)({},d,e.header),success:function(i){t.log(i),200==i.statusCode?(t.log(i),200==i.data.code?200==i.data.data.errorCode||1==i.data.data?o(i.data.data):109==e.header.aid?o(i.data.data):124==e.header.aid?t.log("不做错误提示"):(uni.showToast({title:i.data.data.errorMsg,icon:"none",duration:2200}),a(i)):124==e.header.aid?t.log("不做错误提示"):(uni.showToast({title:i.data.message,icon:"none",duration:2200}),a(i))):999==i.data.code?uni.showToast({title:"登录过期,请重新登录",icon:"none",duration:2200,success:function(){uni.navigateTo({url:"/pages/login/login"})}}):(uni.showToast({title:"异常状态码: "+i.statusCode,icon:"none",duration:2200}),a(i))},fail:function(t){uni.showToast({title:"数据请求失败,请重试! ",icon:"none",duration:2200}),a(t)}})})};e.uniHttp=d}).call(this,i("5a52")["default"])},a26e:function(t,e,i){"use strict";(function(t){var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("cebc")),a=i("65b3"),s=i("2f62"),d={data:function(){return{hidden:!1,current:"",choose:"",chooseIndex:1,chooseSku:"",list:[],detailImgList:[],all:"",goodsSkuVoList:[],shoppingCartNum:"",totalPrice:""}},components:{},props:{},onLoad:function(t){var e=this;uni.showLoading({title:"加载中...",mask:!0}),(0,a.uniHttp)({path:"/goods/api/goodsInternal/getGoodsDetailsById/"+t.goodsId,header:{aid:"106",type:"1"}}).then(function(t){for(var i=t,o=0;o<i.goodsVo.carouselImgList.length;o++){var n=getApp().globalData.imgUrl+"/"+i.goodsVo.carouselImgList[o];i.goodsVo.carouselImgList[o]=n}for(o=0;o<i.goodsVo.goodsSkuVoList.length;o++){n=getApp().globalData.imgUrl+"/"+i.goodsVo.goodsSkuVoList[o].mainImg;var a=1;i.goodsVo.goodsSkuVoList[o].skuQty=a,i.goodsVo.goodsSkuVoList[o].mainImg=n}for(o=0;o<i.goodsVo.detailImgList.length;o++){n=getApp().globalData.imgUrl+"/"+i.goodsVo.detailImgList[o];i.goodsVo.detailImgList[o]=n}for(var s in i.goodsVo.goodsSkuVoList)e.goodsSkuVoList.push(i.goodsVo.goodsSkuVoList[s]);e.list=i.goodsVo.carouselImgList,e.all=i.goodsVo,e.detailImgList=i.goodsVo.detailImgList,e.chooseSku=e.goodsSkuVoList[0],uni.hideLoading()})},onReady:function(){},onShow:function(){var e=this;t.log(this.userInfo,this.loginStatus),this.pageLoading=!1,this.userInfo&&(0,a.uniHttp)({path:"/member/api/memberInternal/getShoppingCartCount/"+this.$store.getters["login/get_userInfo"].id,header:{aid:"107"}}).then(function(t){e.shoppingCartNum=t.shoppingCartNum})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},computed:(0,n.default)({},(0,s.mapGetters)("login",{loginStatus:"get_isLogin",userInfo:"get_userInfo"})),methods:{swiperChange:function(t){this.current=t.detail.current},preventD:function(){},previewImage1:function(t){uni.previewImage({current:this.list[t],urls:this.list})},previewImage2:function(t){var e=t,i=[];i.push(e),uni.previewImage({current:e,urls:i})},shoppingCart:function(){this.loginStatus?this.pageLoading||(this.pageLoading=!0,uni.navigateTo({url:"/pages/shoppingCart/shoppingCart"})):this.islogined()},buyChoose:function(){this.userInfo?this.choose="buy":this.islogined()},orderDetails:function(t){var e=this,i=[{}];i[0].goodsId=this.all.id,i[0].skuId=this.chooseSku.id,i[0].skuQty=this.chooseSku.skuQty,uni.showLoading({title:"加载中...",mask:!0}),(0,a.uniHttp)({path:"/orders/api/orderInternal/generatingOrder",method:"POST",data:{wxMemId:this.$store.getters["login/get_userInfo"].id,openId:"",orderSource:getApp().globalData.userType,orderVoList:i},header:{aid:119}}).then(function(t){e.pageLoading||(e.pageLoading=!0,uni.hideLoading(),uni.navigateTo({url:"/pages/orderDetails/orderDetails?parendNo="+t.parendNo}),e.choose="")})},shoppingCartChoose:function(){this.userInfo?this.choose="shoppingCart":this.islogined()},joinShoppingCart:function(){var e=this;(0,a.uniHttp)({path:getApp().globalData.addAShoppingCart,method:"POST",data:{memId:this.$store.getters["login/get_userInfo"].id,memSource:1,skuId:this.chooseSku.id,qty:this.chooseSku.skuQty},header:{aid:"114"}}).then(function(i){t.log(i),(0,a.uniHttp)({path:getApp().globalData.getShoppingCartCount+e.$store.getters["login/get_userInfo"].id,data:{},header:{aid:"107"}}).then(function(t){e.shoppingCartNum=t.shoppingCartNum})}),this.choose=""},close:function(){this.choose=""},chooseType:function(t){this.chooseIndex=t,this.chooseSku=this.goodsSkuVoList[t]},reduce:function(){var t={};this.chooseSku.skuQty>=2&&(t.skuQty=this.chooseSku.skuQty-1,this.chooseSku.skuQty=t.skuQty)},add:function(){var t={};this.chooseSku.skuQty<this.chooseSku.skuStock&&(t.skuQty=this.chooseSku.skuQty+1,this.chooseSku.skuQty=t.skuQty)},islogined:function(){this.loginStatus||uni.showModal({title:"提示",content:"请先登录哦!",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/login/login"})}})}}};e.default=d}).call(this,i("5a52")["default"])},fa1e:function(t,e,i){"use strict";i.r(e);var o=i("a26e"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},ffc1:function(t,e,i){"use strict";i.r(e);var o=i("3a0e"),n=i("fa1e");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("4fc3");var s,d=i("f0c5"),c=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"8f0d6e20",null,!1,o["a"],s);e["default"]=c.exports}}]);