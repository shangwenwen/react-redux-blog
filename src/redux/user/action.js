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
  })
}
