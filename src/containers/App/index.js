import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="app">
        hello worldss
      </div>
    )
  }
}

export default hot(module)(App)
