const state ={
    //菜单数据
    menuItems:{},
}

const getters = {
    //获取菜单
    getMenuItems:state=>state.menuItems
}

const mutations = {
    //获取菜单
    setMenuItems(state,data){
        state.menuItems = data
    },
    //删除后同步菜单
    removeMenuItems(state,key){
        state.menuItems.forEach((item,index) => {
            if(item.key === key) {
                state.menuItems.splice(index,1)
            }
        });
    },
    //添加后同步菜单
    pushToMenuitems(state,data){
        state.menuItems.push(data)    
    },
}

const actions ={

}

export default{
    state,
    getters,
    mutations,
    actions
}