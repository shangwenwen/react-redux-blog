import React, { Component } from "react"
import { Link } from 'react-router-dom'
import JwModal from 'jw-react-modal'

import './style.css'

// const customStyles = {
//     body: {
//         backgroundColor: 'red',
//         fontSize: 100
//     },
//     background: {
//         backgroundColor: 'green',
//     }
// };

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogout() {
    const { logout } = this.props
    localStorage.removeItem('user')
    logout()
  }

  handleLogin(e) {
    JwModal.open('jw-modal-1')(e)
  }



  render() {
    const hasLogin = localStorage.getItem('user')
    const { username } = this.props

    const dialog = (
      <JwModal id="jw-modal-1">
        <p>
            Add any html you like in here :)
        </p>
        <button onClick={JwModal.close('jw-modal-1')}>Close</button>
      </JwModal>
    )

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

        {dialog}

      </div>
    )
  }
}

export default HeaderComponent
