import React, { Component } from 'react'

const themeContext=React.createContext('red')

const higherOrderComponent=(Cmp)=>{
  return (props)=>{
    return (
      <themeContext.Consumer>
        {
          (ctx)=>(
            <div style={{border:'1px solid red',height:'20px'}}>
              <Cmp {...props} style={{color:`${ctx}`}}>
              </Cmp>
            </div>
          )
        }
      </themeContext.Consumer>
    )
  }
}

const HandleConsumer=higherOrderComponent(BtnCmp)

class BtnCmp extends React.Component{
  render () {
    return(
      <button>{this.props.con}</button>
    )
  }
}
// function BtnCmp(props){
//   return <button>{props.con}</button>
// }
// BtnCmp.contextType=themeContext

class Index extends Component{
  render () {
    return (
      <div>
        context
        {
          <HandleConsumer con={'我是按钮名字'}></HandleConsumer>
        }
      </div>
    )
  }
}

export default Index