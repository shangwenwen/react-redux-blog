import { takeEvery, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'

import * as loginActions from './action'

function* login(action) {
  try {
    yield delay(1000)
    const payload = yield call(postLoginToAPI, action.data)

    if(payload.data.errors){
        yield put(loginActions.loginFailed(payload.data.errors))
    }

    if(payload.data.user){
        yield put(loginActions.userLogin(payload.data.user))
    }

  } catch(e) {
    console.log("login error", e)
  }
}

const postLoginToAPI = data => {

    let bodyData = JSON.stringify({
        email: data.email,
        password: data.password
    })

    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    })

    return instance.post('http://localhost:3000/api/user', bodyData)

}

export function* watchLoginRequest() {
  yield * takeEvery(loginActions.LOGIN_REQUEST, login_process)
}
