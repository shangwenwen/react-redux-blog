import axios from 'axios'

export function request(method, url, body) {
  // method = method.toUpperCase()
  if(method === 'get') {
    body = undefined
  } else {
    body = body && JSON.stringify(body)
  }

  return axios({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Token': sessionStorage.getItem('access_token') || '' // 从sessionStorage中获取access token
    },
    body
  })
  .then((res) => {
    const token = res.headers.get('access-token')
    if(token) {
      sessionStorage.setItem('access_token', token)
    }
    return res
  })
}

export const get = url => request('get', url)
export const post = (url, body) => request('post', url, body)
export const put = (url, body) => request('put', url, body)
export const del = (url, body) => request('delete', url, body)
