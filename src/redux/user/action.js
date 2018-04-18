export const userActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT: 'LOGOUT',

  loginRequest: (username, password) => ({
    type: userActions.LOGIN_REQUEST,
    username,
    password
  }),

  loginSuccess: (payload) => ({
    type: userActions.LOGIN_SUCCESS,
    payload
  }),

  loginFailure: (error) => ({
    type: userActions.LOGIN_FAILURE,
    error
  }),

  logout: () => ({
    type: userActions.LOGOUT
  })
}
