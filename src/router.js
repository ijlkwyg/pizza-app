
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

//导出routes
export const routes = [
    {path:'/',name:'homeLink',components:{
      default:Home,
      'orderingGuide' :OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',component:Admin},
    {path:'/about',redirect:'/history',component:About,children:[
      {path:'/contact',name:'contactLink',component:Contact,redirect:'/phone',children:[
        {path:'/phone',name:'phoneLink',component:Phone},
        {path:'/personName',name:'personNameLink',component:PersonName}
      ]},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
    ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    //当上面所有都匹配不上，则跳转至主页，防止用户路径错误,redirect:默认跳转
    {path:'*',redirect:'/'}
  ]
  