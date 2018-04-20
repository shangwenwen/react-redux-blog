import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutContainer extends Component {
  componentDidMount(){
    //
  }

  render(){
    console.log(this.props)
    return(
      <div>about.... <Link to='/'>home</Link></div>
    )
  }
}

export default AboutContainer
