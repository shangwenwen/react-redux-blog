import Immutable from 'immutable'
import { userActions } from './action'

const initialState = Immutable.fromJS({
  id: 1,
  username: null,
  errors: null
})

export function userReducer(state = initialState, action = {}) {
  switch(action.type) {
    case userActions.REQUEST_USER:
      return state.merge({
        'id': action.id,
        'errors': null
      })
    case userActions.REQUEST_USER_SUCCESS:
      return state.set('username', action.username)
    case userActions.REQUEST_USER_FAILURE:
      return state.set('errors', action.errors)
    default:
      return state
  }
}
