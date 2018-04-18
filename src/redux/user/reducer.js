import Immutable, { Map } from 'immutable'
import { userActions } from './action'

export function userReducer(state = new Map(), action = {}) {
  switch(action.type) {
    case userActions.LOGIN_REQUEST:
      return state.set('isPending', true)
    case userActions.LOGIN_FAILURE:
      return state.merge({
        'error': action.error,
        'isPending': false
      })
    case userActions.LOGIN_SUCCESS:
      return state.merge({
        'username': action.payload.username,
        'token': action.payload.token,
        'isPending': false,
        'error': null
      })
    case userActions.LOGOUT:
      return new Map()
    default:
      return state
  }
}
