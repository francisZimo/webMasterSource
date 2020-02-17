import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { getStorage } from '../utils/filter'

 import FormPage from '../../src/03/CustForm/FormPage'

const PrivateRoute = ({ component:Component,location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props=><Component {...props} />}
    />
  )
}

export default PrivateRoute
