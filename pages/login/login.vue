<template>
	<view class="loginArea">
		<view class="navBar">
			<image class="img" @click="goBack" src="../../static/picture/back.png" mode=""></image>
			<text></text>
			<view class=""></view>
		</view>
		<view class="loginTitle">
			<view class="login">
				<view class="text">登录</view>
				<view class="line"></view>
			</view>
		</view>
		<view class="accountArea bgArea">
			<view class="title">账号：</view>
			<input class="uni-input" v-model="inputValue1" @input="onKeyInput(1)" placeholder="请输入账号" />
		</view>
		<view class="redTip" v-if="accountStatus">
			请输入正确格式的账号
		</view>
		<view class="PasswordArea bgArea">
			<view class="title">密码：</view>
			<input class="uni-input"  v-model="inputValue2" password type="text" @input="onKeyInput(2)" placeholder="请输入密码" />
		</view>
		<view class="redTip" v-if="passwordStatus">
			请输入正确格式的密码
		</view>
		<button class="btnArea loginBtn" @click="goLogin" type="" plain="false">登录</button>
		<button class="btnArea registerBtn" @click="goRegister" type="primary" plain="false">注册</button>
		
	</view>
</template>

<script>
	import {login} from "../../lib/js/http.js"
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				inputValue1:"",
				inputValue2:"",
				accountStatus:false,//账号校验
				passwordStatus:false,//密码校验
			};
		},
		computed: {
			...mapGetters({get_userInfo:'login/get_userInfo'}),
			name() {
				return 1
			}
		},
		methods:{
			goBack:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			onKeyInput: function(id) {
				if(id==1){
					if(event.target.value.length>=3){
						this.accountStatus=false;
					}else{
						this.accountStatus=true;
					}
				}else if(id==2){
					if(event.target.value.length>=3){
						this.passwordStatus=false;
					}else{
						this.passwordStatus=true;
					}
				}
			},
			goLogin:function(){
				var that = this;
				var params ={
					memAccount:this.inputValue1,//	是	string	用户名
					memPassword:this.inputValue2,//	是	string	密码
				}
				//"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjQ1OTc5MzMxNzE2MTAwMDk3In0.nzjrGIADbXFAJhRBjfefg_hpsUoahBEcDc-a6KyFZQhc7DUj47NNwNON9mmN6Hd7EAocpG-4NB254TilV4o1WQ"
				//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjQ1OTc5MzMxNzE2MTAwMDk3In0.gJFG5dJ9cwqDRXLDO_2sjanV6Y7AcjM8f65gkaN-Yg7JlUY8hkYw7evAwg03fcsXWqnE8owwl0yK4NWSKYXOCQ
				login(params,131).then(//登录aid 132
					(res) => {
						if(res.data.code==200){
							console.log(res.data)
							that.$store.dispatch('login/SET_isLogin',true)
							that.$store.dispatch('login/SET_userInfo',res.data.data)
							uni.setStorage({
								key: 'storage_web_app_userInfo',
								data: JSON.stringify(res.data.data),
								success: function () {
								}
							});
							uni.setStorage({
								key: 'storage_web_app_isLogin',
								data: '1',
								success: function () {
									uni.showToast({
										// icon:'none',
										title: '登录成功',
										duration: 1000,
										complete:function(){
											setTimeout(function(){
												uni.switchTab({
													url: '/pages/jingxuan/jingxuan'
												});
											},1000)
										}
									});
								}
							});
							
						}else{
							uni.showToast({
								icon:'none',
								title: res.data.message,
								duration: 1000,
							});
						}
					},
					(err) => {
					console.log('get err', err)
					}
				)
				// console.log(this.$store.getters['login/get_isLogin'])
				// console.log(this.$store.state.login.isLogin)
			},
			goRegister:function(){
				uni.navigateTo({
					url: '/pages/register/register'
				});
			}
		}
	}
</script>

<style lang="scss">
.loginArea{
	width: 100%;
	height: 100%;
	.navBar{
		height: 200rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.img{
			width: 22rpx;
			height: 38rpx;
			padding: 10rpx;
			margin-left: 30rpx;
		}
	}
	.loginTitle{
		width: 640rpx;
		padding: 0 55rpx;
		display: flex;
		align-items: center;
		padding-bottom: 30rpx;
		.login{
			position: relative;
			.text{
				font-size:44rpx;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:44rpx;
			}
			.line{
				height: 10rpx;
				width: 100%;
				position: absolute;
				border-radius: 5px;
				background: #63BBFF;
				bottom: -10rpx;
			}
		}
	}
	.redTip{
		width: 640rpx;
		padding: 0 55rpx;
		color:red;
	}
	.bgArea{
		width:640rpx;
		height:80rpx;
		background:rgba(238,238,238,1);
		border-radius:20rpx;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;
		.title{
			font-size:38rpx;
			font-weight:bold;
			color:rgba(51,51,51,1);
			line-height:38rpx;
			margin-left: 30rpx;
		}
		.uni-input{
			width: 300rpx;
			height: 50rpx;
			line-height: 50rpx;
			background:rgba(238,238,238,1);
			outline: none;
			border:0;
			font-size:32rpx;
		}
		input::-webkit-input-placeholder {
            color: #CFCFCF;
        }
        input::-moz-input-placeholder {
            color: #CFCFCF;
        }
        input::-ms-input-placeholder {
            color: #CFCFCF;
        }
	}
	.accountArea{

	}
	.PasswordArea{

	}
	.btnArea{
		width:640rpx;
		height:100rpx;
		background:rgba(99,187,255,1);
		border-radius:20rpx;
		border:0;
		color:#fff;
	}
	.loginBtn{
		margin-top: 300rpx;
	}
	.registerBtn{
		margin-top: 50rpx;
	}
}
</style>
