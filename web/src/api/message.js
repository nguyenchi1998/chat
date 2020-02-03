import axios from './../libs/axios';

const getMessage = async () => axios.get('/message');
export default {
  getMessage
}
