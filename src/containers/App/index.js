import './style.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'

// components & containers
import HeaderComponent from '../../components/Header/'
import FooterComponent from '../../components/Footer/'
import HomeContainer from '../Home/'
import AboutContainer from '../About/'

// actions
import {appActions} from '../../redux/app'

class AppContainer extends Component {


  render(){
    console.log(this.props)
    return(
      <div className="main">
        <HeaderComponent title="react" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
          </Switch>
        </div>
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user:state.user}
}

export default withRouter(connect(mapStateToProps)(hot(module)(AppContainer)))
