<template>
    <div class="card text-dark bg-light mb-3 mt-2">  
        <div class="card-header">关于我们</div>
        <div class="card-body">
            <h4 class="card-title">关于我们</h4>
            <p class="card-text">22222</p>

            <router-link :to="{name:'phoneLink'}">联系电话</router-link>
            <router-link :to="{name:'personNameLink'}">联系人</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>