const getUrl = (url) => 'http://localhost:3000/api/' + url

export const postLoginToAPI = data => {

    let bodydata = JSON.stringify({
        email: data.email,
        password: data.password
    });

    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });

    return instance.post("/api/login", bodydata)

};
