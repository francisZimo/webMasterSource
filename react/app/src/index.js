import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AppPage from './08/store/AppPage'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
ReactDOM.render(<App />, document.getElementById('root'));
// import React from './05/customReact/FReact'
// import ReactDOM from './05/customReact/FReactDom'
function FunctionComponent(props){
  return <div className="border">我是：{props.name}</div>
}
// class ClassComponent extends React.Component{
//   constructor (props){
//     super(props)
//     this.props=props;
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     console.log('点击我',this.state.count)
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   render(){
//     return <div className='border'>
//       {this.props.name}
//       <button onClick={this.handleClick}> {this.state.count}</button>
//       {
//         [1,2,3].map(item=>{
//           return <FunctionComponent key={item} name={'Function组件'+item}></FunctionComponent>
//         })
//       }
//     </div>
//   }
// }
// const jsx=(
//   <div className="box">
//     <div className="border">
//       文本节点
//     </div>
//     <FunctionComponent name='function组件'></FunctionComponent>
//     <ClassComponent name='class组件'></ClassComponent>
//   </div>
// )
// ReactDOM.render(jsx,document.getElementById('rootDemo'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
