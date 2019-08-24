//后台页面
<template>
    <!-- <h1>Admin</h1> -->
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- newPizza -->
            <newPizza></newPizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 菜单 -->
            <h3 class="text-muted my-3">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in pizzaData" :key="item.name">
                        <td>{{item.name}}</td>
                        <td><button class="btn btn-outline-danger btn-sm" @click="deletePizza(item.key)">&times;</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
import newPizza from './newPizza'
export default {
    data(){
        return {
            isDisable:false
        }
    },
    components:{
        newPizza
    },
    computed:{
        pizzaData:{
            get(){
                // return this.$store.state.menuItems
                return this.$store.getters.getMenuItems
            },
            set(){}
        },

    },
    created(){
        //从store中获取数据并添加key
        // console.log(this.pizzaData);
        this.axios.get('/menu.json')
             .then(res => {
                // console.log(res.data);
                let menuArray=[]
                for(let index in res.data){
                    res.data[index].key = index
                    menuArray.push(res.data[index])
                } 
                //数据同步
                this.$store.commit('setMenuItems',menuArray)
             })
    },
    methods:{
        deletePizza(key){
            if(this.isDisable === false){
                this.isDisable = true;
                // console.log(this.isDisable)
                this.axios({
                    method:'delete',
                    url:'/menu/' + key + '.json',
                    data:{
                        'key':key
                    }
                }).then((res)=>{
                    // console.log(res)
                    this.$store.commit('removeMenuItems',key)
                    this.isDisable = false
                })
            }
        }
        
    }

}
</script>