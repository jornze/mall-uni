(function(e){function n(n){for(var r,o,s=n[0],d=n[1],g=n[2],u=0,l=[];u<s.length;u++)o=s[u],t[o]&&l.push(t[o][0]),t[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);c&&c(n);while(l.length)l.shift()();return i.push.apply(i,g||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],r=!0,o=1;o<a.length;o++){var d=a[o];0!==t[d]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var r={},t={index:0},i=[];function o(e){return s.p+"static/js/"+({"pages-addressManagement-addressManagement":"pages-addressManagement-addressManagement","pages-allOrders-allOrders":"pages-allOrders-allOrders","pages-authorization-authorization":"pages-authorization-authorization","pages-classify-classify":"pages-classify-classify","pages-commodity_details-commodity_details":"pages-commodity_details-commodity_details","pages-editAddress-editAddress":"pages-editAddress-editAddress","pages-h5-h5":"pages-h5-h5","pages-jingxuan-jingxuan":"pages-jingxuan-jingxuan","pages-my-my":"pages-my-my","pages-newAddress-newAddress":"pages-newAddress-newAddress","pages-orderDetailByOrders-orderDetailByOrders":"pages-orderDetailByOrders-orderDetailByOrders","pages-orderDetails-orderDetails":"pages-orderDetails-orderDetails","pages-orderTracking-orderTracking":"pages-orderTracking-orderTracking","pages-shoppingCart-shoppingCart":"pages-shoppingCart-shoppingCart","pages-xiaoyuexing-xiaoyuexing":"pages-xiaoyuexing-xiaoyuexing"}[e]||e)+"."+{"pages-addressManagement-addressManagement":"e303c9ec","pages-allOrders-allOrders":"08a3c2bc","pages-authorization-authorization":"91e2e7eb","pages-classify-classify":"9f5e0ae1","pages-commodity_details-commodity_details":"ddf990be","pages-editAddress-editAddress":"5d4e3f6b","pages-h5-h5":"307a6fd9","pages-jingxuan-jingxuan":"3e580390","pages-my-my":"b73a59bd","pages-newAddress-newAddress":"fd84cbc2","pages-orderDetailByOrders-orderDetailByOrders":"ef837471","pages-orderDetails-orderDetails":"d41e75a4","pages-orderTracking-orderTracking":"ab303f41","pages-shoppingCart-shoppingCart":"bc0434b6","pages-xiaoyuexing-xiaoyuexing":"eb5489e5"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a=t[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(function(n,r){a=t[e]=[n,r]});n.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e),i=function(n){d.onerror=d.onload=null,clearTimeout(g);var a=t[e];if(0!==a){if(a){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,a[1](o)}t[e]=void 0}};var g=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(a,r,function(n){return e[n]}.bind(null,r));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/h5/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],g=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var c=g;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("57ca")},2270:function(e,n,a){"use strict";a.r(n);var r=a("d584"),t=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(n,e,function(){return r[e]})}(i);n["default"]=t.a},2471:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={appid:""};n.default=r},"27b4":function(e,n,a){"use strict";(function(e){var n=a("288e"),r=n(a("5176")),t=n(a("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={tabBar:{color:"#666666",selectedColor:"#ff4444",list:[{pagePath:"pages/jingxuan/jingxuan",text:"精选",iconPath:"/static/images/icon/jingxuan_uncheckede.png",selectedIconPath:"/static/images/icon/jingxuan_checked.png",redDot:!1,badge:""},{pagePath:"pages/classify/classify",text:"分类",iconPath:"/static/images/icon/classify_uncheckede.png",selectedIconPath:"/static/images/icon/classify_checked.png",redDot:!1,badge:""},{pagePath:"pages/xiaoyuexing/xiaoyuexing",text:"小确幸",iconPath:"/static/images/icon/xiaoyuqxing_uncheckede.png",selectedIconPath:"/static/images/icon/xiaoyuqxing_checkede.png",redDot:!1,badge:""},{pagePath:"pages/my/my",text:"个人中心",iconPath:"/static/images/icon/my_uncheckede.png",selectedIconPath:"/static/images/icon/my_checkede.png",redDot:!1,badge:""}],backgroundColor:"#f7f7fa",borderStyle:"black"},debug:!0,globalStyle:{backgroundTextStyle:"dark",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"TimeSee",navigationBarTextStyle:"black",enablePullDownRefresh:!1,onReachBottomDistance:200}},e.__uniConfig.router={mode:"history",base:"/h5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},t.default.component("pages-jingxuan-jingxuan",function(e){var n={component:a.e("pages-jingxuan-jingxuan").then(function(){return e(a("ce2e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-orderTracking-orderTracking",function(e){var n={component:a.e("pages-orderTracking-orderTracking").then(function(){return e(a("ba6b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-orderDetailByOrders-orderDetailByOrders",function(e){var n={component:a.e("pages-orderDetailByOrders-orderDetailByOrders").then(function(){return e(a("9438"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-shoppingCart-shoppingCart",function(e){var n={component:a.e("pages-shoppingCart-shoppingCart").then(function(){return e(a("fe9c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-orderDetails-orderDetails",function(e){var n={component:a.e("pages-orderDetails-orderDetails").then(function(){return e(a("8ad9"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-editAddress-editAddress",function(e){var n={component:a.e("pages-editAddress-editAddress").then(function(){return e(a("abcd"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-addressManagement-addressManagement",function(e){var n={component:a.e("pages-addressManagement-addressManagement").then(function(){return e(a("a949"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-newAddress-newAddress",function(e){var n={component:a.e("pages-newAddress-newAddress").then(function(){return e(a("b3e8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-authorization-authorization",function(e){var n={component:a.e("pages-authorization-authorization").then(function(){return e(a("c358"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-commodity_details-commodity_details",function(e){var n={component:a.e("pages-commodity_details-commodity_details").then(function(){return e(a("5803"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-allOrders-allOrders",function(e){var n={component:a.e("pages-allOrders-allOrders").then(function(){return e(a("f990"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-my-my",function(e){var n={component:a.e("pages-my-my").then(function(){return e(a("c598"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-classify-classify",function(e){var n={component:a.e("pages-classify-classify").then(function(){return e(a("bd2c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-xiaoyuexing-xiaoyuexing",function(e){var n={component:a.e("pages-xiaoyuexing-xiaoyuexing").then(function(){return e(a("b94b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),t.default.component("pages-h5-h5",function(e){var n={component:a.e("pages-h5-h5").then(function(){return e(a("b7c2"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/jingxuan/jingxuan",component:{render:function(e){return e("Page",{props:(0,r.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[e("pages-jingxuan-jingxuan",{slot:"page"})])}},meta:{id:1,name:"pages-jingxuan-jingxuan",isNVue:!1,pagePath:"pages/jingxuan/jingxuan",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/orderTracking/orderTracking",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"订单跟踪"})},[e("pages-orderTracking-orderTracking",{slot:"page"})])}},meta:{name:"pages-orderTracking-orderTracking",isNVue:!1,pagePath:"pages/orderTracking/orderTracking",windowTop:44}},{path:"/pages/orderDetailByOrders/orderDetailByOrders",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情"})},[e("pages-orderDetailByOrders-orderDetailByOrders",{slot:"page"})])}},meta:{name:"pages-orderDetailByOrders-orderDetailByOrders",isNVue:!1,pagePath:"pages/orderDetailByOrders/orderDetailByOrders",windowTop:44}},{path:"/pages/shoppingCart/shoppingCart",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[e("pages-shoppingCart-shoppingCart",{slot:"page"})])}},meta:{name:"pages-shoppingCart-shoppingCart",isNVue:!1,pagePath:"pages/shoppingCart/shoppingCart",windowTop:44}},{path:"/pages/orderDetails/orderDetails",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"订单详情"})},[e("pages-orderDetails-orderDetails",{slot:"page"})])}},meta:{name:"pages-orderDetails-orderDetails",isNVue:!1,pagePath:"pages/orderDetails/orderDetails",windowTop:44}},{path:"/pages/editAddress/editAddress",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"编辑地址"})},[e("pages-editAddress-editAddress",{slot:"page"})])}},meta:{name:"pages-editAddress-editAddress",isNVue:!1,pagePath:"pages/editAddress/editAddress",windowTop:44}},{path:"/pages/addressManagement/addressManagement",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"地址管理"})},[e("pages-addressManagement-addressManagement",{slot:"page"})])}},meta:{name:"pages-addressManagement-addressManagement",isNVue:!1,pagePath:"pages/addressManagement/addressManagement",windowTop:44}},{path:"/pages/newAddress/newAddress",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"添加新地址"})},[e("pages-newAddress-newAddress",{slot:"page"})])}},meta:{name:"pages-newAddress-newAddress",isNVue:!1,pagePath:"pages/newAddress/newAddress",windowTop:44}},{path:"/pages/authorization/authorization",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"用户授权"})},[e("pages-authorization-authorization",{slot:"page"})])}},meta:{name:"pages-authorization-authorization",isNVue:!1,pagePath:"pages/authorization/authorization",windowTop:44}},{path:"/pages/commodity_details/commodity_details",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"商品详情"})},[e("pages-commodity_details-commodity_details",{slot:"page"})])}},meta:{name:"pages-commodity_details-commodity_details",isNVue:!1,pagePath:"pages/commodity_details/commodity_details",windowTop:44}},{path:"/pages/allOrders/allOrders",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"全部订单"})},[e("pages-allOrders-allOrders",{slot:"page"})])}},meta:{name:"pages-allOrders-allOrders",isNVue:!1,pagePath:"pages/allOrders/allOrders",windowTop:44}},{path:"/pages/my/my",component:{render:function(e){return e("Page",{props:(0,r.default)({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心"})},[e("pages-my-my",{slot:"page"})])}},meta:{id:2,name:"pages-my-my",isNVue:!1,pagePath:"pages/my/my",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/classify/classify",component:{render:function(e){return e("Page",{props:(0,r.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{})},[e("pages-classify-classify",{slot:"page"})])}},meta:{id:3,name:"pages-classify-classify",isNVue:!1,pagePath:"pages/classify/classify",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/xiaoyuexing/xiaoyuexing",component:{render:function(e){return e("Page",{props:(0,r.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[e("pages-xiaoyuexing-xiaoyuexing",{slot:"page"})])}},meta:{id:4,name:"pages-xiaoyuexing-xiaoyuexing",isNVue:!1,pagePath:"pages/xiaoyuexing/xiaoyuexing",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/h5/h5",component:{render:function(e){return e("Page",{props:(0,r.default)({},__uniConfig.globalStyle,{})},[e("pages-h5-h5",{slot:"page"})])}},meta:{name:"pages-h5-h5",isNVue:!1,pagePath:"pages/h5/h5",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,a("c8ba"))},"57ca":function(e,n,a){"use strict";var r=a("288e"),t=r(a("cebc"));a("28a5");var i=r(a("a4bb"));a("ac6a"),a("cadf"),a("551c"),a("097d"),a("27b4"),a("06b9"),a("921b");var o=r(a("e143")),s=r(a("c3b0"));o.default.config.productionTip=!1,o.default.mixin({methods:{setData:function(e,n){var a,r,t=this,o=[];(0,i.default)(e).forEach(function(n){o=n.split("."),a=e[n],r=t.$data,o.forEach(function(e,n){n+1==o.length?t.$set(r,e,a):r[e]||t.$set(r,e,{}),r=r[e]})}),n&&n()}}}),s.default.mpType="app";var d=new o.default((0,t.default)({},s.default));d.$mount()},7658:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={pages:{"pages/jingxuan/jingxuan":{},"pages/orderTracking/orderTracking":{navigationBarTitleText:"订单跟踪"},"pages/orderDetailByOrders/orderDetailByOrders":{navigationBarTitleText:"订单详情"},"pages/shoppingCart/shoppingCart":{navigationBarTitleText:"购物车"},"pages/orderDetails/orderDetails":{navigationBarTitleText:"订单详情"},"pages/editAddress/editAddress":{navigationBarTitleText:"编辑地址"},"pages/addressManagement/addressManagement":{navigationBarTitleText:"地址管理"},"pages/newAddress/newAddress":{navigationBarTitleText:"添加新地址"},"pages/authorization/authorization":{navigationBarTitleText:"用户授权"},"pages/commodity_details/commodity_details":{navigationBarTitleText:"商品详情"},"pages/allOrders/allOrders":{navigationBarTitleText:"全部订单"},"pages/my/my":{navigationBarTitleText:"个人中心"},"pages/classify/classify":{},"pages/xiaoyuexing/xiaoyuexing":{},"pages/h5/h5":{}},globalStyle:{backgroundTextStyle:"dark",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"TimeSee",navigationBarTextStyle:"black",enablePullDownRefresh:!1,onReachBottomDistance:200}};n.default=r},"76b6":function(e,n,a){"use strict";var r=a("bb00"),t=a.n(r);t.a},aab5:function(e,n,a){"use strict";var r,t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];a.d(n,"b",function(){return t}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return r})},bb00:function(e,n,a){var r=a("cbdd");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var t=a("4f06").default;t("cb039c0e",r,!0,{sourceMap:!1,shadowMode:!1})},c3b0:function(e,n,a){"use strict";a.r(n);var r=a("aab5"),t=a("2270");for(var i in t)"default"!==i&&function(e){a.d(n,e,function(){return t[e]})}(i);a("76b6");var o,s=a("f0c5"),d=Object(s["a"])(t["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=d.exports},cbdd:function(e,n,a){n=e.exports=a("2350")(!1),n.push([e.i,"/**app.wxss**/.container{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?200?% 0;box-sizing:border-box}",""])},d584:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={globalData:{url1:"https://pay.hzdjyt.com",url2:"https://pay.hzdjyt.com",url3:"https://pay.hzdjyt.com",imgUrl:"http://img.hzdjyt.com/",wxRedirect:"/member/api/memberInternal/wxRedirect/",wxUserInfoReceive:"/member/api/memberInternal/wxUserInfoReceive",getHomePageSowingMap:"/goods/api/goodsInternal/getHomePageSowingMap/",getTabsListByCategory:"/goods/api/goodsInternal/getTabsListByCategory/",getGoodsListByHome:"/goods/api/goodsInternal/getGoodsListByHome/",getGoodsList:"/goods/api/goodsInternal/getGoodsList/",getGoodsDetailsById:"/goods/api/goodsInternal/getGoodsDetailsById/",getShoppingCartCount:"/member/api/memberInternal/getShoppingCartCount/",getOrderGroupByMemid:"/orders/api/orderInternal/getOrderGroupByMemid/",getDefaultAddress:"/member/api/memberInternal/getDefaultAddress/",getAddressByMemberId:"/member/api/memberInternal/getAddressByMemberId/",editAddress:"/member/api/memberInternal/editAddress",deleteAddressByAddrId:"/member/api/memberInternal/deleteAddressByAddrId/",getAddressListByMemberId:"/member/api/memberInternal/getAddressListByMemberId/",addAShoppingCart:"/member/api/memberInternal/addAShoppingCart",deleteShoppingCartById:"/member/api/memberInternal/deleteShoppingCartById/",deleteShoppingCartByList:"/member/api/memberInternal/deleteShoppingCartByList",getShoppingCartList:"/member/api/memberInternal/getShoppingCartList/",getSkuVoListBySkuIdList:"/goods/api/goodsInternal/getSkuVoListBySkuIdList",generatingOrder:"/orders/api/orderInternal/generatingOrder",getOrderListByParendNo:"/orders/api/orderInternal/getOrderListByParendNo/",createUnifiedOrder:"/orders/api/orderInternal/createUnifiedOrder",generateSignature:"/orders/api/orderInternal/generateSignature",orderClosureByParendNo:"/orders/api/orderInternal/orderClosureByParendNo",supplementOrderMoney:"/orders/api/orderInternal/supplementOrderMoney",getOrderListByStatus:"/orders/api/orderInternal/getOrderListByStatus/",getOrderDetailByCondition:"/orders/api/orderInternal/getOrderDetailByCondition",deleteOrderByCondition:"/orders/api/orderInternal/deleteOrderByCondition",confirmReceive:"/orders/api/orderInternal/confirmReceive",getLogisticsDetailById:"/orders/api/orderInternal/getLogisticsDetailById/",getGoodsStatusById:"/goods/api/goodsInternal/getGoodsStatusById/",logisticDetail:"/orders/api/orderInternal/logisticDetail",userName:"未登录",openId:"",userImg:"/static/images/moren.jpeg",userType:1,memId:"",shoppingCarNum:0,login:function(){var n=this;wx.login({success:function(a){a.code?wx.request({url:n.url1+n.wxRedirect+a.code,header:{aid:100},success:function(a){1==a.data.data.type?(n.openId=a.data.data.memberWechat.openId,n.userType=a.data.data.type,n.shoppingCarNum=a.data.data.memberWechat.shoppingCarNum,n.userImg=a.data.data.memberWechat.avatarUrl,n.userName=a.data.data.memberWechat.nickname,n.memId=a.data.data.memberWechat.id):(n.openId=a.data.data.openId,wx.showModal({title:"提示",content:"小可爱，微信授权一键登录",success:function(n){n.confirm?wx.navigateTo({url:"/pages/authorization/authorization"}):n.cancel&&e.log("用户点击取消")}}))}}):e.log("获取用户登录态失败！"+a.errMsg)}})}},onLaunch:function(){},methods:{}};n.default=a}).call(this,a("5a52")["default"])}});