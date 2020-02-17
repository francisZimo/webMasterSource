import React, { Component } from 'react'
import Modal from './Modal'
class ModalPage extends Component {
  state={
    isShow:false,
    isShow2:false
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
        <button onClick={this.toggle}>toggle</button>
        <Modal
          title="custom Modal"
          visible={this.state.isShow}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>自定义Modal</p>
          <p>自定义Modal</p>
        </Modal>
      </div>
    )
  }
}

export default ModalPage