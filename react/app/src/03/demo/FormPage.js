import React, { Component } from 'react'
import FormCreate from './FormCreate'
import styles from './custom.module.scss'

class FormPage extends Component {

  handleSubmit=()=>{
    const {getFieldValue,getFieldsValue,validateFields}=this.props;
    console.log(getFieldValue('userName'),getFieldsValue(),'===log')  // admin {userName: "admin", password: "123456"} ===log
    validateFields((err,values)=>{
      if(err){
        console.log('验证失败',err)
      }else{
        console.log('验证成功',values)
      }
    })
  }

  render () {
    const {getFieldDecorator}=this.props;
    const userRules=[{require: true,msg:'请填写用户名'}]
    const passwordRules=[{require: true,msg:'请输入密码'}]
    return (
      <div>
        <h3>custom表单组件</h3>
        <div className={styles.formItem}>
          {
            getFieldDecorator('userName',{rules:userRules})(
              <input type="text" placeholder='请输入用户名'/>
            )
          }
        </div>
        <div className={styles.formItem}>
          {
            getFieldDecorator('password',{rules:passwordRules})(
              <input  type="password" placeholder='请输入密码' />
            )
          }
        </div>
        <button  className={styles.fButton} onClick={this.handleSubmit}>提交</button>
      </div>
    )
  }
}

export default FormCreate(FormPage)

