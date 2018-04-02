import {createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers.js'

const history = createHistory()

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
