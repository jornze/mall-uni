import Vue from 'vue';
import App from './App';
import store from './store';
// Vue.prototype.$store=store;
import Global_ from './lib/js/GlobalObj.js'   //全局对象
Vue.prototype.GLOBAL = Global_; //添加Global_到Vue的原型对象上
Vue.config.productionTip = false;

Vue.mixin({
	methods: {
		setData: function(obj, callback) {
			let that = this;
			let keys = [];
			let val, data;
			Object.keys(obj).forEach(function(key) {
				keys = key.split('.');
				val = obj[key];
				data = that.$data;
				keys.forEach(function(key2, index) {
					if (index + 1 == keys.length) {
						that.$set(data, key2, val);
					} else {
						if (!data[key2]) {
							that.$set(data, key2, {});
						}
					}
					data = data[key2];
				})
			});
			callback && callback();
		} 
	}
});

App.mpType = 'app';

const app = new Vue({
    ...App,
	store//挂载store
});
app.$mount();
