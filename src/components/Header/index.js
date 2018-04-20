import React, { Component } from "react"
import { Link } from 'react-router-dom'

import './style.css'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { username, hasLogin, logout, login } = this.props

    return(
      <div className="nav">
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blog/js'>js</Link>
        <Link to='/blog/css'>css</Link>
        { hasLogin
          ? <div>{username}<a href="#" onClick={logout}>LOGOUT</a></div>
          : <a onClick={login}>login</a>
        }

      </div>
    )
  }
}

export default HeaderComponent
