import { connect } from '../../config/database';
import httpStatus from 'http-status';
import response from '../../helper/response';
import jwt from 'jsonwebtoken';
import services from './services';

export default {
  getMessages: async (req, res) => {
    try {
      await connect;
      const messages = await services.getMessages();
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Success', messages));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.error(
          httpStatus.INTERNAL_SERVER_ERROR,
          err
        ));
    }
  },
  createMessage: async (req, res) => {
    try {
      const token = req.header('Authorization')
        .trim()
        .replace('Bearer ', '');
      const user = jwt.verify(token, process.env.private_key);
      req.body.user = user._id;
      await services.createMessage(req.body);
      res.io.emit('getMessages', await services.getMessages());
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Create message success'));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.error(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  deleteMessage: async (req, res) => {
    const { id } = req.params;
    try {
      await services.deleteMessage(id);
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Delete message success'));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.error(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  }
};
