import { takeEvery, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import { userService } from './service'
import { userActions } from './action'

import { history } from '../../helpers/history'

function* userSaga(action) {
  try {
    const payload = yield call(userService.login, action.username, action.password)
    console.log(payload)

    if(payload.username) {
      localStorage.setItem('user', JSON.stringify(payload))
      history.push('/')
      yield put(userActions.loginSuccess(payload))
    }
  } catch(error) {
    yield put(userActions.loginFailure({
      'errorText': error
    }))
  } finally {
    console.log('finally')
  }
}

export function* watchUserSaga() {
  yield * takeEvery(userActions.LOGIN_REQUEST, userSaga)
}
