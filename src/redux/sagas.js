import { fork } from 'redux-saga/effects'
import { watchUserSaga } from './user/'

export default function* rootSaga() {
  yield [
    fork(watchUserSaga)
  ]
}
