import React, { Component } from 'react'

const FormCreate=Cmp=> {
  return class extends Component {
    constructor (props){
      super(props)
      this.state={}
      this.options={}
    }
    setChange=(event)=>{
      console.log(event.target,'--==event')
      let value=event.target.value;
      let name=event.target.name;
      console.log(value)
      this.setState({
        [name]:value
      })
    }
    getFieldDecorator=(field,options)=>decorateCmp=>{
      this.options[field]=options;
      return React.cloneElement(decorateCmp,{
        name:field,
        value:this.state[field]||"",
        onChange:this.setChange
      })
    }

    getFieldValue=()=>{
      return this.state
    }

    getFieldsValue=(field)=>{
      return this.state[field]
    }


    validateFields=callback=>{
      const state={...this.state}
      const errors=[]
     for(let key in this.options){
       if(state[key]===undefined){
         errors.push({[key]:'errors'})
       }
     }
     if(errors.length>0){
       callback(errors,state)
     }else{
       callback(undefined,state)
     }
    }
    render () {
      return(
        <Cmp
          getFieldDecorator={this.getFieldDecorator}
          getFieldValue={this.getFieldValue}
          getFieldsValue={this.getFieldsValue}
          validateFields={this.validateFields}
        />
      )
    }
  }
}
export default FormCreate