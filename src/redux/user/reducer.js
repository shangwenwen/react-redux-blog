import Immutable from 'immutable'
import { REQUEST_USER, REQUEST_USER_SUCCESS, REQUEST_USER_FAILURE } from './action'

const initialState = Immutable.fromJS({
  id: null,
  username: null,
  error: null
})

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_USER:
      return state.merge({
        'id': action.data,
        'error': null
      });
    case REQUEST_USER_SUCCESS:
      return state.set('username', action.data);
    case REQUEST_USER_FAILURE:
      return state.set('error', action.data);
    default:
      return state
  }
}
