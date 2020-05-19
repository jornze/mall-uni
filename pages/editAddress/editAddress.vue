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
  <input @blur="consigneeInput" :value="consignee"></input>
</view>
<view class="input-box">
  <view>手机号</view>
  <input type="number" @blur="phoneInput" :value="phone"></input>
</view>
<view class="input-box">
  <view>选择城市</view>
  <input disabled="true" :value="province + ' ' + city + ' ' + county" @tap="translate"></input>
  <image src="/static/images/right.png" @tap="translate"></image>
</view>
<view class="input-box2">
  <view>详细地址</view>
  <textarea maxlength="40" @input="detailedAddressInput" :value="address"></textarea>
</view>
<view class="default" @tap="isDefaultFun">
  <image src="/static/images/pay_Choice.png" v-if="isDefault==1"></image>
  <image src="/static/images/pay_NChoice.png" v-if="isDefault==0"></image>
  <view>设为默认地址</view>
</view>
<view class="deleteAddress" @tap="deleteAddress">删除收货地址</view>
<view class="bottom" @tap="conserve">保存</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
import wPicker from "@/components/areapicker/w-picker.vue";
export default {
  data(){
    return {
      address: '',
      isDefault: '',
      province: '浙江省',
      city: '杭州市',
      county: '西湖区',
      consignee: '',
      phone: '',
      id: '',
    };
  },

  components: {wPicker},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	this.id=options.id;
    this.getInitAdress()
  },

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
	getInitAdress:function(){//获取详细信息
		uni.showLoading({
			title:"加载中...",
			mask:true
		})
		var that = this;
		uniHttp({
			path:'/member/api/memberInternal/getAddressByMemberId/'+this.id,
			header:{
				aid:110,
				
			}
		}).then(res=>{
			this.consignee=res.memberAddrVo.consignee;
			this.phone=res.memberAddrVo.phone;
			this.address=res.memberAddrVo.address;
			this.isDefault=res.memberAddrVo.isDefault;
			this.province=res.memberAddrVo.province;
			this.city=res.memberAddrVo.city;
			this.county=res.memberAddrVo.area;
			uni.hideLoading()
		})
		
	},
    deleteAddress: function () {//删除地址
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定删除该地址',
        success: function (res) {
          if (res.confirm) {
			  uni.showLoading({
			  	title:"删除中...",
				mask:true
			  })
			  uniHttp({
			  	path:'/member/api/memberInternal/deleteAddressByAddrId/'+that.id,
			  	data:{
					id:that.$store.getters['login/get_userInfo'].id
				},
				header:{
			  		aid:112,
					
			  	},
				method:"delete"
			  }).then(res=>{
				uni.hideLoading()
			  	uni.showToast({
			  		icon:'success',
			  		title: '删除成功',
			  		duration: 1000,
			  		complete:function(){
			  			setTimeout(function(){
			  				uni.navigateBack({
			  				    delta:1
			  				}); 
			  			},1000)
			  		}
			  	})
			  	
			  })
          } else if (res.cancel) {}
        }
      });
    },
    consigneeInput: function (e) {
       this.consignee=e.detail.value;
    },
    phoneInput: function (e) {
      this.phone=e.detail.value;
    },
    detailedAddressInput: function (e) {
      this.address=e.detail.value;
    },
    isDefaultFun: function () {
      this.isDefault=!this.isDefault?this.isDefault=1:this.isDefault=0;
    },
    conserve: function () {//保存
      var that = this;
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.consignee && myreg.test(this.phone) && this.county && this.address) {
		  var params={
		  	     memSource: getApp().globalData.userType,
		  	     memId: that.$store.getters['login/get_userInfo'].id,
		  	     id: that.id,
		  	     consignee: that.consignee,
		  	     phone: that.phone,
		  	     province: that.province,
		  	     city: that.city,
		  	     area: that.county,
		  	     address: that.address,
		  	     isDefault: that.isDefault
		  }
		  uni.showLoading({
		  	title:"保存中...",
			mask:true
		  })
		  uniHttp({
		  	path:'/member/api/memberInternal/editAddress',
		  	header:{
		  		aid:111,
				
		  	},
			data:params,
			method: 'post',
		  }).then(res=>{
		  	uni.hideLoading();
			uni.showToast({
				icon:'success',
				title: '保存成功',
				duration: 1000,
				complete:function(){
					setTimeout(function(){
						uni.navigateBack({
						    delta:1
						}); 
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
    },
	//点击选择城市按钮显示picker-view
	translate:function (e) {
	  this.$refs.region.show()
	},
	onConfirm(areaInfo){//选择省市县
		[this.province,this.city,this.county]=areaInfo.checkArr;
	}
  }
};
</script>
<style>
@import "./editAddress.css";
</style>