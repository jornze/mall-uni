(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orderDetailByOrders/orderDetailByOrders"],{

/***/ 68:
/*!********************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/main.js?{"page":"pages%2ForderDetailByOrders%2ForderDetailByOrders"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderDetailByOrders = _interopRequireDefault(__webpack_require__(/*! ./pages/orderDetailByOrders/orderDetailByOrders.vue */ 69));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderDetailByOrders.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 69:
/*!*************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderDetailByOrders.vue?vue&type=template&id=7be93a5d& */ 70);
/* harmony import */ var _orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderDetailByOrders.vue?vue&type=script&lang=js& */ 72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderDetailByOrders.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/*!********************************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=template&id=7be93a5d& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderDetailByOrders.vue?vue&type=template&id=7be93a5d& */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_template_id_7be93a5d___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 71:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=template&id=7be93a5d& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.orderStatus == 1 ? "address" : ""
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 72:
/*!**************************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderDetailByOrders.vue?vue&type=script&lang=js& */ 73);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =

{
  data: function data() {
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
        s: '' },

      timers: '',
      orderStatus: '' };

  },

  components: {},
  props: {},

  /**
              * 生命周期函数--监听页面加载
              */
  onLoad: function onLoad(options) {
    var that = this;
    this.setData({
      parendNo: options.parendNo,
      supId: options.supId,
      orderStatus: options.orderStatus });


    if (this.orderStatus == 7 || this.orderStatus == 1) {
      wx.request({
        url: getApp().globalData.url3 + getApp().globalData.getOrderDetailByCondition,
        data: {
          parendNo: that.parendNo,
          supId: that.supId,
          category: 0 },

        header: {
          aid: 126 },

        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
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
              hidden: true });


            if (res.data.data.orderTYVo.orderDetailVo.addressId) {
              that.setData({
                chooseId: res.data.data.orderTYVo.orderDetailVo.addressId });

            }

            that.timer();
          }
        },
        fail: function fail(res) {},
        complete: function complete(res) {} });

    } else {
      wx.request({
        url: getApp().globalData.url3 + getApp().globalData.getOrderDetailByCondition,
        data: {
          parendNo: that.parendNo,
          supId: that.supId,
          category: 1 },

        header: {
          aid: 126 },

        method: 'post',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
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
              hidden: true });

            that.timer();
          }
        },
        fail: function fail(res) {},
        complete: function complete(res) {} });

    }
  },

  /**
      * 生命周期函数--监听页面初次渲染完成
      */
  onReady: function onReady() {},

  /**
                                   * 生命周期函数--监听页面显示
                                   */
  onShow: function onShow() {
    wx.hideShareMenu();
    this.pageLoading = false;
    var that = this;

    if (this.chooseId) {
      wx.request({
        url: getApp().globalData.url1 + getApp().globalData.getAddressByMemberId + that.chooseId,
        data: '',
        header: {
          aid: 110 },

        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
          that.setData({
            address: res.data.data.memberAddrVo });

        },
        fail: function fail(res) {},
        complete: function complete(res) {} });

    }
  },

  /**
      * 生命周期函数--监听页面隐藏
      */
  onHide: function onHide() {},

  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {
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
          wxMemId: getApp().globalData.memId },

        header: {
          aid: 124 },

        method: 'put',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {},
        fail: function fail(res) {},
        complete: function complete(res) {} });

    }
  },

  /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
                                                       * 页面上拉触底事件的处理函数
                                                       */
  onReachBottom: function onReachBottom() {},

  /**
                                               * 用户点击右上角分享
                                               */
  onShareAppMessage: function onShareAppMessage() {},
  methods: {
    timer: function timer() {
      var that = this;
      var createTime = new Date(this.orderVoList[0].createTime.replace(/-/g, "/"));
      var leftTime = new Date().getTime() - createTime.getTime();
      leftTime = 15 * 60 * 1000 - leftTime;
      this.timers = setInterval(function () {
        var minute = parseInt(leftTime / 1000 / 60 % 60, 10);
        var second = parseInt(leftTime / 1000 % 60, 10);
        that.setData({
          'time.m': that.checkTime(minute),
          'time.s': that.checkTime(second) });

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
                wxMemId: getApp().globalData.memId },

              header: {
                aid: 123 },

              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function success(res) {
                if (res.data.data.errorCode == 200) {
                  wx.showToast({
                    title: '订单已取消',
                    mask: true,
                    success: function success(res) {
                      that.setData({
                        orderStatus: 7 });

                      clearInterval(that.timers);
                    },
                    fail: function fail(res) {},
                    complete: function complete(res) {} });

                }
              },
              fail: function fail(res) {},
              complete: function complete(res) {} });

          }
        }
      }, 1000);
    },
    checkTime: function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    },

    addressFun: function addressFun() {
      if (!this.pageLoading) {
        this.pageLoading = true;
        wx.navigateTo({
          url: '/pages/addressManagement/addressManagement?id=' + this.chooseId + '&where=1' });

      }
    },

    commodity_details: function commodity_details(e) {
      var that = this;
      wx.request({
        url: getApp().globalData.url2 + getApp().globalData.getGoodsStatusById + e.currentTarget.dataset.goodsid,
        data: '',
        header: {
          aid: 130 },

        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function success(res) {
          if (res.data.data.goodsVo.goodsStatus == 4) {
            wx.showToast({
              title: '该商品已下架',
              mask: true });

          } else {
            if (!that.pageLoading) {
              that.pageLoading = true;
              wx.navigateTo({
                url: '/pages/commodity_details/commodity_details?goodsId=' + e.currentTarget.dataset.goodsid });

            }
          }
        },
        fail: function fail(res) {},
        complete: function complete(res) {} });

    },

    remind: function remind() {
      wx.showToast({
        title: '已提醒发货',
        mask: true,
        success: function success(res) {},
        fail: function fail(res) {},
        complete: function complete(res) {} });

    },

    ToEvaluated: function ToEvaluated() {
      wx.showToast({
        title: '暂无评价功能',
        mask: true,
        icon: 'none',
        success: function success(res) {},
        fail: function fail(res) {},
        complete: function complete(res) {} });

    },

    cancelOrder: function cancelOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '确定取消订单',
        success: function success(res) {
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
                wxMemId: getApp().globalData.memId },

              header: {
                aid: 123 },

              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function success(res) {
                if (res.data.data.errorCode == 200) {
                  wx.showToast({
                    title: '订单已取消',
                    mask: true,
                    success: function success(res) {
                      that.setData({
                        orderStatus: 7 });

                      clearInterval(that.timers);
                    },
                    fail: function fail(res) {},
                    complete: function complete(res) {} });

                }
              },
              fail: function fail(res) {},
              complete: function complete(res) {} });

          } else if (res.cancel) {}
        } });

    },

    ToOrder: function ToOrder() {
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
            wxMemId: getApp().globalData.memId },

          header: {
            aid: 121 },

          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: function success(res) {
            if (res.data.data.prepayId) {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.generateSignature,
                data: {
                  prepayId: res.data.data.prepayId },

                header: {
                  aid: 122 },

                method: 'post',
                dataType: 'json',
                responseType: 'text',
                success: function success(res) {
                  if (res.data.data.sign) {
                    wx.requestPayment({
                      timeStamp: res.data.data.timeStamp,
                      nonceStr: res.data.data.nonceStr,
                      package: res.data.data.package,
                      signType: 'MD5',
                      paySign: res.data.data.sign,
                      success: function success(res) {
                        clearInterval(that.timers);
                        that.setData({
                          orderStatus: 2 });

                        wx.showToast({
                          title: '支付成功',
                          mask: true });

                      },
                      fail: function fail(error) {},
                      complete: function complete(res) {} });

                  }
                } });

            } else {
              wx.showModal({
                title: '提示',
                content: '订单异常，请重新下单' });

            }
          } });

      } else if (!this.address.phone) {
        wx.showModal({
          title: '提示',
          content: '请完善收货信息' });

      }
    },

    logistics: function logistics() {
      if (!this.pageLoading) {
        this.pageLoading = true;
        wx.navigateTo({
          url: '/pages/orderTracking/orderTracking?logisticsCode=' + this.address.logisticsCode + '&logisticsPostid=' + this.address.logisticsPostid });

      }
    },

    sureOrder: function sureOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '是否确认收货',
        success: function success(res) {
          if (res.confirm) {
            wx.request({
              url: getApp().globalData.url3 + getApp().globalData.confirmReceive,
              data: {
                parendNo: that.parendNo,
                supId: that.supId,
                openId: getApp().globalData.openId,
                wxMemId: getApp().globalData.memId },

              header: {
                aid: 128 },

              method: 'put',
              dataType: 'json',
              responseType: 'text',
              success: function success(res) {
                that.setData({
                  orderStatus: 5 });

              },
              fail: function fail(res) {},
              complete: function complete(res) {} });

          }
        } });

    },

    deletOrder: function deletOrder() {
      var that = this;
      wx.showModal({
        title: '提示',
        content: '确定删除订单',
        success: function success(res) {
          if (res.confirm) {
            if (that.orderStatus == 7) {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: that.parendNo,
                  supId: that.supId,
                  category: 0 },

                header: {
                  aid: 127 },

                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function success(res) {
                  wx.navigateBack({
                    delta: 1 });

                },
                fail: function fail(res) {},
                complete: function complete(res) {} });

            } else {
              wx.request({
                url: getApp().globalData.url3 + getApp().globalData.deleteOrderByCondition,
                data: {
                  parendNo: that.parendNo,
                  supId: that.supId,
                  category: 1 },

                header: {
                  aid: 127 },

                method: 'delete',
                dataType: 'json',
                responseType: 'text',
                success: function success(res) {
                  wx.navigateBack({
                    delta: 1 });

                },
                fail: function fail(res) {},
                complete: function complete(res) {} });

            }
          } else if (res.cancel) {}
        } });

    } } };exports.default = _default;

/***/ }),

/***/ 74:
/*!**********************************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderDetailByOrders.vue?vue&type=style&index=0&lang=css& */ 75);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderDetailByOrders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/orderDetailByOrders/orderDetailByOrders.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[68,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderDetailByOrders/orderDetailByOrders.js.map