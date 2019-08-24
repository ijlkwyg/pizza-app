// 登录页
<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../assets/icon.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="username">帐号</label>
                            <input type="text" class="form-control" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button class="btn btn-block btn-success" type="submit">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            confirmPassword:'',
            isDisable:false
        }
    },
    //设置导航守卫，进入页面之前清空登录及用户帐号信息
    beforeRouteEnter (to, from, next) {
        // ...
        next(vm=>vm.$store.dispatch('setUserName',null))
    },
    methods:{
        onSubmit(){
            // console.log(111);
            if(this.isDisable === false){
                this.isDisable = true
            this.axios.get('/user.json')
                 .then((res) => {
                    //  for(let index in res.data){
                    //     //  console.log(res.data[index]);
                    //     if(res.data[index].username === this.username && res.data[index].password === this.password){
                    //         alert("登录成功")
                    //         this.$router.push('homeLink')
                    //     }else{
                    //         alert('帐号/密码错误')
                    //     }
                    //  }
                    const data = res.data;
                    const users =[];
                    for(let index in data){
                        let user = data[index]
                        users.push(user)
                    }
                    let result = users.filter((item) => {
                        return (item.username === this.username && item.password === this.password)
                    })
                    // console.log(result);
                    if(result != null && result.length>0){
                        alert('登陆成功');
                        this.$router.push({name:'homeLink'})
                        this.$store.dispatch("setUserName",this.username)
                    }else{
                        alert('帐号/密码错误')
                        this.$store.dispatch("setUserName",null)
                    }
                    this.isDisable = false;
                 })}
        }
    }
}
</script>