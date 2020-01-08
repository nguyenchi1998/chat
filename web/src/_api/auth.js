import API from './base';

export default {
  login: async (email, password) => {
    const response = await API.post('/auth/login', {
      email: email,
      password: password,
    });

    return response.data;
  },
  getUserInfo: async () => {
    const response = await API.get('/auth/info');

    return response.data
  }
};
