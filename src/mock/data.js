const BASE_URL = 'http://localhost:5000'

function config(token, refresh) {
    return {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Refresh": `${refresh}`,
            "Access-Control-Allow-Origin": '*'
        }
    }
}

export { BASE_URL, config }