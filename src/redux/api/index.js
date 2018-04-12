import axios from 'axios'

const getUrl = (url) => 'http://localhost:3000/api/' + url

export const fetchUser = id => {

    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    })

    return instance.get(getUrl('user/' + id))

}
