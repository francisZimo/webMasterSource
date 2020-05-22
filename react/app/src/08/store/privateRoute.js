import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const PrivateRoute = (props)=>{
  console.log('=====进来')
  const {path,component:Component,exact=true,isLogin}=props;
  console.log('===11')
  // if(isLogin){
  //   return (
  //     <Route path={path} exact={exact}>
  //       <Component />
  //     </Route>
  //   )
  // }
  console.log('===22')
  return <Redirect
    to={{
      pathname:'login',
      state:{
        redirect:path
      }
    }}
  />
}
const mapStateToProps=(state)=>{
  console.log(state,'store里面的state')
  return {
    state:state.isLogin
  }
}
export default connect(mapStateToProps)(PrivateRoute)