(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shoppingCart/shoppingCart"],{

/***/ 76:
/*!******************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/main.js?{"page":"pages%2FshoppingCart%2FshoppingCart"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _shoppingCart = _interopRequireDefault(__webpack_require__(/*! ./pages/shoppingCart/shoppingCart.vue */ 77));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_shoppingCart.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 77:
/*!***********************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=template&id=53f80ca5& */ 78);
/* harmony import */ var _shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=script&lang=js& */ 80);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=style&index=0&lang=css& */ 82);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/*!******************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=template&id=53f80ca5& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoppingCart.vue?vue&type=template&id=53f80ca5& */ 79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_template_id_53f80ca5___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 79:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=template&id=53f80ca5& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 80:
/*!************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoppingCart.vue?vue&type=script&lang=js& */ 81);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 81:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































var _api = __webpack_require__(/*! ../../apis/api.js */ 29);
var _vuex = __webpack_require__(/*! vuex */ 16);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      Allselects: false,
      money: '0.00',
      shop: [], //[]
      chooseSkuIds: '',
      page: 1,
      repeatedLoading: true,
      pageLoading: false,
      flag: false,
      ischange: false, //全选是否改变
      timer: null,
      isloadedend: false };

  },

  components: {},
  props: {},
  computed: _objectSpread({},
  (0, _vuex.mapGetters)('login', {
    "loginStatus": "get_isLogin",
    "userInfo": "get_userInfo" })),


  /**
                                     * 生命周期函数--监听页面加载
                                     */
  onLoad: function onLoad(options) {

  },

  /**
      * 生命周期函数--监听页面初次渲染完成
      */
  onReady: function onReady() {},

  /**
                                   * 生命周期函数--监听页面显示
                                   */
  onShow: function onShow() {

    uni.hideShareMenu();

    this.pageLoading = false;
    this.shop = [];
    this.shoppingList();
  },

  /**
      * 生命周期函数--监听页面隐藏
      */
  onHide: function onHide() {},

  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {},

  /**
                                     * 页面相关事件处理函数--监听用户下拉动作
                                     */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
                                                       * 页面上拉触底事件的处理函数
                                                       */
  onReachBottom: function onReachBottom() {
    if (this.repeatedLoading) {
      this.repeatedLoading = false;
      this.page = this.page + 1;
      this.shoppingList();
    }
  },

  /**
      * 用户点击右上角分享
      */
  onShareAppMessage: function onShareAppMessage() {},
  methods: {
    commodity_details: function commodity_details(item) {//打开商品详情页
      console.log(this.pageLoading);
      if (!item.commodityFrame) {
        if (!this.pageLoading) {
          this.pageLoading = true;
          uni.navigateTo({
            url: '/pages/commodity_details/commodity_details?goodsId=' + item.goodsId });

        }
      }
    },
    orderDetails: function orderDetails() {var _this = this; //结算
      var Settlement = [];
      var chooseSkuIdsList = [];
      var select = this.shop;
      var j = 0;
      var that = this;
      for (var i = 0; i < select.length; i++) {
        if (select[i].haveStock) {
          if (select[i].select) {
            j++;
            var choose = {};
            choose.goodsId = select[i].id;
            choose.skuId = select[i].id;
            choose.skuQty = select[i].skuCount;
            Settlement.push(choose);
            chooseSkuIdsList.push(choose.skuId);
            that.chooseSkuIds = chooseSkuIdsList;
          }
        }
      }
      if (j == 0) {
        uni.showModal({
          title: '提示',
          content: '请选择商品' });

      } else {
        uni.showLoading({
          title: "加载中...",
          mask: true });

        (0, _api.uniHttp)({
          path: getApp().globalData.generatingOrder,
          data: {
            wxMemId: this.$store.getters['login/get_userInfo'].id, //this.$store.getters['login/get_userInfo'].id
            openId: getApp().globalData.openId, // getApp().globalData.openId
            orderSource: getApp().globalData.userType,
            orderVoList: Settlement },

          header: {
            aid: 119 },

          method: 'post' }).
        then(function (res) {
          console.log(res);
          (0, _api.uniHttp)({
            path: getApp().globalData.deleteShoppingCartByList,
            data: {
              memId: _this.$store.getters['login/get_userInfo'].id,
              skuIds: that.chooseSkuIds },

            header: {
              aid: 116 },

            method: 'delete' }).
          then(function (deleres) {
            console.log(deleres);
            uni.hideLoading();
          });
          if (!that.pageLoading) {
            that.pageLoading = true;
            uni.navigateTo({
              url: '/pages/orderDetails/orderDetails?parendNo=' + res.parendNo });

          }
        });
      }
    },
    selects: function selects(item) {var _this2 = this; //选择商品按钮
      if (item.haveStock && !item.commodityFrame) {
        item.select = !item.select;
        this.countMoney();
      }
      var btn = true;
      this.shop.map(function (it, idx) {
        if (it.haveStock && !it.commodityFrame) {
          if (!it.select) {
            btn = false;
            _this2.Allselects = false;
          }
        }
      });
      if (btn) {
        this.Allselects = true;
      }
    },
    AllselectsFun: function AllselectsFun() {//选择全选按钮
      if (!this.ischange) {
        this.ischange = true;
        if (!this.Allselects) {
          this.shop.map(function (item, index) {
            if (item.haveStock && !item.commodityFrame) {
              item.select = true;
            }
          });
          this.Allselects = true;
          this.ischange = false;
        } else {
          this.shop.map(function (item, index) {
            if (item.haveStock && !item.commodityFrame) {
              item.select = false;
            }
          });
          this.Allselects = false;
          this.ischange = false;
        }
      }
      this.countMoney();
    },
    countMoney: function countMoney() {var _this3 = this; //合计金额
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(function () {
        console.log('r');
        var Cmoney = 0;
        _this3.shop.map(function (item, index) {
          if (item.select) {
            Cmoney = Cmoney + item.marketPrice * item.skuCount;
          }
        });
        Cmoney = Cmoney.toFixed(2);
        _this3.money = Cmoney;
      }, 200);

    },
    kuang: function kuang() {},
    jianBtnTap: function jianBtnTap(item, indx) {//数量减少
      var that = this;
      if (item.skuCount >= 2) {
        item.skuCount = item.skuCount - 1;
        if (item.select) {
          this.countMoney();
        }
      } else {
        uni.showModal({
          title: '提示',
          content: '亲，确定删除该商品',
          success: function success(res) {
            if (res.confirm) {
              (0, _api.uniHttp)({
                path: getApp().globalData.deleteShoppingCartById + that.$store.getters['login/get_userInfo'].id + '/' + item.id,
                data: '',
                header: {
                  aid: 115 },

                method: 'delete' }).
              then(function (res) {
                that.shop.splice(indx, 1);
                if (!that.shop.length) {
                  that.flag = true;
                } else {
                  if (item.select) {
                    that.countMoney();
                  }
                }
              });
            }
          } });

      }
    },
    jiaBtnTap: function jiaBtnTap(item) {//数量增加
      var that = this;
      if (item.skuCount < item.skuStock) {
        item.skuCount = item.skuCount + 1;
        if (item.select) {
          this.countMoney();
        }
      } else {
        uni.showModal({
          title: '提示',
          content: '亲，该宝贝不能购买更多' });

      }
    },
    inputDigit: function inputDigit(e) {//没有手动输入数量的功能  暂时弃用
      var skuCount = this.shop[e.currentTarget.dataset.index].skuCount;
      var skuStock = this.shop[e.currentTarget.dataset.index].skuStock;
      var that = this;
      if (e.detail.value > skuStock) {
        this.shop[e.currentTarget.dataset.index].skuCount = skuStock;
        uni.showModal({
          title: '提示',
          showCancel: false,
          content: '很抱歉，该商品当前最多只能购买' + skuStock + '份' });

      } else {
        this.shop[e.currentTarget.dataset.index].skuCount = e.detail.value;
      }
      this.countMoney();
    },
    shoppingList: function shoppingList() {var _this4 = this; //获取购物车列表
      var that = this;
      uni.showLoading({
        title: "加载中...",
        mask: true });

      (0, _api.uniHttp)({
        path: getApp().globalData.getShoppingCartList + this.page + '/10/' + this.$store.getters['login/get_userInfo'].id + '/1',
        data: '',
        header: {
          aid: 117 } }).

      then(function (result) {
        console.log(result);
        that.flag = result.flag;
        if (Object.keys(result.skuId_count).length) {
          that.getList(result.skuId_count);
        } else {
          uni.hideLoading();
          if (_this4.page != 1) {
            that.isloadedend = true;
          }
        }
      });
    },
    getList: function getList(skuIdCount) {var _this5 = this;
      (0, _api.uniHttp)({
        path: getApp().globalData.getSkuVoListBySkuIdList,
        data: {
          skuId_count: skuIdCount },

        header: {
          aid: 118 },

        method: 'post' }).
      then(function (res) {
        var goodsSkuVoList = res.goodsSkuVoList;
        if (goodsSkuVoList.length > 0) {var _this5$shop;
          goodsSkuVoList.map(function (item, index) {
            item.mainImg = getApp().globalData.imgUrl + "/" + item.mainImg;
            item.marketPrice = item.marketPrice.toFixed(2);
            item.select = false;
            item.skuCount = item.skuCount >= item.skuStock ? item.skuStock : item.skuCount;
            item.haveStock = item.skuStock == 0 ? false : true;
          });
          (_this5$shop = _this5.shop).push.apply(_this5$shop, _toConsumableArray(res.goodsSkuVoList));
          uni.hideLoading();
        }
        _this5.repeatedLoading = true;
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 82:
/*!********************************************************************************************************!*\
  !*** E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/软件下载/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shoppingCart.vue?vue&type=style&index=0&lang=css& */ 83);
/* harmony import */ var _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shoppingCart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uniapp/tgmallnew/web_app/pages/shoppingCart/shoppingCart.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[76,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shoppingCart/shoppingCart.js.map