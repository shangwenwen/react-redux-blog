import React, { Component } from 'react'

class AboutContainer extends Component {
  componentDidMount(){
    console.log(this.props.match)
  }

  render(){
    return(
      <div>about</div>
    )
  }
}

export default AboutContainer
