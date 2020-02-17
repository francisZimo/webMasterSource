import React, { Component } from 'react'
import {Modal,Button} from 'antd'
class DialogPage extends Component {
  state={
    isShow:false,
  }
  toggle=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
  handleOk=()=>{
    this.setState({
      isShow:false
    })
  }
  handleCancel=()=>{
    this.setState({
      isShow:false
    })
  }

  render () {
    return (
      <div>
        <Button type={'primary'} onClick={this.toggle}>toggle</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.isShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default DialogPage