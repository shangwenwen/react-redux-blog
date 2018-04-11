

export function* watchLoginRequest() {
  yield * takeEvery(loginActions.LOGIN_REQUEST, login_process)
}
