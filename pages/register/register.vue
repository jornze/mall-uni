<template>
	<view class="loginArea">
		<view class="navBar">
			<image class="img" @click="goBack" src="../../static/picture/back.png" mode=""></image>
			<text></text>
			<view class=""></view>
		</view>
		<view class="loginTitle">
			<view class="login">
				<view class="text">注册</view>
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
		<view class="PasswordArea bgArea">
			<view class="title">邀请码：</view>
			<input class="uni-input"  v-model="inputValue3" password type="text" @input="onKeyInput(3)" placeholder="请输入邀请码" />
		</view>
		<view class="PasswordArea bgArea">
			<view class="title">邀请人：</view>
			<input class="uni-input"  v-model="inputValue4" password type="text" @input="onKeyInput(3)" placeholder="请输入邀请人" />
		</view>
		<button class="btnArea registerBtn" @click="goRegister" type="primary" plain="false">注册</button>
		<button class="btnArea loginBtn" @click="goLogin" type="primary" plain="false">登录</button>
		
	</view>
</template>

<script>
	import {register} from "../../lib/js/http.js"
	export default {
		data() {
			return {
				inputValue1:"",
				inputValue2:"",
				inputValue3:"",
				inputValue4:"",
				accountStatus:false,//账号校验
				passwordStatus:false,//密码校验
			};
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
				// console.log(id)
				// console.log(event.target.value)
				// this.inputValue = event.target.value
			},
			goRegister:function(){
				var params ={
					// memAccount:'yaoxiaohui',//	是	string	用户名
					// memPassword:'123456',//	是	string	密码
					memAccount:this.inputValue1,//	是	string	用户名
					memPassword:this.inputValue2,//	是	string	密码
					inviteCode:'123456',//	是	string	邀请码
					sourceChannel:'本地',//	是	string	渠道来源
					nickname:'钱多多sex!',//	是	string	昵称
					verifyCode:'123456',//	是	string	验证码
					inviteMemAccount:'superman',//	是	string	邀请人
				}
				register(params,132).then(//注册aid 132
					(res) => {
						if(res.data.code==200){
							uni.showToast({
								icon:'none',
								title: '注册成功',
								duration: 1000,
								complete:function(){
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
					console.log('getTourist err', err)
					}
				)
				
			},
			goLogin:function(){
				uni.navigateTo({
					url: '/pages/login/login'
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
		margin-top: 50rpx;

	}
	.registerBtn{
		margin-top: 200rpx;	
	}
}
</style>
