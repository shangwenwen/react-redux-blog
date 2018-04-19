import React, { Component } from 'react'

class DialogInnerEl extends Component {
  render() {
    const { children } = this.props

    return(
      <div>
        <div>{children}</div>
      </div>
    )
  }
}

class DialogElWrapper extends Component {
  render() {
    const { children } = this.props

    return(
      <div>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

class DialogEl extends Component {
  render() {
    return(
      <DialogElWrapper {...this.props}>
        <DialogInnerEl {...this.props} />
      </DialogElWrapper>
    )
  }
}

export default DialogEl
