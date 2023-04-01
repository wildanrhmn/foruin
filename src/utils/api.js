import axios from 'axios'

const api = (() => {

    const baseUrl = 'https://forum-himsi-api.vercel.app'

    // Auth
    async function Login(email, password) {
        const url = baseUrl + '/auth/login'
        const data = {
            email, password
        }

        const response = await axios.post(url, data)

        return response

    }

    async function Refresh() {
        const url = baseUrl + '/auth/refresh'

        try {
            const response = await axios.get(url, {
                credentials: "include"
            })

            return response
        } catch (err) {
            console.log(err)
        }

    }

    async function Logout() {
        const url = baseUrl + '/logout'

        const response = await axios.get(url)

        return response

    }

    return {
        Login,
        Refresh,
        Logout,
    }
})()

export default api