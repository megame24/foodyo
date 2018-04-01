import axios from 'axios';

const rootUrl = 'http://localhost:8081';

export const REGISTER_USER = 'register_user';

export const register = (values, callback) => {
    const request = axios.post(`${rootUrl}/register`, values)
        .then(() => callback());

    return {
        type: REGISTER_USER,
        payload: request
    }
}