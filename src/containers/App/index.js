import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './style.css'

class App extends Component {
  constructor(){
    super(...arguments)
  }

  render() {
    return(
      <div className="app">
        hello world
      </div>
    )
  }
}

export default hot(module)(App)
