
const AppPage=()=>import('../../../src/08/store/AppPage')
const Home=()=>import('../../../src/08/store/Home')

const Routes=[
  {
    path:'/store',
    component: AppPage,
    exact:false
  },
  // {
  //   path:'/store/home',
  //   component: Home
  // }

]
export default Routes