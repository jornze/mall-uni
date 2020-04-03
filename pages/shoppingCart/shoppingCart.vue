<template>
<view>
<view class="none">
  <image src="/static/images/kongdaizi.png" v-if="flag"></image>
  <view v-if="flag">暂无购物车商品</view>
</view>
<view class="shopping-box">
  <view class="shopping-list" v-for="(item, unique) in shop" :key="unique">
    <image class="shopping-select" src="/static/images/kong.png" @tap="selects(item)"  v-if="!item.select"></image>
    <image class="shopping-select" src="/static/images/gou.png" @tap="selects(item)"  v-if="item.select"></image>
    <image class="shopping-img" :src="item.mainImg"></image>
    <view class="shopping-content" @tap="commodity_details(item)">
      <view>{{item.goodsName}}</view>
      <view>{{item.skuName}}</view>
      <view>
        <view><span>￥</span>{{item.marketPrice}}</view>
        <view class="buy-num">
          <view :class="'jian-btn ' + (item.skuCount<=1? 'disabled' : '')" @tap.stop="jianBtnTap(item,unique)">－</view>
          <view class="kuang" @tap.stop="kuang">{{item.skuCount}}</view>
          <view :class="'jia-btn ' + (item.skuCount>=item.skuStock? 'disabled' : '')" @tap.stop="jiaBtnTap(item)">+</view>
        </view>
      </view>        
    </view>
    <view class="noGoods" v-if="item.skuStock==0">无货</view>
    <view class="noGoods" v-if="item.commodityFrame">已下架</view>
  </view>
   <view v-show="isloadedend" class="bottomText">已全部加载</view>
</view>
<view class="shopping-bottom" v-if="!flag">
  <view @tap="AllselectsFun">
    <image src="/static/images/kong.png" v-if="!Allselects"></image>
    <image src="/static/images/gou.png" v-if="Allselects"></image>
    <view>全选</view>
  </view>
  <view>
    <view>合计：</view>
    <view>￥{{money}}</view>
    <view @tap="orderDetails">结算</view>
  </view>
</view>
</view>
</template>

<script>
import {uniHttp} from "../../apis/api.js"
export default {
  data() {
    return {
      Allselects: false,
      money: '0.00',
      shop: [],//[]
      chooseSkuIds: '',
      page: 1,
      repeatedLoading: true,
	  pageLoading:false,
      flag: false,
	  ischange:false ,//全选是否改变
	  timer:null,
	  isloadedend:false
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	   this.shoppingList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	 // #ifdef MP-WEIXIN
	uni.hideShareMenu();
	// #endif
	this.pageLoading=false;
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
    if (this.repeatedLoading) {
		  console.log('ss')
      this.repeatedLoading = false;
      this.page = this.page + 1;
      this.shoppingList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    commodity_details(item) {//打开商品详情页
	console.log(this.pageLoading)
      if (!item.commodityFrame) {
        if (!this.pageLoading) {
          this.pageLoading = true;
          uni.navigateTo({
            url: '/pages/commodity_details/commodity_details?goodsId=' + item.goodsId
          });
        }
      }
    },
    orderDetails() {//结算
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
             that.chooseSkuIds=chooseSkuIdsList;
          }
        }
      }
		if (j == 0) {
			uni.showModal({
			  title: '提示',
			  content: '请选择商品'
			});
		} else{
			uni.showLoading({
				title:"加载中...",
				mask:true
			});
			uniHttp({
			  path: getApp().globalData.generatingOrder,
			  data: {
				wxMemId: getApp().globalData.memId,
				openId: getApp().globalData.openId,
				orderSource: getApp().globalData.userType,
				orderVoList: Settlement
			  },
			  header: {
				aid: 119
			  },
			  method: 'post',
			}).then(res=>{
			   uniHttp({
			     path:getApp().globalData.deleteShoppingCartByList,
			     data: {
			       memId: getApp().globalData.memId,
			       skuIds: that.chooseSkuIds
			     },
			     header: {
			       aid: 116
			     },
			     method: 'delete'
			   }).then(deleres=>{
				   uni.hideLoading()
			   })
			   if (!that.pageLoading) {
					that.pageLoading = true;
					uni.navigateTo({
					   url: '/pages/orderDetails/orderDetails?parendNo=' + res.data.data.parendNo
					});
			    }
			})
        }
    },
    selects: function (item) {//选择商品按钮
		if (item.haveStock && !item.commodityFrame) {
			item.select=!item.select
			this.countMoney();
		}
		var btn = true;
		this.shop.map((it,idx)=>{
			if(it.haveStock && !it.commodityFrame){
				if (!it.select) {
					btn = false;
					this.Allselects=false;
				}
			}
		})
		if(btn) {
			this.Allselects=true;
		}
    },
    AllselectsFun: function () {//选择全选按钮
		if(!this.ischange){
			this.ischange=true;
			if (!this.Allselects) {
				this.shop.map((item,index)=>{
					if(item.haveStock && !item.commodityFrame){
						item.select = true;
					}
				})
				this.Allselects=true;
				this.ischange=false;	
			}else{
				this.shop.map((item,index)=>{
					if(item.haveStock && !item.commodityFrame){
						item.select = false;
					}
				})
				this.Allselects=false;
				this.ischange=false;
			}
		}
		this.countMoney();
    },
    countMoney: function () {//合计金额
		if(this.timer!==null){
			clearTimeout(this.timer);
		}
		this.timer=setTimeout(()=>{
			console.log('r')
			var Cmoney = 0;
			this.shop.map((item,index)=>{
				if(item.select){
					Cmoney = Cmoney + item.marketPrice * item.skuCount;
				}
			})
			Cmoney = Cmoney.toFixed(2);
			this.money=Cmoney;
		},200)
      
    },
    kuang() {},
    jianBtnTap: function (item,indx) {//数量减少
      var that = this;
		if (item.skuCount >= 2) {
			item.skuCount = item.skuCount - 1;
			if(item.select){
				this.countMoney();
			}
		}else {
			uni.showModal({
				title: '提示',
				content: '亲，确定删除该商品',
				success: function (res) {
					if (res.confirm) {
						uniHttp({
							path: getApp().globalData.deleteShoppingCartById + getApp().globalData.memId + '/' + item.id,
							data: '',
							header: {
							  aid: 115
							},
							method: 'delete',
						}).then(res=>{
							that.shop.splice(indx, 1);
							if(!that.shop.length){
								that.flag=true;
							}else{
								if(item.select){
									that.countMoney();
								}
							}
						})
					}
				}
			});
		}
    },
    jiaBtnTap: function (item) {//数量增加
      var that = this;
      if (item.skuCount < item.skuStock) {
        item.skuCount = item.skuCount + 1;
        if(item.select){
			this.countMoney();
		}
      } else {
        uni.showModal({
          title: '提示',
          content: '亲，该宝贝不能购买更多'
        });
      }
    },
    inputDigit: function (e) {//没有手动输入数量的功能  暂时弃用
      var skuCount = this.shop[e.currentTarget.dataset.index].skuCount;
      var skuStock = this.shop[e.currentTarget.dataset.index].skuStock;
      var that = this;
      if (e.detail.value > skuStock) {
        this.shop[e.currentTarget.dataset.index].skuCount = skuStock;
        uni.showModal({
          title: '提示',
          showCancel: false,
          content: '很抱歉，该商品当前最多只能购买' + skuStock + '份'
        });
      } else {
        this.shop[e.currentTarget.dataset.index].skuCount = e.detail.value;
      }
      this.countMoney();
    },
    shoppingList() {//获取购物车列表
		var that = this;
		uni.showLoading({
			title:"加载中...",
			mask:true
		});
		uniHttp({
			path:getApp().globalData.getShoppingCartList + this.page + '/10/' + getApp().globalData.memId + '/1',
			data: '',
			header: {
			  aid: 117,
			}
        }).then(result=>{
			that.flag=result.data.data.flag;
			if (Object.keys(result.data.data.skuId_count).length) {
				that.getList(result.data.data.skuId_count)
			}else{
				uni.hideLoading()
				if(this.page!=1){
					that.isloadedend=true;
				}
			}
		})
    },
	getList(skuIdCount){
		uniHttp({
			path: getApp().globalData.getSkuVoListBySkuIdList,
			data: {
			  skuId_count: skuIdCount
			},
			header: {
			  aid: 118
			},
			method: 'post',
		}).then(res=>{
			let goodsSkuVoList=res.data.data.goodsSkuVoList;
			if (goodsSkuVoList.length > 0) {
				goodsSkuVoList.map((item,index)=>{
					item.mainImg=getApp().globalData.imgUrl + "/" +item.mainImg;
					item.marketPrice=item.marketPrice.toFixed(2);
					item.select = false;
					item.skuCount=item.skuCount>=item.skuStock?item.skuStock:item.skuCount;
					item.haveStock=item.skuStock==0?false:true;
				})
				this.shop.push(...res.data.data.goodsSkuVoList)
				uni.hideLoading();
			}
			this.repeatedLoading = true;
		})
	}

  }
};
</script>
<style>
@import "./shoppingCart.css";
</style>