import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Dialog from '../Dialog'

import './style.css'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  handleLogout() {
    const { logout } = this.props
    localStorage.removeItem('user')
    logout()
  }

  handleLogin(e) {
    this.setState({
      visible: true
    })
  }

  onClose() {
    this.setState({
      visible: false
    })
  }



  render() {
    const hasLogin = localStorage.getItem('user')
    const { username } = this.props

    return(
      <div className="nav">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog/js'>js</Link>
        <Link to='/blog/css'>css</Link>
        { hasLogin
          ? <div>{username}<a href="#" onClick={this.handleLogout}>LOGOUT</a></div>
          : <a onClick={this.handleLogin}>login</a>
        }

        <Dialog onClose={this.onClose} visible={this.state.visible}>
          <p>sss</p>
        </Dialog>

      </div>
    )
  }
}

export default HeaderComponent
