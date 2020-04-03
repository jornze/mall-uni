<template>
<view>
<view class="swiper-box">
   <swiper current="0" circular="true" @change="swiperChange">
     <swiper-item v-for="(item, idx) in list" :key="idx">
       <image :src="item" @tap="previewImage1(idx)" ></image>
     </swiper-item> 
   </swiper>
   <view class="imageCount">{{current+1}}/{{list.length}}</view>
</view>
<view class="commodity-content"> 
  <view>
    <view>
      <text><text>￥</text>{{chooseSku.marketPrice}}</text>
      <text v-if="chooseSku.marketPrice!==chooseSku.retailPrice">￥{{chooseSku.retailPrice}}</text>
    </view>
    <view>
      <text v-for="(item, a) in all.ensureList" :key="a" v-if="item.rank==1">{{item.content}}</text>
    </view>
  </view>
  <view>
    <view>
      <view>
        <text class="commodity-title">{{all.goodsName}}</text>
        <text class="commodity-class" v-if>定制版</text>
      </view>
      <view>
        <text class="commodity-ensure" v-for="(item, a) in all.ensureList" :key="a" v-if="item.rank==2">{{item.content}}</text>
      </view>
    </view>
    <view v-if>
      <image src="/static/images/Commodity_details_Collection_uncheckede_Copy.png"></image>
      <text>已收藏</text>
    </view>
  </view>
</view>
<!-- <view class='commodity-information-box'>
  <view class='commodity-information'>商品信息</view>
  <view>
    <text class='commodity-information-title'>产品名称</text>
    <text class='commodity-information-content'>{{all.goodsName}}</text>
  </view>
  <view>
    <text class='commodity-information-title'>材质</text>
    <text class='commodity-information-content'>24K金&翡翠</text>
  </view>
</view> -->
<view class="commodity-image">
  <block v-for="(item, d) in detailImgList" :key="d">
  <image :src="item" mode="widthFix"></image>
  </block>
</view>
<view class="commodity-bottom">
  <view>
    <view>
      <image src="/static/images/Commodity_details_Private_letter.png"></image>
      <text>私信</text>
    </view>
    <view @tap="shoppingCart">
      <image src="/static/images/Commodity_details_shopping_Copy.png"></image>
      <text>购物车</text>
      <view v-if="shoppingCartNum">{{shoppingCartNum}}</view>
    </view>
  </view>
  <view>
    <text @tap="shoppingCartChoose">加入购物车</text>
    <text @tap="buyChoose">立即购买</text>
  </view>
</view>
<view class="commodity-choose" v-if="choose">
  <view class="commodity-choose-intro">
    <view>
      <image :src="chooseSku.mainImg" @tap="previewImage2(chooseSku.mainImg)"></image>
    </view>
    <view>
      <text class="commodity-choose-intro-name">{{all.goodsName}}</text>
      <text class="commodity-choose-intro-class">已选：{{chooseSku.skuName}}；</text>
      <text class="commodity-choose-intro-free" v-if="">赠品：皮绳红色</text>
      <view class="commodity-choose-intro-money">
        <view><span>￥</span>{{chooseSku.marketPrice}}</view>
        <text>x{{chooseSku.skuQty}}</text>
      </view>
    </view>
    <image class="close" src="/static/images/close.png" @tap="close"></image>
  </view>
  <view class="commodity-choose-guige">
    <text>规格</text>
    <view>
      <block v-for="(item, g) in goodsSkuVoList" :key="g">
      <text :class="chooseIndex==g?'commodity-choose-guige-choose':'commodity-choose-guige-unchoose'" @tap="chooseType(g)"  v-if="!item.skuStock==0">{{item.skuName}}</text>
      <text :class="chooseIndex==g?'commodity-choose-guige-choose':'commodity-choose-guige-unchoose2'" @tap="chooseType(g)" v-if="item.skuStock==0">{{item.skuName}}</text>
      </block>
    </view>
  </view>
  <view class="commodity-choose-num">
    <text>数量</text>
    <view class="buy-num">
      <view :class="chooseSku.skuQty==1? 'jian-btn-disabled':'jian-btn'" @tap="reduce" >－</view>
      <input :value="chooseSku.skuQty" disabled="true"></input>
      <view :class="chooseSku.skuQty==chooseSku.skuStock? 'jia-btn-disabled':'jia-btn'" @tap="add" >+</view>
    </view>
  </view>
  <view class="commodity-choose-free" v-if="">
    <text>赠品</text>
    <view>
      <text class="commodity-choose-guige-unchoose">红色</text>
      <text class="commodity-choose-guige-unchoose">黑色</text>
      <text class="commodity-choose-guige-unchoose">随机</text>
    </view> 
  </view>
  <view class="commodity-choose-bottom" v-if="choose=='shoppingCart'&&chooseSku.skuStock!==0" @tap="joinShoppingCart">加入购物车</view>
  <view class="commodity-choose-bottom2" v-if="chooseSku.skuStock==0">库存不足</view>
  <view class="commodity-choose-bottom" v-if="choose=='buy'&&chooseSku.skuStock!==0" @tap="orderDetails">选好了</view>
</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
	  hidden:false,
      current: '',//''
      choose: '',//'' buy shoppingCart
      chooseIndex: 1,//''
      chooseSku:'',//''
      list:[],//[]
      detailImgList:[],//''
      all: '',//''
      goodsSkuVoList: [],//[]
      shoppingCartNum: '',//''
      totalPrice: '',//''
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  // #ifdef MP-WEIXIN
    getApp().globalData.login();
	// #endif
	uni.showLoading({
		title:"加载中...",
		mask:true
	});
	uniHttp({//获取商品详情
		"path":"/goods/api/goodsInternal/getGoodsDetailsById/"+options.goodsId,
		"header":{
			"aid":"106",
			"type":"1",
		}
	}).then(result=>{
		let res=result;
		if (res.data.data.errorCode == 200) {
		  for (var i = 0; i < res.data.data.goodsVo.carouselImgList.length; i++) {
		    var img = getApp().globalData.imgUrl + "/" + res.data.data.goodsVo.carouselImgList[i];
		    res.data.data.goodsVo.carouselImgList[i] = img;
		  }
		  for (var i = 0; i < res.data.data.goodsVo.goodsSkuVoList.length; i++) {
		    var img = getApp().globalData.imgUrl + "/" + res.data.data.goodsVo.goodsSkuVoList[i].mainImg;
		    var skuQty = 1;
		    res.data.data.goodsVo.goodsSkuVoList[i].skuQty = skuQty;
		    res.data.data.goodsVo.goodsSkuVoList[i].mainImg = img;
		  }
		
		  for (var i = 0; i < res.data.data.goodsVo.detailImgList.length; i++) {
		    var img = getApp().globalData.imgUrl + "/" + res.data.data.goodsVo.detailImgList[i];
		    res.data.data.goodsVo.detailImgList[i] = img;
		  }
		
		  for (var keyId in res.data.data.goodsVo.goodsSkuVoList) {
		    this.goodsSkuVoList.push(res.data.data.goodsVo.goodsSkuVoList[keyId]);
		  }
		this.list=res.data.data.goodsVo.carouselImgList;
		this.all=res.data.data.goodsVo;
		this.detailImgList=res.data.data.goodsVo.detailImgList;
		this.chooseSku=this.goodsSkuVoList[0];
		uni.hideLoading();
	   }
	})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.pageLoading = false;
    if (getApp().globalData.memId) {
		uniHttp({//获取购物车编号
			"path":"/member/api/memberInternal/getShoppingCartCount/"+getApp().globalData.memId,
			"header":{
				"aid":"107"
			}
		}).then(result=>{
			let res=result;
			if (res.data.data.errorCode == 200) {
			    this.shoppingCartNum=res.data.data.shoppingCartNum;
				console.log(this.shoppingCartNum)
			}
		})
    }
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
  computed:{
  	...mapGetters('shopingCar',{
		"isLogin":"cons1"
	})
  },
  methods: {
	 ...mapMutations('shopingCar',['mut1']),
	 ...mapActions('shopingCar',['act1']),
    swiperChange: function (e) {//轮播当前的下标值
        this.current=e.detail.current;
    },
    preventD: function () {},
    previewImage1(idx) {
      uni.previewImage({
        current: this.list[idx],
        urls: this.list
      });
    },
    previewImage2(imgsrc) {
      var src = imgsrc;
      var srcArray = [];
      srcArray.push(src);
      uni.previewImage({
        current: src,
        urls: srcArray
      });
    },
    shoppingCart() {//点击购物车
		if (false) {
			if (!this.pageLoading) {
			  this.pageLoading = true;
			  uni.navigateTo({
				url: '/pages/shoppingCart/shoppingCart'
			  });
			}
		} else {//需要登录
			this.islogined();
		}
    },
    buyChoose() {//点击立即购买
      if (getApp().globalData.memId) {
          this.choose="buy";
      } else {//验证登录
        uni.showModal({
          title: '提示',
          content: '小可爱，微信授权一键登录',
          success:(res)=>{
            if (res.confirm) {
              uni.navigateTo({
                url: '/pages/authorization/authorization'
              });
            } else if (res.cancel) {}
          }
        });
      }
    },
	orderDetails(e) {//立即购买->选好了 确定购买
	  var Settlement = [{}];
	  Settlement[0].goodsId = this.all.id;
	  Settlement[0].skuId = this.chooseSku.id;
	  Settlement[0].skuQty = this.chooseSku.skuQty;
	  uni.navigateTo({
	    url: '/pages/orderDetails/orderDetails?parendNo=' + 2
	  });
		uni.showLoading({
			"title":"加载中...",
			"mask":true,
		});
		uniHttp({
			"path":"/orders/api/orderInternal/generatingOrder",
			"method":"POST",
			"data":{
				"wxMemId": getApp().globalData.memId,
				"openId": getApp().globalData.openId,
				"orderSource": getApp().globalData.userType,
				"orderVoList": Settlement
			},
			"header":{
				"aid": 119
			}
		}).then(result=>{
			if (!this.pageLoading) {
			  this.pageLoading = true;
			  uni.hideLoading();
			  uni.navigateTo({
			    url: '/pages/orderDetails/orderDetails?parendNo=' + res.data.data.parendNo
			  });
			   this.choose='';
			}
		})
	},
	shoppingCartChoose() {//点击加入购物车
	  if (getApp().globalData.memId) {
	      this.choose='shoppingCart';
	  } else {//验证登录
	    
	  }
	},
    joinShoppingCart() {//确定添加到购物车
		uniHttp({
			"path":getApp().globalData.addAShoppingCart,
			method: 'POST',
			data: {
			  "memId": getApp().globalData.memId,
			  "memSource": 1,
			  "skuId": this.chooseSku.id,
			  "qty": this.chooseSku.skuQty
			},
			"header":{
				"aid":"114"
			}
		}).then(res=>{
			uniHttp({//购物车数量
				"path":getApp().globalData.getShoppingCartCount + getApp().globalData.memId,
				data: {},
				"header":{
					"aid":"107"
				}
			}).then(res=>{
				 this.shoppingCartNum=res.data.data.shoppingCartNum;
			})
		})
       this.choose='';
    },

    close() {//关闭弹框
        this.choose='';
    },
    chooseType(idx) {//sku选择 规格
        this.chooseIndex=idx;
        this.chooseSku=this.goodsSkuVoList[idx];
    },
    //减少数量
    reduce: function () {
      var skuVoList = {};
      if (this.chooseSku.skuQty >= 2) {
        skuVoList.skuQty = this.chooseSku.skuQty - 1;
         this.chooseSku.skuQty=skuVoList.skuQty;
      }
    },
    //增加数量
    add: function () {
      var skuVoList = {};
      if (this.chooseSku.skuQty < this.chooseSku.skuStock) {
        skuVoList.skuQty = this.chooseSku.skuQty + 1;
          this.chooseSku.skuQty=skuVoList.skuQty;
      }
    },
	islogined:function(){//是否登录
		console.log(this.isLogin);
		this.act1(2);
		// if(!loginStatus){
		// 	uni.showModal({
		// 	  title: '提示',
		// 	  content: '请先登录哦!',
		// 	  success:(res)=>{
		// 	    if (res.confirm) {
		// 	      uni.navigateTo({
		// 	        url: '/pages/login/login'
		// 	      });
		// 	    }
		// 	  }
		// 	});
		// }
		
	}
  }
};
</script>
<style>
@import "./commodity_details.css";
</style>