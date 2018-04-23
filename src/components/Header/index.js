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

  render() {
    const { username } = this.props

    const hasLogin = !!localStorage.getItem('user')

    return(
      <div className="nav">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog/js'>js</Link>
        <Link to='/blog/css'>css</Link>
        { hasLogin
          ? <div>{username}<a href="#">LOGOUT</a></div>
          : <Link to='/login'>css</Link>
        }

        <LoginComponent onClose={this.handleCloseLogin} visible={this.state.visible} />

      </div>
    )
  }
}

export default HeaderComponent
