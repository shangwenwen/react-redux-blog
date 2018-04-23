import React, { Component } from 'react'
import Dialog from '../Dialog'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { visible, onClose } = this.props

    return(
      <Dialog onClose={onClose} visible={visible}>
        <p>sss</p>
      </Dialog>
    )
  }
}

export default LoginComponent
