const ContextDemo =()=>import('../../../src/02/context')
const HocDemo = ()=>import('../../../src/02/HOC')

const Routes=[
  {
    path:'/context',
    component: ContextDemo
  } ,
  {
    path:'/hoc',
    component:HocDemo
  }
]
export default Routes