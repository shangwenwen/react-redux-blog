import { fork } from 'redux-saga/effects'
import { watchLoginRequest } from './user/saga'

export default function* rootSaga() {
  yield [
    fork(watchLoginRequest)
  ]
}
