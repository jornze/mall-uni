const CryptoJS = require('../crypto-js/crypto-js.js');  //引用AES源码js
const api="";// /api开发环境需要配置proxy  http://183.131.205.116:8090
/**
 * get（）--api
 * @param obj 参数 url 地址
 * @returns {*}
 */
export function Get(obj,url){
	return new Promise((resolve, reject) => {
		uni.request({
			url: api+url, //仅为示例，并非真实接口地址。
			data: obj,
			method:'GET',
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err);
			}
		});
	})
}
/**
 * post（）--api
 * @param obj 
 * @returns {*}
 */
export function Post (obj,url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: api+url, //仅为示例，并非真实接口地址。
			data: obj,
			method:'POST',
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err)
			}
		});
	})
}
/**
 * get（）--api
 * @param obj 参数 url 地址
 * @returns {*}
 */
export function Get1(obj,aid,url){
	return new Promise((resolve, reject) => {
		uni.request({
			url: api+url, //仅为示例，并非真实接口地址。
			data: obj,
			method:'GET',
			header: { aid: aid },
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err);
			}
		});
	})
}
/**
 * post1（）--api  接口使用
 * @param obj 
 * @returns {*}
 */
export function Post1 (obj,aid,url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: api+url, //仅为示例，并非真实接口地址。
			data: obj,
			method:'POST',
			header: { aid: aid },
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err)
			}
		});
	})
}
/**
 * delete1（）--api  接口使用
 * @param obj 
 * @returns {*}
 */
export function Delete1 (obj,aid,url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: api+url, //仅为示例，并非真实接口地址。
			data: obj,
			method:'DELETE',
			header: { aid: aid },
			success: (res) => {
				resolve(res);
			},
			fail(err) {
				reject(err)
			}
		});
	})
}
/**
 * 加密（）--api
 * @param word
 * @returns {*}
 */
export function encrypt(word){
	var key = CryptoJS.enc.Utf8.parse("aaa");
	var srcs = CryptoJS.enc.Utf8.parse(word);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return encrypted.toString();
}
/**
 * 解密 --api
 * @param word
 * @returns {*}
 */
export function decrypt(word){
	var key = CryptoJS.enc.Utf8.parse("bbb");
	var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
/**
 * 跳转 --api
 * @param word
 * @returns {*}
 */
export function navigateTo(url,param){//string  string-obj or null
	// console.log(url)
	// console.log(param)
	if(param===null){
		uni.navigateTo({
			url: url
		})
	}else if(param!=null){
		uni.navigateTo({
			url: url+ "?action="+param
		})
	}
}
/**
 * 判断系统类型 --api
 * @param null
 * @returns android or ios  pc
 */
export function systemall(){
	var ios = 'ios';
	var android = 'android';
	var pc = 'pc';
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
	   //这个是安卓操作系统
	   return android;
	}
	if (isIOS) {
	　　//这个是ios操作系统
		return ios;
	}
	if (isIOS==false&&isAndroid==false) {
	　　//这个是pc操作系统
		return pc;
	}
}
/**
 * 判断系统类型 --api
 * @param null
 * @returns android or ios
 */
export function system(){
	var ios = 'ios';
	var android = 'android';
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
	   //这个是安卓操作系统
	   return android;
	}
	if (isIOS) {
	　　//这个是ios操作系统
		return ios;
	}
}
/**
 * 判断系统类型 --api  0--ios 1--android
 * @param null
 * @returns android or ios
 */
export function productType(){
	var ios = 'ios';
	var android = 'android';
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
	   //这个是安卓操作系统
	   return 1;
	}
	if (isIOS) {
	　　//这个是ios操作系统
		return 0;
	}
}
/**
 * 判断设备号 --api
 * @param word
 * @returns {*}
 */
export function systemId(){
	var canvas = document.createElement('canvas'),
	gl = canvas.getContext('experimental-webgl'),
	debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
	//console.log(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
	return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

 /**
  * 二进制流传输 --api
  * @param base64
  * @returns [*]
  */
 export function sendData(type,url,array){
	var xhr = new XMLHttpRequest;
	xhr.open(type,url, false);
	xhr.send(array);
	return xhr.responseText;//or response
 }
 
  /**
  * 国籍通用邮箱正则
  * @param string
  * @returns [true?false]
  */
 export function regMail(str){
	 var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
	 var test =reg.test(str);
	 // console.log(test);
	 if(test){
		 return true;
	 }else{
		 return false;
	 }
 }
