import React, { Component } from 'react'

class DialogInnerEl extends Component {
  render() {
    const { children } = this.props
    // console.log(this.props)
    return(
      <div>
        <div>{children}</div>
      </div>
    )
  }
}

class DialogElWrapper extends Component {
  onMaskClick = e => {
    this.props.onClose(e);
  }

  render() {
    const { children, visible, mask } = this.props
    // console.log(this.props)
    return(
      <div>
        {visible && mask && (<p className={`dialog-r-backdrop`} />)}
        <div onClick={this.onMaskClick}>
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
        <DialogInnerEl data='data' {...this.props} />
      </DialogElWrapper>
    )
  }
}

export default DialogEl
