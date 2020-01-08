import { connect } from '../../config/database';
import Room from './schema';
import httpStatus from 'http-status';
import response from '../../helper/response';
import AuthService from './../auth/services';
import services from './services';

export default {
  getRooms: async (req, res) => {
    try {
      await connect;
      const rooms = await services.getRooms()
        .populate({
          path: 'members',
          populate: {
            path: 'messages',
          }
        });
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Success', rooms));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  getRoom: async (req, res) => {
    try {
      const { id } = req.body;
      await connect;
      const room = await services.getRoom(id)
        .populate('members', 'messages');
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Success', room));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  createRoom: async (req, res) => {
    const { name } = req.body;
    const token = req.header('Authorization').trim().replace('Bearer ', '');
    const user = await AuthService.getUserFromToken(token);
    try {
      await Room.create({
        name: name,
        members: [user.id],
      });
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Create room success'));
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.success(
          httpStatus.INTERNAL_SERVER_ERROR,
          err.message,
        ));
    }
  }
};
