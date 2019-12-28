const home = ()=>import('../components/home')
const demo =()=>import('../components/demo')
const demo01 =()=>import('../components/01/demo01/parent')
export const ROUTERS={
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/demo',
      component:demo
    },
    {
      path:'/demo/01',
      component:demo01
    }
  ]
}