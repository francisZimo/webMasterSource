const path=require('path')
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {add} from './utils'
import './babel1'
import './bg.css'
import "./app.less"
import _ from 'lodash'
import imgSrc from "./img/cat.jpeg"
console.log('xxx11111')
// let img=new Image()
// img.src=imgSrc
// let root=document.getElementById('root')
//   root.appendChild(img)
add(1,2)
console.log(_.join(['a','b','c','****']))
axios.get('/api/info').then((resolve,reject)=>{
  console.log(resolve,'==接口请求1')
})

 // ReactDOM.render(<h1>hello world</h1>,document.getElementById('app'))
// class App extends Component{
//   render () {
//     return <div>hello</div>
//   }
// }
// ReactDOM.render(
//   <App></App>,
//   document.getElementById('root')
// )