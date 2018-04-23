import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from '../../helpers/history'

import LoginComponent from '../../components/Login'

class AboutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }

    this.handleOpenLogin = this.handleOpenLogin.bind(this)
    this.handleCollection = this.handleCollection.bind(this)
  }

  handleOpenLogin() {
    this.setState({
      visible: true
    })
  }

  handleCollection() {
    const { user } = this.props

    const hasLogin = !!user.get('token')

    if(hasLogin) {
      history.push('/')
    }

    this.setState({
      visible: false
    })
  }

  render(){


    return(
      <div>
        <div>about....</div>
        <a onClick={this.handleCollection}>collection</a>

        <LoginComponent onClose={this.handleCloseLogin} visible={this.state.visible} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(AboutContainer)
