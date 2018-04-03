import React, { Component } from "react"
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.title)
  }

  render(){
    return(
      <div>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
      </div>
    )
  }
}

export default HeaderComponent
