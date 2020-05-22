import React, { Component } from 'react'
import Home from './Home'

import Article from './Article'
import Login from './Login'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import PrivateRoute from './privateRoute'

// const Home = ()=>import('./Home')
class AppPage extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter >
            <Link to={'/store/home'}>Home</Link>
            <Link to={'/store/article'}>Article</Link>
            <Link to={'/store/login'}>Login</Link>
            <Link to={'/store/login/1'}>Login1</Link>

            <Switch>
              {/*<PrivateRoute component={Home} path='/store/home'></PrivateRoute>*/}
              <Route path='/store/home' component={Home} exact></Route>
              <PrivateRoute component={Article} path={'/store/article'}></PrivateRoute>
              {/*<Route path={'/store/article'}  ><Article></Article></Route>*/}
              <Route path={'/store/login'} exact ><Login></Login></Route>
              <Route path={'/store/login/1'} render={()=><div>我是login1</div>}></Route>
            </Switch>


          </BrowserRouter>
        </Provider>


      </div>
    )
  }
}

export default AppPage