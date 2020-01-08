import API from './base';

export const getUsers = async () => {
  const response = await API.get('/user');

  return response.data;
};
