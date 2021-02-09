import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/register',
    // name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path:'/login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'/userinfo',
    component:()=>import('../views/userInfo.vue'),
    meta:{
      istoken:true
    }
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局路由守卫，页面跳转前验证登录状态
// 并不是所有页面都需要token验证登录，可以设置meta方法

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('token')&&!localStorage.getItem('id')&&to.meta.istoken==true){
    router.push('/login')
  }else{
    next()
  }
})
export default router
