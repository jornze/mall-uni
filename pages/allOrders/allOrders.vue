<template>
<view>
<view class="none">
  <image src="/static/images/kongdaizi.png" v-if="orderStatus!=3&&flag"></image>
  <image src="/static/images/daishouhuo.png" v-if="orderStatus==3&&flag" class="daishouhuo"></image>
  <view v-if="orderStatus==1&&flag">暂无支付订单</view>
  <view v-if="orderStatus==2&&flag">暂无发货订单</view>
  <view v-if="orderStatus==3&&flag">暂无收货订单</view>
  <view v-if="orderStatus==5&&flag">暂无评价订单</view>
  <view v-if="orderStatus==0&&flag">暂无订单</view>
</view>
<block v-for="(item, o) in orderTYVoList" :key="o">
<view class="order-list" :data-parendNo="item.parendNo" :data-supId="item.orderVoList[0].supId" :data-orderStatus="item.orderVoList[0].orderStatus" @tap="orderDetails">
  <view class="describe">
    <view> 
      <view></view>
      <text>订单编号：{{item.parendNo}}</text>
    </view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==1">待支付</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==2">待发货</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==3||item.orderVoList[0].orderStatus==4">待收货1</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==5">待评价</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==6">已完成</view>
    <view class="status" v-if="item.orderVoList[0].orderStatus==7">已取消</view>
  </view>
  <block v-for="(item, i) in orderTYVoList[o].orderVoList" :key="i">
  <view class="commodity-list">
    <image :src="item.skuImg"></image>
    <view>
      <view>{{item.goodsName}}</view>
      <view>{{item.skuName}}</view>
      <view>
        <view><span>￥</span>{{item.marketPrice}}</view>
        <text>x{{item.skuQty}}</text>
      </view>
    </view>
  </view>
  </block>
  <view class="order-total">
    <view>共<span>{{item.totalQuantity}}</span>件商品，实付<span>￥{{item.orderVoList[0].totalAmount}}</span></view>
    <view class="order-other">
      <view class="buyAgain" @tap.stop="logistics(item.orderVoList[0].id)" v-if="item.orderVoList[0].orderStatus==3||item.orderVoList[0].orderStatus==4">查看物流</view>
      <view class="buyAgain" v-if="item.orderVoList[0].orderStatus==5">再次购买</view>
      <view class="buyAgain" v-if="item.orderVoList[0].orderStatus==2" @tap.stop="remind">提醒发货</view>
      <view class="buyAgain" v-if="item.orderVoList[0].orderStatus==1">立即支付</view>
      <view class="deletOrder" v-if="item.orderVoList[0].orderStatus==6||item.orderVoList[0].orderStatus==7" @tap.stop="deletOrder({parendNo:item.parendNo,type:item.orderVoList[0].orderStatus,supId:item.orderVoList[0].supId,index:o})" >删除订单</view>
    </view>
  </view>
</view>
</block>
<view v-show="isloadedend" class="bottomText">已全部加载</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      orderStatus: '',
      orderTYVoList: [],
      repeatedLoading: true,
      page: 1,
      flag: '',
	  isloadedend:false,
    };
  },
  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	this.orderStatus=options.orderStatus;
	let orderstatusText=['全部订单','待付款','待发货','待收货','','待评价'];//0 1,2,3,5
	uni.setNavigationBarTitle({
		title: orderstatusText[options.orderStatus]
	});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // uni.hideShareMenu();
	this.page=1;
	this.orderTYVoList=[];
    this.getOrderList();
    this.pageLoading = false;
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
  onReachBottom: function () {
    if (this.repeatedLoading && !this.isloadedend) {
      this.repeatedLoading = false;
      this.page = this.page + 1;
      this.getOrderList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    orderDetails(e) {//查看订单详情
      if (!this.pageLoading) {
        this.pageLoading = true;
        uni.navigateTo({
          url: '/pages/orderDetailByOrders/orderDetailByOrders?parendNo=' + e.currentTarget.dataset.parendno + '&supId=' + e.currentTarget.dataset.supid + '&orderStatus=' + e.currentTarget.dataset.orderstatus
        });
      }
    },

    logistics(id) {//查看物流
      var that = this;
      uniHttp({
        path:getApp().globalData.getLogisticsDetailById +id,//getApp().globalData.url3
        header: {
          aid: 129
        },
        method: 'GET'
      }).then(res=>{
		  console.log(id)
		  if (!that.pageLoading) {
		    that.pageLoading = true;
		    uni.navigateTo({
		      url: '/pages/orderTracking/orderTracking?logisticsCode=' + res.rtOrderDetail.logisticsCode + '&logisticsPostid=' + res.rtOrderDetail.logisticsPostid
		    });
		  }
	  })
    },
    deletOrder(deletParams) {//删除订单 orderstatus=6 / 7
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定删除订单',
        success: function (res) {
          if (res.confirm) {
			  that.deletOrderHttp(deletParams);
          } else if (res.cancel) {}
        }
      });
    },
	deletOrderHttp(deletParams){//删除订单请求 category对应的值6=>1  7=>0
	let type=deletParams.type==7?0:1;
		uni.showLoading({
			title:"删除中...",
			mask:true
		})
		uniHttp({
		  path: getApp().globalData.deleteOrderByCondition,
		  data: {
		    parendNo: deletParams.parendNo,
		    supId:  deletParams.supId,
		    category: type
		  },
		  header: {
		    aid: 127,
		  },
		  method: 'delete',
		}).then(res=>{
				this.orderTYVoList.splice(deletParams.index,1);
				uni.showToast({
					title:"删除成功",
					icon:"success"
				})
				if(!this.orderTYVoList.length){
					this.page=1;
					this.getOrderList();
				}
			
			uni.hideLoading()
		})
	},
    getOrderList() {//获取订单列表
		uni.showLoading({
			title:"加载中...",
			mask:true
		})
      var that = this;
	  uniHttp({//获取商品详情
	  	"path":"/orders/api/orderInternal/getOrderListByStatus/"+this.page+'/5',
		method:"POST",
		data: {
		  wxMemId: this.$store.getters['login/get_userInfo'].id,
		  openId: getApp().globalData.openId,
		  orderStatus: this.orderStatus
		},
	  	"header":{
	  		aid:125,
	  	}
	  }).then(res=>{
		  that.repeatedLoading = true;
		   that.flag=res.flag;
		if (res.orderTYVoList.length > 0) {
		    for (var i = 0; i < res.orderTYVoList.length; i++) {
		      for (var j = 0; j < res.orderTYVoList[i].orderVoList.length; j++) {
		        var img = getApp().globalData.imgUrl + res.orderTYVoList[i].orderVoList[j].skuImg;
		        res.orderTYVoList[i].orderVoList[j].skuImg = img;
		        res.orderTYVoList[i].orderVoList[j].marketPrice = res.orderTYVoList[i].orderVoList[j].marketPrice.toFixed(2);
		        res.orderTYVoList[i].orderVoList[j].totalAmount = res.orderTYVoList[i].orderVoList[j].totalAmount.toFixed(2);
		      }
		      var orderTYVoList = that.orderTYVoList;
		      orderTYVoList.push(res.orderTYVoList[i]);
		    }
		    that.orderTYVoList=orderTYVoList;
			if(res.orderTYVoList.length<5){
				if(this.page>1){
					that.isloadedend=true;
				}
				
			}
		}else{
			that.isloadedend=true;
			if(that.flag){
				that.isloadedend=false;
			}
		}
		  uni.hideLoading();
	  }).catch(err=>{
		  uni.hideLoading()
	  })
    },

    remind() {//提醒发货
      uni.showToast({
        title: '已提醒发货',
        mask: true,
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
      });
    }

  }
};
</script>
<style>
@import "./allOrders.css";
</style>