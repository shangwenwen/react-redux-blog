import {Map} from 'immutable';
import { LOGIN_REQUEST } from './action'

export function authReducer(state = new Map(), action = {}) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {'isPending': true}
    default:
      return state
  }
}
