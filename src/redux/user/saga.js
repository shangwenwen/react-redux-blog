import { takeEvery, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import { userService } from '../../services/user'
import { userActions } from './action'

import { history } from '../../helpers/history'

function* userSaga(action) {
  try {
    const payload = yield call(userService.login, action.username, action.password)
    console.log(payload)
    if(payload.username) {
      history.push('/')
      yield put(userActions.requestUserSuccess(payload.username))

    }
  } catch(error) {
    console.log('', error)
    yield put(userActions.requestUserFailure({}))
  }
}

export function* watchUserSaga() {
  yield * takeEvery(userActions.LOGIN, userSaga)
}
