import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  componentDidMount(){
    // console.log(this.props.match)
  }

  render(){
    return(
      <div>
      home
      </div>
    )
  }
}

export default connect(null, null)(HomeContainer)
