import { APP_ACTION } from './action'

let initialState = {
  data: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case APP_ACTION:
      return {}
    default:
      return state
  }
}
