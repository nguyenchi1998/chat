import API from './base';

export default {
  getMessages: async () => {
    const response = await API.get('/message');

    return response.data;
  },
  createMessage: async (message) => {
    const response = await API.post('/message', message);

    return response.data;
  }
}
