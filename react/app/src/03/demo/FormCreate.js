import React, { Component } from 'react'

const FormCreate=Cmp=>{
  return class extends Component{
    constructor (props){
      super(props)
      this.state={} // 做表单数据统一管理
      this.options={}
    }

    validateFields=(callback)=>{
      const state={...this.state}
      const errors=[] //存储错误信息
      const options =this.options
      for(let key in options){
        const {rules}=options[key]
        if(rules){
          rules.forEach(item=>{
            if(item.require===true){
              if(!state[key]){
                errors.push({[key]:item.msg})
              }
            }
          })
        }
      }
      if(errors.length>0){
        callback(errors,state) //存在错误，则返回错误信息
      }else{
        callback(undefined,state)
      }
    }

    getFieldValue=(field)=>{
      return this.state[field]
    }

    getFieldsValue=()=>{
      return this.state;
    }


    inputChange=(event)=>{
      let value=event.target.value;
      let name=event.target.name;
      this.setState({
        [name]:value   // 将输入的字段名称对应的值接管过来，方便其他地方使用
      })
    }

    getFieldDecorator=(field,options)=>{
      this.options[field]=options // 记录属性对应的options配置信息
      return InputCmp=>{
        return React.cloneElement( // 封装组件的时候不建议在原来的组件上做操作，此处用cloneElement来创建一个新组件替换原来的组件
          InputCmp,{
            name:field, // 动态属性可以是任意名字,此处目的是在change事件中可以通过e.target.name获取传入的field名称。 例如：替换名字为flag，渲染出的元素为 <input flag='userName' value='admin'>
            value:this.state[field]||"", // 默认值给个空值
            onChange:this.inputChange
          }
        )
      }
    }

    render () {
      return (
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