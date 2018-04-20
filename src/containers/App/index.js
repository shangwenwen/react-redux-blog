// styles
import './style.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'

// actions
import { userActions } from '../../redux/user/'

// components & containers
import HeaderComponent from '../../components/Header/'
import FooterComponent from '../../components/Footer/'
import Dialog from '../../components/Dialog'
// import PrivateRoute from '../../components/PrivateRoute'
import HomeContainer from '../Home/'
import AboutContainer from '../About/'
import BlogContainer from '../Blog/'
import LoginContainer from '../Login/'

class AppContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      visible: false
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  componentWillMount(){
    // this.props.requestUser(1)
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
    const { user, logout, hasLogin } = this.props
    const username = user.get('username')
    return(
      <div className="main">
        <HeaderComponent hasLogin={hasLogin} login={this.handleLogin} logout={logout} username={username} title="react title" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/blog/:tag" component={BlogContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>
        </div>
        <FooterComponent />
        <Dialog onClose={this.onClose} visible={this.state.visible}>
          <p>sss</p>
        </Dialog>
      </div>
    )
  }
}

// connect redux
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout: userActions.logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(hot(module)(AppContainer)))
