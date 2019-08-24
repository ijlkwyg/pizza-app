// 菜单
<template>
    <div class="row">
        <!-- //菜单模块 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenu" :key="item.pirce">
                    <tr >
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button class="btn btn-sm btn-outline-success" @click="addToCart(item,option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- //购物车 -->
        <div class="col-md-4 col-sm-12" >
            <div v-if="shoppingCart.length>0">
                <table class="table">
                <thead class="table-default">
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody v-for="item in shoppingCart" :key="item.key">
                    <tr>
                        <td>
                            <button class="btn btn-light" @click="decreaseSum(item)">-</button>
                            <span>{{item.sum}}</span>
                            <button class="btn btn-light" @click="increaseSum(item)">+</button>

                        </td>
                         <td>{{item.name + item.size + "寸"}}</td>
                        <td>{{item.price*item.sum + "元"}}</td>
                    </tr>
                </tbody>
            </table>
            <span>总价:{{total + "元"}}</span>
            <button class="btn btn-success btn-block">提交订单</button>
            </div>
            <div v-else>
                {{shoppingCartNull}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            shoppingCartNull:"购物车没有商品",
            // 购物车信息
            shoppingCart:[],

        }
    },
    computed:{
        //合计
        total(){
            let sum = 0 ;
            for(let index in this.shoppingCart){
                let individualItem = this.shoppingCart[index]
                sum +=individualItem.sum * individualItem.price
            }
            return sum;
        },
        //菜单
        getMenu(){
            return this.$store.state.menuItems
        }
    },
    methods:{
        //添加购物车
        addToCart(item,option){
            let dataCart = {
                name:item.name,
                size:option.size,
                price:option.price,
                sum:1
            };
            //条件过滤 ，当点击菜单内的添加，若购物车内已有商品，则直接sum++
            let result = this.shoppingCart.filter((Cart)=>{
                return (Cart.name === dataCart.name && Cart.price === dataCart.price)
            })
            if(result.length >0){
                result[0].sum ++;
            }else{
                this.shoppingCart.push(dataCart)
            }
        },
        //购物车数量++
        increaseSum(item){
            item.sum++;
        },
        //购物车数量--
        decreaseSum(item){
            item.sum--;
            
            if(item.sum <= 0 ){
                this.deleteShoppingCart(item)
            } 
        },
        //删除购物车内物品
        deleteShoppingCart(item){
            this.shoppingCart.splice(this.shoppingCart.indexOf(item),1)
        }
    },
    created(){
        this.axios.get('/menu.json')
             .then(res=>{
                 this.$store.commit("setMenuItems",res.data)
             })
    }
}
</script>

<style>
</style>