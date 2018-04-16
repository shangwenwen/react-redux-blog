import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

import { userActions } from '../../redux/user'

class LoginContainer extends Component {
  constructor() {
    super(...arguments)

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }

  handleChange(e){
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e){
    e.preventDefault()

    const { login } = this.props

    this.setState({ submitted: true })
    const { username, password } = this.state
    if (username && password) {
        login(username, password)
    }
  }

  render() {
    const { username, password } = this.state

    const { location: {state}, history: {goBack}} = this.props
    const {from} = state || {from: {pathname: '/'}}

    if(localStorage.getItem('user')) {
      return <Redirect to={from}/>
    } else {
      return(
        <div>
          <form name="form" onSubmit={this.handleSubmit.bind(this)}>
            <div><input value={username} name="username" onChange={this.handleChange.bind(this)} type="text" /></div>
            <div><input value={password} name="password" onChange={this.handleChange.bind(this)} type="password" /></div>
            <div><button className="submit">登录</button></div>
          </form>
        </div>
      )
    }


  }
}

// connect redux
export default connect(null, {login:userActions.login})(LoginContainer)
