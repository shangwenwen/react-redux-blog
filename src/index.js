import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { fromJS } from 'immutable'
import configureStore from './redux/store'
import createHistory from 'history/createBrowserHistory'

// components & containers
import AppContainer from './containers/App/'

const history = createHistory()

let localMe = localStorage.getItem('username')

// localMe && (localMe = JSON.parse(localMe))

const store = configureStore(
  localMe ? { auth: fromJS(localMe) } : undefined
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
)
