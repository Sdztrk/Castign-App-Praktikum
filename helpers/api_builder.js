const BASE_URL = "http://localhost:8000/api/";

class API {
    static async get(endpoint) {
        const response = await fetch(BASE_URL + endpoint);
        return response.json();
    }

    static async post(endpoint, data) {
        const response = await fetch(BASE_URL + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data).toString(),
        });
        return response.json();
    }
}

export default API;