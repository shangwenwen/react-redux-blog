import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from '../../helpers/portal'
import DialogEl from './DialogEl'

class Dialog extends Component {
  static propTypes = {
    prefix: PropTypes.string,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    closeBtn: PropTypes.bool,
    mask: PropTypes.bool,
    maskClosable: PropTypes.bool,
    footer: PropTypes.node,
  }

  static defaultProps = {
    prefix: 'zent',
    onClose() {},
    visible: false,
    className: '',
    style: {},
    title: '',
    closeBtn: true,
    mask: true,
    maskClosable: true,
    footer: null,
  }

  constructor() {
    super()
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    const { visible, children, onClose } = this.props

    if(visible) {
      return(
        <Portal onClose={this.onClose}>
          <DialogEl {...this.props} onClose={this.onClose}>
            {this.props.children}
          </DialogEl>
        </Portal>
      )
    } else {
      return null
    }
  }
}

export default Dialog
