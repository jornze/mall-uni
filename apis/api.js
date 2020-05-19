// #ifdef MP-WEIXIN
let baseURL="http://183.131.205.116:8090";
// #endif

//H5开发阶段跨域需要配置proxy  
// #ifdef H5 
let baseURL="";// /api
// #endif
const uniHttp=function(params){
	
let methodType=params.method=='undefiend'?"GET":params.method;
 params.header=params.header==undefined?{aid:"001"}:params.header;//001没有aid参数
let getInfoFromLoc=JSON.parse(localStorage.getItem('storage_web_app_userInfo'));
let userInfo=getInfoFromLoc==null?{account:"",token:""}:{account:getInfoFromLoc.id,token:getInfoFromLoc.token};
 return new Promise((resolve,reject)=>{
	 console.log(userInfo)
		uni.request({
		    url: `${baseURL}${params.path}`, 
		    data: {
				...params.data
			},
			method:methodType,//${params.method=='undefiend'?"GET":params.method}
		    header: {
				...userInfo,
				...params.header
		    },
			success:(result)=>{
				console.log(result) //{}获取默认地址
				//console.log(result)
				if(result.statusCode==200){
					console.log(result)
					if(result.data.code==200){// || !Object.keys(result.data.data).length || Object.keys(result.data.data).length
						if(result.data.data.errorCode==200 || result.data.data==true){
							resolve(result.data.data);
						}else{
							if(params.header.aid==109){//订单详情获取默认地址（orderdetails）
								resolve(result.data.data);
							}else if(params.header.aid==124){//124 金额对比
								console.log('不做错误提示')
							}else{
								uni.showToast({
									"title":result.data.data.errorMsg,
									"icon":"none",
									"duration":2200
								})
								reject(result);
							}	
							
						}
						
					}else{
						if(params.header.aid==124){
							console.log('不做错误提示')
						}else{
							uni.showToast({
								"title":result.data.message,//"异常状态码: "+result.data.code,
								"icon":"none",
								"duration":2200
							});
							reject(result);
						}
						
					}
					
				}else{
					//console.log('数据加载失败，请重试!');
					//reject(result);
					if(result.data.code==999){
						uni.showToast({
							"title":"登录过期,请重新登录",
							"icon":"none",
							"duration":2200,
							success: () => {
								uni.navigateTo({
									url:"/pages/login/login"
								})
							}
						})
					}else{
						uni.showToast({
							"title":"异常状态码: "+result.statusCode,
							"icon":"none",
							"duration":2200
						})
						reject(result);
					}
					
				}
			},
			fail:(err)=>{
				//console.log('数据加载失败，请重试!');
				uni.showToast({
					"title":"数据请求失败,请重试! ",
					"icon":"none",
					"duration":2200
				})
				reject(err);
			}
		})
	})
	
};
export {
	uniHttp,
};
