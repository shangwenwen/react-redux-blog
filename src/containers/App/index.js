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
// import PrivateRoute from '../../components/PrivateRoute'
import HomeContainer from '../Home/'
import AboutContainer from '../About/'
import BlogContainer from '../Blog/'
import LoginContainer from '../Login/'

class AppContainer extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    // this.props.requestUser(1)
  }

  render() {
    const { user } = this.props

    const username = user.get('username')
    return(
      <div className="main">
        <HeaderComponent username={username} title="react title" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/blog/:tag" component={BlogContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>
        </div>
        <FooterComponent />
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
