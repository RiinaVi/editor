import axios from "axios";

const httpClient = axios.create(
    {
        // baseURL: '/',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
        },
    }
);

export default httpClient;
