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
  onMaskClick = e => {
    this.props.onClose(e);
  }

  render() {
    const { children, visible, mask } = this.props
    console.log(this.props)
    return(
      <div>
        {visible && mask && (<p onClick={this.onMaskClick} className={`dialog-r-backdrop`} />)}
        <div>
        ssss
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
