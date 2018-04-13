import { takeEvery, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import * as API from '../../utils/api'
import { userActions } from './action'

function* userSaga(action) {
  try {
    const payload = yield call(API.fetchUser, action.id)

    if(payload.data.username) {
      // localStorage.removeItem('username')
      yield put(userActions.requestUserSuccess(payload.data.username))
    }
  } catch(error) {
    console.log('', error)
    yield put(userActions.requestUserFailure({
      'status': error.response.status,
      'statusText': error.response.statusText
    }))
  }
}

export function* watchUserSaga() {
  yield * takeEvery(userActions.REQUEST_USER, userSaga)
}
