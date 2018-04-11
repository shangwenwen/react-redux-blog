import React, { Component } from 'react'
import { connect } from 'react-redux'
// actions
import { requestUser, requestUserSuccess, requestUserFailure } from '../../redux/user/action'

class HomeContainer extends Component {
  componentWillMount(){
    this.props.requestUser(2)
  }

  render(){
    return(
      <div>
        home
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  {
    user: state => state.user
  }, {requestUser,requestUserSuccess,requestUserFailure})(HomeContainer)
