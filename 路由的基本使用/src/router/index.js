import Find from '@/views/FindMusic.vue'
import My from '@/views/MyMusic.vue'
import Friend from '@/views/Friend.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import NotFind from '@/views/NotFind.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'  //引包
Vue.use(VueRouter)  //注册使用

const router = new VueRouter({  //制定路由规则
  routes:[
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
    // {path:'/home',component:Home},
    // {path:'/search',component:Search}
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/search/:words?',component:Search},
    {path:'*',component:NotFind}
  ]
})

export default router
/*
声明式导航-跳转传参：
  1.查询参数传参：    适合传多个参数
    (1).语法格式：
      to="/path?参数名=值"  多个参数名可加&
    (2).对应页面组件接收传递过来的值：
      $route.query.参数名  
  2.动态路由传参：    传单个参数比较方便
    (1)配置动态路由：
      routes:[
        {
          path:'/search/:words',    可以匹配多个路径
          component:Search
        }
      ]
    (2).配置导航链接：
      to="/path/参数值"
    (3).接收传递过来的值：
      $route.params.参数名     
*/
/*
重定向：匹配path后，强制跳转path路径
*/
