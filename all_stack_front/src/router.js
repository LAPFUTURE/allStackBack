import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from  './views/Home.vue'
import InfoShow from './views/InfoShow.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import FoodSelector from './views/FoodSelector.vue'
import FundList from './views/FundList.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:"/login"
    },
    {
      path:'/index',
      name:"index",
      component:Index,
      children:[
        {
          path:'/',
          component:Home
        },{
          path:'/home',
          name:'home',
          component:Home
        },{
          path:'/infoshow',
          name:'infoshow',
          component:InfoShow
        },{
          path:'/fundlist',
          name:"FundList",
          component:FundList
        },{
          path:'/foodselector',
          name:"FoodSelector",
          component:FoodSelector
        }
      ]
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
