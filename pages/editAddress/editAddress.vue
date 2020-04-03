<template>
<view>
	<w-picker 
	    mode="region"
	    :defaultVal="addressInfo.checkArr"
	    :areaCode="addressInfo.checkValue"
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
  <input disabled="true" :value="addressInfo.checkArr[0] + ' ' + addressInfo.checkArr[1] + ' ' + addressInfo.checkArr[2]" @tap="translate"></input>
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
	import wPicker from "@/components/areapicker/w-picker.vue";
export default {
  data(){
    return {
	  addressInfo: {
	  		"checkArr":["浙江省", "杭州市", "西湖区"],//地址省市区
	  		"checkValue":["33", "3301", "330106"]//省市区的地区编码
	  },
      address: '',
      isDefault: '',
      province: '',
      city: 's',
      county: 's',
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
	 // uni.showLoading({
	 // 		  title:"加载中...",
	 // 		  mask:true
	 // });
    var that = this;
    uni.request({
      url: getApp().globalData.url1 + getApp().globalData.getAddressByMemberId + options.id,
      data: '',
      header: {
        aid: 110
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.data.errorCode == 200) {
            that.consignee=res.data.data.memberAddrVo.consignee;
            that.phone=res.data.data.memberAddrVo.phone;
            that.address=res.data.data.memberAddrVo.address;
            that.isDefault=res.data.data.memberAddrVo.isDefault;
            that.province=res.data.data.memberAddrVo.province;
            that.city=res.data.data.memberAddrVo.city;
            that.county=res.data.data.memberAddrVo.area;
            that.id=options.id;
			uni.hideLoading();
        }
      },
      fail: function (res) {},
      complete: function (res) {}
    });
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
  methods: {
    deleteAddress: function () {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定删除该地址',
        success: function (res) {
          if (res.confirm) {
			  uni.showLoading({
			  		  title:"删除中...",
			  		  mask:true
			  });
            uni.request({
              url: getApp().globalData.url1 + getApp().globalData.deleteAddressByAddrId + that.id,
              data: '',
              header: {
                aid: 112
              },
              method: 'delete',
              dataType: 'json',
              responseType: 'text',
              success: function (res) {
				 uni.hideLoading()
                uni.navigateBack({
                  delta: 1
                });
              },
              fail: function (res) {},
              complete: function (res) {}
            });
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
    conserve: function () {
		
      var that = this;
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.consignee && myreg.test(this.phone) && this.county && this.address) {
        uni.showLoading({
			title:"保存中...",
			mask:true
		});
		uni.request({
          url: getApp().globalData.url1 + getApp().globalData.editAddress,
          data: {
            memSource: getApp().globalData.userType,
            memId: getApp().globalData.memId,
            id: that.id,
            consignee: that.consignee,
            phone: that.phone,
            province: that.province,
            city: that.city,
            area: that.county,
            address: that.address,
            isDefault: that.isDefault
          },
          header: {
            aid: 111
          },
          method: 'post',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
			uni.hideLoading();
            uni.navigateBack({
              delta: 1
            });
          },
          fail: function (res) {},
          complete: function (res) {}
        });
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
	onConfirm(areaInfo){
		this.addressInfo={
			"checkArr":areaInfo.checkArr,
			"checkValue":areaInfo.checkValue
		}
	}
  }
};
</script>
<style>
@import "./editAddress.css";
</style>