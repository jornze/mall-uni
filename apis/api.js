// #ifdef MP-WEIXIN
let baseURL="http://183.131.205.116:8090";
// #endif

//H5跨域需要配置proxy  
// #ifdef H5 
let baseURL="/api";
// #endif

const uniHttp=function(params){
 return new Promise((resolve,reject)=>{
		uni.request({
		    url: `${baseURL}${params.path}`, 
		    data: {
				...params.data
			},
			method:`${params.method=='undefiend'?"GET":params.method}`,
		    header: {
				...params.header
		    },
			success:(result)=>{
				if(result.statusCode==200){
					if(result.data.code==200){
						resolve(result);
					}else{
						uni.showToast({
							"title":"异常状态码: "+result.data.code,
							"icon":"none",
							"duration":2200
						})
					}
					
				}else{
					//console.log('数据加载失败，请重试!');
					//reject(result);
					uni.showToast({
						"title":"异常状态码: "+result.statusCode,
						"icon":"none",
						"duration":2200
					})
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
