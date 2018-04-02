import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers.js'

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export default configureStore()
