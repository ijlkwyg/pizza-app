//newPizza组件
<template>
    <form>
        <h3 class="text-muted my-3">添加新菜品</h3>
        <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea class="form-control" rows="5" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button @click.prevent="addMenuItems" class="btn btn-success btn-block" >添加</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{ 
            newPizza:{},
            isDisable:false
        }
    },
    methods:{
        addMenuItems(){
            let pizzaData ={
                    name:this.newPizza.name,
                    description:this.newPizza.description,
                    options:[{
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },{
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }]
                }
            if(this.isDisable === false){
                    this.isDisable = true
                    this.axios.post('/menu.json',pizzaData)
                        .then(res => {
                            // this.$router.push({name:"menuLink"})
                            this.$store.commit('pushToMenuitems',pizzaData)
                            this.isDisable = false;
                        })
                 }
        }
    }
}
</script>