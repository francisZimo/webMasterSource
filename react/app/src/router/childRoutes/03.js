// import FormPage from '../../../src/03/CustForm/FormPage'
// import FormPage from '../../../src/03/CustForm/FormPage'
const FormPage = ()=>import('../../../src/03/CustForm/FormPage')
const AntdForm=()=>import('../../../src/03/antdForm/form')
const DemoForm=()=>import('../../../src/03/demo/FormPage')
const DialogPage=()=>import('../../../src/03/dialog/dialogPage')
const DemoDialogPage=()=>import('../../../src/03/dialogDemo/ModalPage')
const Routes=[
  {
    path:'/cForm',
    component: FormPage
  },
  {
    path:'/antdForm',
    component:AntdForm
  },
  {
    path:'/demoForm',
    component:DemoForm
  },
  {
    path:'/dialog',
    component:DialogPage
  },
  {
    path:'/demoDialog',
    component:DemoDialogPage
  }
]
export default Routes