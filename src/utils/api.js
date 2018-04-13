import { get } from './fetch'

const getUrl = (url) => 'http://localhost:3000/api/' + url

export const fetchUser = id => {
    return get(getUrl('user/' + id))
}
