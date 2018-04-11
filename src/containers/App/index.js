// styles
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

class AppContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
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

export default withRouter(connect(null, null)(hot(module)(AppContainer)))
