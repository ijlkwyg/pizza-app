//主页
<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎品尝！</h1>
                <h2>这里有你非常喜欢的</h2>
                <button class="btn btn-success" @click='gotuMenu'>Jump</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        gotuMenu(){
            //通过方法实现路由跳转
            //方法1：回到上一个路由
            // this.$router.go(-1)
            //方法2：跳转到指定路由
            // this.$router.replace('/menu')
            //方法3：跳转到指定名字的路由
            // this.$router.replace({name:'menuLink'})
            //方法4：最常用的 通过压栈  push来进行跳转
            // this.$router.push('/menu')
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>

<style>
    #home{
        background:url('../assets/pizza.jpg');
        height:85vh;
        padding:10%;
    }
    h1,h2{
        margin:6%
    }
    .background{
        background:#eee;
        opacity: 0.8;
        max-width:70vw;
        margin:0 auto;
        padding:20px 0;    
    }
</style>