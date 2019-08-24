import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import axios from 'axios'
import {store} from './store/store'
Vue.use(VueRouter)
//去掉警告提示
Vue.config.productionTip = false 

//配置默认根路径
axios.defaults.baseURL = 'https://pizza-app-d9833.firebaseio.com'
//配置vue原型
Vue.prototype.axios=axios
//配置路由
const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
