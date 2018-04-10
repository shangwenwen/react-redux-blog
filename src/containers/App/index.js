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

// actions
import { appActions } from '../../redux/app'

class AppContainer extends Component {

  genNonDuplicateID() {
    let idStr = Date.now()
      .toString(36)
    idStr += Math.random()
      .toString(36)
      .substr(3)
    return idStr
  }

  componentDidMount() {
    const data = fetch('http://localhost:3000/api/user/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": this.genNonDuplicateID(),
          "username": "小明",
          "password": "ss"
        })
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log('parsed json: ', json)
      })
      .catch(function (ex) {
        console.log('parsing failed: ', ex)
      })
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(hot(module)(AppContainer)))
