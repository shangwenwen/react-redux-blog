import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { fromJS } from 'immutable'
import configureStore from './redux/store'
import { history } from './helpers/history'

// components & containers
import AppContainer from './containers/App/'

// fake backend
import { configureFakeBackend } from './helpers/fake-backend'
configureFakeBackend()

let localMe = localStorage.getItem('user')

localMe && (localMe = JSON.parse(localMe))

const store = configureStore(
  localMe ? { user: fromJS(localMe) } : undefined
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
)
