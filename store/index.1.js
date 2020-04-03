import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		isload:false,
		login:''
	},
	//同步方法  commit('方法名')调用
	mutations:{
		login(state){
			if(!state.isload){
				// #ifdef MP-WEIXIN
				uni.showModal({
				    title: '授权登陆',
				    content: '小可爱，微信授权一键登录',
				    success: function (res) {
							 console.log(res.confirm)
				        if (res.confirm) {
								 uni.navigateTo({
								   url: '/pages/authorization/authorization'
								 });
				            // uni.authorize({
				            //     scope: 'scope.userInfo',
				            //     success() {
				            //        uni.getUserInfo({
				            // 			  provider: 'weixin',
				            // 			  success: function (infoRes) {
				            // 				console.log(infoRes);
				            // 			  }
				            // 			})
				            //     }
				            // })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				// #endif
				
				// #ifdef H5
				console.log('需要h5登陆')
				// #endif
			}else{
				console.log('has londed')
			}
		}
	},
	getters:{
		hasloaded(state){
			return !state.isload;
		}
	},
	//同步方法  dispatch('方法名')调用
	actions:{
		appi(context){
			console.log(context)
		}
	}
})