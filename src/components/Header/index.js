import React, { Component } from "react"
import { Link } from 'react-router-dom'

import LoginComponent from '../Login'

import './style.css'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }

    this.handleOpenLogin = this.handleOpenLogin.bind(this)
    this.handleCloseLogin = this.handleCloseLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleOpenLogin() {
    this.setState({
      visible: true
    })
  }

  handleCloseLogin() {
    this.setState({
      visible: false
    })
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    const { username } = this.props

    return(
      <div className="nav">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog/js'>js</Link>
        <Link to='/blog/css'>css</Link>
        { username
          ? <div>{username}<a onClick={this.handleLogout}>LOGOUT</a></div>
          : <Link to='/login'>login</Link>
        }

        <LoginComponent onClose={this.handleCloseLogin} visible={this.state.visible} />

      </div>
    )
  }
}

export default HeaderComponent
