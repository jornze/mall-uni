(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addressManagement-addressManagement"],{"0441":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"uni-page-body[data-v-a6c9f976]{background-color:#eee;padding-bottom:%?130?%}.none[data-v-a6c9f976]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.none uni-image[data-v-a6c9f976]{height:%?180?%;width:%?250?%;margin-top:%?275?%}.none uni-view[data-v-a6c9f976]{font-size:%?28?%;color:#ccc;margin-top:%?20?%}.addressAll[data-v-a6c9f976]{margin-top:%?40?%;background-color:#fff}.address[data-v-a6c9f976]{border-bottom:%?1?% solid #eee;width:%?750?%;height:%?170?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.addressImgBox[data-v-a6c9f976]{width:%?50?%;height:%?170?%}.addressImgBox uni-image[data-v-a6c9f976]{width:%?39?%;height:%?39?%;margin-left:%?20?%;margin-top:%?67?%}.addressMain[data-v-a6c9f976]{height:%?170?%;width:%?550?%;position:relative;margin-left:%?25?%}.addressMain>uni-view[data-v-a6c9f976]:nth-child(1){color:#333;font-size:%?32?%;margin-top:%?35?%}.addressMain>uni-view:nth-child(1) span[data-v-a6c9f976]{color:#666;font-size:%?26?%;margin-left:%?20?%}.addressMain>uni-view[data-v-a6c9f976]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex}.addressMainDetails[data-v-a6c9f976]{color:#666;font-size:%?25?%;margin-top:%?20?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;width:%?530?%;margin-right:%?25?%}.moren[data-v-a6c9f976]{margin-top:%?20?%;color:#ff4343;font-size:%?23?%;border:%?2?% solid #ff4343;border-radius:%?5?%;width:%?60?%;height:%?30?%;text-align:center;margin-right:%?20?%}.addressEdit[data-v-a6c9f976]{height:%?70?%;width:%?125?%;border-left:%?1?% solid #eee;text-align:center;line-height:%?70?%;color:#676767;font-size:%?28?%;position:absolute;right:0}.bottom[data-v-a6c9f976]{background-color:#ff7e7e;position:fixed;bottom:0;width:%?750?%;height:%?110?%;color:#fff;line-height:%?110?%;text-align:center;font-size:%?36?%}body.?%PAGE?%[data-v-a6c9f976]{background-color:#eee}",""])},1739:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{repeatedLoading:!0,page:1,hidden:!1,address:[],chooseId:"",where:"",flag:""}},components:{},props:{},onLoad:function(e){e.id&&this.setData({chooseId:e.id}),e.where&&this.setData({where:e.where})},onReady:function(){},onShow:function(){this.getAddress(),this.pageLoading=!1,wx.hideShareMenu()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(e){this.repeatedLoading&&(this.repeatedLoading=!1,this.page=this.page+1,this.setData({page:this.page}),this.getMoreAddress())},onShareAppMessage:function(){},methods:{chooseIdFun:function(e){if(this.setData({chooseId:e.currentTarget.dataset.id}),1==this.where){var t=getCurrentPages(),a=(t[t.length-1],t[t.length-2]);a.setData({chooseId:e.currentTarget.dataset.id}),wx.navigateBack({delta:1})}},newAddress:function(){this.pageLoading||(this.pageLoading=!0,wx.navigateTo({url:"/pages/newAddress/newAddress"}))},editAddress:function(e){this.pageLoading||(this.pageLoading=!0,wx.navigateTo({url:"/pages/editAddress/editAddress?id="+e.currentTarget.dataset.id}))},getAddress:function(){var e=this;wx.request({url:getApp().globalData.url1+getApp().globalData.getAddressListByMemberId+"1/10/"+getApp().globalData.memId,data:"",header:{aid:113},method:"GET",dataType:"json",responseType:"text",success:function(t){var a=[];if(e.setData({hidden:!0,flag:t.data.data.flag}),200==t.data.data.errorCode&&t.data.data.memberAddrVoList.length>0)for(var i=0;i<t.data.data.memberAddrVoList.length;i++)e.address=a,a.push(t.data.data.memberAddrVoList[i]);e.setData({address:a})},fail:function(e){},complete:function(e){}})},getMoreAddress:function(){var e=this;wx.request({url:getApp().globalData.url1+getApp().globalData.getAddressListByMemberId+e.page+"/10/"+getApp().globalData.memId,data:"",header:{aid:113},method:"GET",dataType:"json",responseType:"text",success:function(t){if(e.repeatedLoading=!0,t.data.data.memberAddrVoList.length>0)for(var a=0;a<t.data.data.memberAddrVoList.length;a++){var i=e.address;i.push(t.data.data.memberAddrVoList[a])}e.setData({address:i,hidden:!0})},fail:function(e){},complete:function(e){}})}}};t.default=i},"3ee0":function(e,t,a){var i=a("0441");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("334965f5",i,!0,{sourceMap:!1,shadowMode:!1})},a366:function(e,t,a){"use strict";a.r(t);var i=a("1739"),n=a.n(i);for(var d in i)"default"!==d&&function(e){a.d(t,e,function(){return i[e]})}(d);t["default"]=n.a},a949:function(e,t,a){"use strict";a.r(t);var i=a("defe"),n=a("a366");for(var d in n)"default"!==d&&function(e){a.d(t,e,function(){return n[e]})}(d);a("b269");var s,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"a6c9f976",null,!1,i["a"],s);t["default"]=r.exports},b269:function(e,t,a){"use strict";var i=a("3ee0"),n=a.n(i);n.a},defe:function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",[a("loading",{attrs:{hidden:e.hidden}},[e._v("加载中...")])],1),a("v-uni-view",{staticClass:"none"},[e.flag?a("v-uni-image",{attrs:{src:"/static/images/daishouhuo.png"}}):e._e(),e.flag?a("v-uni-view",[e._v("暂无收货地址")]):e._e()],1),e.address.length>0?a("v-uni-view",{staticClass:"addressAll"},e._l(e.address,function(t,i){return a("v-uni-view",{key:i,staticClass:"address"},[1==e.where?a("v-uni-view",{staticClass:"addressImgBox",attrs:{"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseIdFun.apply(void 0,arguments)}}},[e.where&&e.chooseId!==t.id?a("v-uni-image",{attrs:{src:"/static/images/kong.png"}}):e._e(),e.where&&e.chooseId==t.id?a("v-uni-image",{attrs:{src:"/static/images/CollectingCopy.png"}}):e._e()],1):e._e(),a("v-uni-view",{staticClass:"addressMain",attrs:{"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseIdFun.apply(void 0,arguments)}}},[a("v-uni-view",[e._v(e._s(t.consignee)),a("span",[e._v(e._s(t.phone))])]),a("v-uni-view",[1==t.isDefault?a("v-uni-view",{staticClass:"moren"},[e._v("默认")]):e._e(),a("v-uni-view",{staticClass:"addressMainDetails"},[e._v(e._s(t.province)+e._s(t.city)+e._s(t.area)+e._s(t.address))])],1)],1),a("v-uni-view",{staticClass:"addressEdit",attrs:{"data-id":t.id},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editAddress.apply(void 0,arguments)}}},[e._v("编辑")])],1)}),1):e._e(),a("v-uni-view",{staticClass:"bottom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.newAddress.apply(void 0,arguments)}}},[e._v("+添加新地址")])],1)},d=[];a.d(t,"b",function(){return n}),a.d(t,"c",function(){return d}),a.d(t,"a",function(){return i})}}]);