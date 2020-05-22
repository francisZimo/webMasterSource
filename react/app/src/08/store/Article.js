import React, { Component } from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
function Article1(){
  return <div>我是文章一</div>
}
function Article2(){
  return <div>我是文章二</div>
}
class Article extends Component {
  render () {
    return (
      <div>
        Article页面
        <ul>
          <Link to={'/store/article/1'}>文章一</Link>
          <Link to={'/store/article/2'}>文章二</Link>
        </ul>
        <hr/>
        <Switch>
          <Route path={'/store/article/1'} >
            <Article1></Article1>
          </Route>
          <Route path={'/store/article/2'} >
            <Article2></Article2>
          </Route>
        </Switch>
      </div>

    )
  }
}

export default Article