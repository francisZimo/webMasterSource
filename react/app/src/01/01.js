import React, { Component } from 'react'


export class Demo01 extends Component {
  state = {
    counter: 0
  }
  componentDidMount () {
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 2 })
    // this.setState(nextState=>({
    //   counter: nextState.counter+1
    // }))
    // this.setState(nextState=>({
    //   counter: nextState.counter+2
    // }))
    setTimeout(()=>{
      this.changeValue()
      this.changeAge()
      console.log(this.state.counter)
    } ,0)
  }

  changeAge(){
    console.log(this.state.counter)
  }

  changeValue=()=>{
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ counter: this.state.counter + 8 })
  }

  render () {
    const {counter} = this.state
    return (
      <div>{counter}</div>
    )
  }
}



export default Demo01;
