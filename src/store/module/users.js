const state ={
    //用户名
    userName:null,
    //登录状态监测
    isLogin:false
}

const getters = {
    //获取用户名
    getUserName:state=>state.userName,

    //获取登录状态
    getIsLogin:state=>state.isLogin
}

const mutations = {
    //登录后设置用户名
    setUser(state,user){
    state.userName = user
    if(state.userName){
        state.isLogin = true
    }else{
        state.isLogin = false
    }

}
}

const actions ={
    //应用mutations
    setUserName({commit},user){
        commit('setUser',user)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}