import { fork } from 'redux-saga/effects'
import { userSagas } from './user/'

export default function* rootSaga() {
  yield [
    fork(userSagas)
  ]
}
