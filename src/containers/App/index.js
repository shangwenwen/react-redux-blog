import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

// components & containers
import HeaderComponent from '../../components/Header/'
import FooterComponent from '../../components/Footer/'
import HomeContainer from '../Home/'
import AboutContainer from '../About/'

import './style.css'

class AppContainer extends Component {
  render(){
    return(
      <div className="main">
        <HeaderComponent />
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

export default hot(module)(AppContainer)
