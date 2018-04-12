import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers.js'
import rootSaga from './sagas'

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
