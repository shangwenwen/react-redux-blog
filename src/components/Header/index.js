import React, { Component } from "react"
import { Link } from 'react-router-dom'

const HeaderComponent = ({ user }) => {
  return(
    <div>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <div>{user}</div>
      </div>
  )
}

export default HeaderComponent
