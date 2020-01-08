import api from '../_api/message';
import actionType from './actionType';

const getMessages = () => {
  return api.getMessages().then(res => {
    return {
      type: actionType.FETCH_MESSAGES,
      payload: res.data,
    }
  }).catch(error => {
    throw error;
  });
};

export default getMessages;
