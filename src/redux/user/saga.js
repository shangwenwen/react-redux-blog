import { select, put, call } from 'redux-saga/effects'
import { getUser } from './selector'
import { requestUser, requestUserSuccess, requestUserFailure } from './action'
import { fetchUser } from '../api/index.js'

export function* requestUserSaga() {
  try {
    const user = yield select(getUser)
    const id = user.get('id')
    const json = yield put(fetchUser, id)
    
    yield put(requestUserSuccess(json))
  } catch(error) {
    yield put(requestUserFailure(error))
  }
}
