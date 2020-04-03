const state={
	"sku":"sku1",
	"id":"6666"
}
const getters={
	cons1(state){
		return parseInt(state.id)+4
	}
}
const mutations={
	mut1(state,data){
		if(data==1){
			console.log('mutations')
		}else if(data==2){
			console.log('actions')
		}
		
	}
		
}
const actions={
	act1(context,data){
		context.commit('mut1',data)
	}
}
export default{
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
}