import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:"/index"
    },
    {
      path:'/index',
      name:"index",
      component:Index
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path:"*",
      name:"404",
      component:NotFound
    },
    {
      path:'/Login',
      name:"Login",
      component:Login
    }
  ]
});

router.beforeEach((to,form,next)=>{
  const isLogin = localStorage.eleToken ? true : false;
  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
    isLogin ? next() : next("/login");
  }
})

export default router
