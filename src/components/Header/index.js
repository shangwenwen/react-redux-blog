import React, { Component } from "react"
import { Link } from 'react-router-dom'

import './style.css'

const HeaderComponent = () => {
  return(
    <div className="nav">
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/blog/js'>js</Link>
      <Link to='/blog/css'>css</Link>
      <Link to='/login'>login</Link>
    </div>
  )
}

export default HeaderComponent
