import axios from 'axios';

const baseApi = 'http://127.0.0.1:3000/api';

export default axios.create({
  baseURL: baseApi,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token') !== null ? 'Bearer ' + sessionStorage.getItem('token') : '',
  },
});
