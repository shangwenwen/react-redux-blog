import React from "react"
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return(
    <div><Link to='/'>home</Link><Link to='/about'>about</Link></div>
  )
}

export default HeaderComponent
