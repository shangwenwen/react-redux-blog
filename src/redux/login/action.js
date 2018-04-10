export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const USER_LOGIN = "USER_LOGIN"

export const loginRequest = (data) => ({
    type: LOGIN_REQUEST,
    data
})

export const loginFailed = (errors) => ({
    type: LOGIN_FAILED,
    errors
})

export const userLogin = (user) => ({
    type: USER_LOGIN,
    user
})
