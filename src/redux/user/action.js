export const userActions = {
  REQUEST_USER: 'REQUEST_USER',
  REQUEST_USER_SUCCESS: 'REQUEST_USER_SUCCESS',
  REQUEST_USER_FAILURE: 'REQUEST_USER_FAILURE',

  requestUser: (id) => ({
    type: userActions.REQUEST_USER,
    id
  }),

  requestUserSuccess: (username) => ({
    type: userActions.REQUEST_USER_SUCCESS,
    username
  }),

  requestUserFailure: (errors) => ({
    type: userActions.REQUEST_USER_FAILURE,
    errors
  }),

  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  login: (username, password) => ({
    type: userActions.LOGIN,
    username,
    password
  })
}
