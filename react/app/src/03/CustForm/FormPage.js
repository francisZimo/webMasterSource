import React, { Component } from 'react'
import FormCreate from './component/FormCreate'
import styles from './custom.module.scss'

const nameRules={
  require:true,
  msg:'请填写用户名'
}
const passwordRules={
  require:true,
  msg:'请填写密码'
}

class FormPage extends Component {
  handleSubmit=()=>{
    const {getFieldsValue,getFieldValue,validateFields}=this.props;
    validateFields((err,values)=>{
      if(err){
        console.log('失败',values)
      }else{
        console.log('成功',values)
      }
    })
    // console.log(getFieldValue(),getFieldsValue('user'))
  }

  render () {
    const {getFieldDecorator} = this.props;

    return (
      <div>
        <h3>custom表单组件</h3>
        <div className={styles.formItem}>
          <label htmlFor="user" className={styles.fLabel}>
            用户名：
          </label>
          {
            getFieldDecorator('user',{rules:nameRules})(<input   type="text"/>)
          }
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password" className={styles.fLabel}>
            密码：
          </label>
          {
            getFieldDecorator('password',{rules:passwordRules})( <input  type="password"/>)
          }

        </div>

        <button onClick={this.handleSubmit} className={styles.fButton}>提交</button>
      </div>
    )
  }
}

// export default FormCreate()
// export default FormPage
//
export default FormCreate(FormPage)

