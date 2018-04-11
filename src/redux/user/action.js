export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS'
export const REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE'

export const requestUser = (id) => {
  return {
    type: REQUEST_USER,
    data: id
  }
}

export const requestUserSuccess = (username) => {
  return {
    type: REQUEST_USER_SUCCESS,
    data: username
  }
}

export const requestUserFailure = (error) => {
  return {
    type: REQUEST_USER_SUCCESS,
    data: error
  }
}
