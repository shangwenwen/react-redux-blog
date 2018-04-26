import { isCancelError } from 'redux-saga'
import { race, take, put, call, fork, cancel } from 'redux-saga/effects'

import { userService } from './service'
import { userActions } from './action'

import { history } from '../../helpers/history'

function* login(username, password) {
    try {
      const user = yield call(userService.login, username, password)
      yield put(userActions.loginSuccess(user))
      return user
    } catch (error) {
      yield put(userActions.loginFailure(error))
    }
}

function* logout() {
  while (userActions.LOGOUT) {
    try {
      yield call(userService.logout)
    } catch (error) {
      console.log(error)
    }
  }
}

export function* watchUserSaga() {
  while(true) {
    console.log('01')
    const { sss } = yield take(userActions.LOGIN_REQUEST)
    console.log('02')
    const { login, logout } = yield race({
      login: call(login,sss),
      logout: fork(logout)
    })
  }
}



// function* authorizedFlow() {
//   let payload
//   while (({ payload } = yield take([actions.LOGIN_SUCCESS, actions.START_SIGNUP_SUCCESS]))) {
//     const { access_token } = payload
//     yield fork(logoutFlow, access_token)
//     yield race({
//       watchers: [
//         call(refreshUser, access_token),
//         call(refreshInvoices, access_token),
//         call(refreshPendingTransactions, access_token),
//       ],
//       logout: take(actions.LOGOUT_SUCCESS),
//     })
//   }
// }
//
// function* logoutFlow(access_token) {
//   while (yield take(actions.LOGOUT)) {
//     try {
//       yield call(api.logoutAsync, access_token)
//       yield put(actions.logoutSuccess())
//     } catch (error) {
//       yield put(actions.logoutError(error))
//     }
//   }
// }
