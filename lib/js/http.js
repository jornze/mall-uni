import {Get,Post,Get1,Post1,Delete1} from "./GlobalFunction.js"  //post1为header带参数 aid
// 注册 aid : 132
export const register = (p,aid) => Post1(p,aid,'/member/api/register')
// 登录 aid : 131
export const login = (p,aid) => Post1(p,aid,'/member/api/login')
//初始化地址列表  aid : 113  地址列表       getAddressListByMemberId: '/member/api/memberInternal/getAddressListByMemberId/',
export const InitaddList = (p,aid,url) => Get1(p,aid,url)
// 新增收获地址  编辑收获地址 aid : 111
export const addAdress = (p,aid) => Post1(p,aid,'/member/api/memberInternal/editAddress')
// 删除收获地址  112
export const deleteAdress = (p,aid,url) => Delete1(p,aid,url)
// 地址详情  110
export const InfoAdress = (p,aid,url) => Get1(p,aid,url)
// 微信个人页面数据  那code 100
export const wxRedirect = (p,aid,url) => Get1(p,aid,url)
// 订单信息数据  那code 108
export const getOrderGroupByMemid = (p,aid,url) => Get1(p,aid,url)
// 获取购物车列表 code 117
export const getShoppingCartList = (p,aid,url) => Get1(p,aid,url)
// 获取购物车列表 code 118
export const getSkuVoListBySkuIdList = (p,aid,url) => Post1(p,aid,'/goods/api/goodsInternal/getSkuVoListBySkuIdList')
// 支付获取详细地址 code 109
export const getDefaultAddress = (p,aid,url) => Get1(p,aid,url)
