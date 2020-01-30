import axios from 'axios';

const token = sessionStorage.getItem('token') == null ? '' : 'Bearer ' + sessionStorage.getItem('token');

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/',
  timeout: 1000,
});

export function authenticate(email, password) {
  return instance.post('/auth/login', { email, password });
}

export function fetchMessage() {
  return instance.get('/message', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  })
}


export function getInfoUser() {
  return instance.get('/auth/info', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
}
