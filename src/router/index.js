import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    //配置页面的路由路径
    {
      //重定向路由配置
      path:'/',
      component:()=>import('../pages/recommend/index')
    },
    {
      path:'/hot',
      component:()=>import('../pages/hot/index')
    },
    {
      path:'/recommend',
      component:()=>import('../pages/recommend/index')
    },
    {
      path:'/search',
      component:()=>import('../pages/search/index')
    }
  ]
})

export  default  router
