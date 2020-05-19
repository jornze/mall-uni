
<template>
<view>
	<w-picker 
	    mode="region"
	    :defaultVal="[province, city, county]"
	    :hideArea="false"
	    @confirm="onConfirm" 
	    ref="region" 
	    themeColor="#f00">
	</w-picker>
<view class="input-box">
  <view>姓名</view>
  <input @blur="consigneeInput"></input>
</view>
<view class="input-box">
  <view>手机号</view>
  <input type="number" @blur="phoneInput"></input>
</view>
<view class="input-box">
  <view>选择城市</view>
  <input disabled="true" :value="province + ' ' + city + ' ' + county" @tap="translate"></input>
  <image src="/static/images/right.png" @tap="translate"></image>
</view>
<view class="input-box2">
  <view>详细地址</view>
  <textarea maxlength="40" @input="detailedAddressInput"></textarea>
</view>
<view class="default" @tap="isDefaultFun">
  <image src="/static/images/pay_Choice.png" v-if="isDefault==1"></image>
  <image src="/static/images/pay_NChoice.png" v-if="isDefault==0"></image>
  <view>设为默认地址</view>
</view>
<view class="bottom" @tap="conserve">保存</view>
</view>
</template>

<script>
	//<!--  :areaCode="addressInfo.checkValue" -->
import {uniHttp} from "../../apis/api.js"
import wPicker from "@/components/areapicker/w-picker.vue";
export default {
  data() {
    return {
      addressInfo: {
		//"checkArr":["浙江省", "杭州市", "下城区"],//地址省市区
		//"checkValue":["33", "3301", "330106"]//省市区的地区编码
      },
      isDefault: 0,
      consignee: '',
      phone: '',
      province: '浙江省',
      city: '杭州市',
      county: '西湖区',
      address: ''
    };
  },

  components: {wPicker},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
  },
  onReachBottom: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	// #ifdef MP-WEIXIN
    uni.hideShareMenu();
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
  computed: {
  	isLogin() {
  		return this.$store.getters['login/get_isLogin']
  	}
  },
  methods: {
    consigneeInput: function (e) {//收货人
        this.consignee=e.detail.value;
    },
    phoneInput: function (e) {//手机号
        this.phone=e.detail.value;
	},
    detailedAddressInput: function (e) {//详细地址
        this.address=e.detail.value;
    },
    isDefaultFun: function () {//是否设置为默认地址
		this.isDefault=!this.isDefault?this.isDefault=1:this.isDefault=0;
    },
    conserve: function () {//保存
		if(this.isLogin==true){//登录
			var that = this;
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (this.consignee && myreg.test(this.phone) && this.address) {
				uni.showLoading({
					title:"保存中...",
					mask:true
				})
				 uniHttp({
					  path:'/member/api/memberInternal/editAddress',
					  method:"POST",
					  data:{
						memSource: getApp().globalData.userType,
						memId: that.$store.getters['login/get_userInfo'].id,
						id: '',
						consignee: that.consignee,
						phone: that.phone,
						province: that.province,
						city: that.city,
						area: that.county,
						address: that.address,
						isDefault: that.isDefault  
					  },
					  header:{
						aid:111,
						
					  }
				 }).then(res=>{
						uni.hideLoading()
					 	uni.showToast({
					 		icon:'success',
					 		title: '保存成功',
					 		duration: 1000,
					 		complete:function(){
					 			setTimeout(function(){
					 				uni.navigateBack({
					 					delta:1
					 				})
					 			},1000)
					 		}
					 	});
				 })
			} else {
			  if (!myreg.test(that.phone)) {
			    uni.showModal({
			      title: '提示',
			      content: '请输入正确的手机号码'
			    });
			  } else {
			    uni.showModal({
			      title: '提示',
			      content: '请完善地址信息'
			    });
			  }
			}
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
    //点击选择城市按钮显示picker-view
    translate: function (e) {
	  this.$refs.region.show()
    },
	onConfirm(areaInfo){
		[this.province,this.city,this.county]=areaInfo.checkArr;
	}
  }
};
</script>
<style>
@import "./newAddress.css";
</style>