// 注册页
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
                            <input type="text" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="text" class="form-control" v-model="confirmPassword">
                        </div>
                        <button class="btn btn-block btn-success" type="submit">注册</button>
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
    methods:{
        onSubmit(){

            if(this.isDisable === false){
                const formData = {
                    username : this.username,
                    password : this.password,
                }
                if(this.password === this.confirmPassword){
                    // axios.get('/user.json')
                    //      .then(res => {
                    //          let User = [];
                    //          for(let key in res.data){
                    //             if(res.data[key] === formData.username){
                    //                 console.log();
                    //             }else{
                    //             }
                    //          }     
                        //  })
                        this.isDisable = true;
                        this.axios.post('/user.json',formData)
                            .then(res=>{
                                alert('注册成功')
                                this.isDisable = false
                            })

                }else{
                    alert('两次密码不一致')
                }
            }
            
        }
    }
}
</script>