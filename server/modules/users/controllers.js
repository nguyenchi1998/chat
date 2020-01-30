import { User, validateUser } from './schema';
import { connect } from '../../config/database';
import httpStatus from 'http-status';
import response from '../../helper/response';
import Role from '../roles/schema';

export default {
  getUsers: async (req, res) => {
    try {
      await connect;
      const users = await User.find().select('-__v').populate('roles', 'name');
      if (users) {
        res.status(httpStatus.OK)
          .send(response.success(httpStatus.OK, 'Success', users));
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .send(response.success(httpStatus.OK, 'Fail'));
      }

    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  },
  getUser: async (req, res) => {
    const { id } = req.params;
    try {
      await connect;
      const user = await User.findById(id)
        .select('-password -createdAt -updatedAt -__v');
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Success', user));

    } catch (err) {
      res.status(httpStatus.NOT_FOUND)
        .send(response.fail(httpStatus.NOT_FOUND, 'User not found'));
    }
  },
  createUser: async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(httpStatus.BAD_REQUEST)
      .send(response.fail(httpStatus.BAD_REQUEST, error.details[0].message,));
    try {
      if (!req.body.roles) {
        req.body.roles = [];
        req.body.roles.push(await Role.findOne({ name: 'user' }));
      }
      const result = await User.create(req.body);
      if (result) {
        res.status(httpStatus.OK)
          .send(response.success(httpStatus.OK, 'Create user success'));
      } else {
        res.status(httpStatus.OK)
          .send(response.success(
            httpStatus.INTERNAL_SERVER_ERROR, 'Create user fail'));
      }
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.success(httpStatus.INTERNAL_SERVER_ERROR, err.message,));
    }
  },
  updateUser: async (req, res) => {
    const { name, username, phone, avatar } = req.body;
    const { id } = req.params;

    const update = await User.updateOne({ _id: id }, {
      name: name,
      username: username,
      phone: phone,
      avatar: avatar === undefined ? avatar : '',
    });
    if (update.nModified) {
      res.status(httpStatus.OK)
        .send(response.success(httpStatus.OK, 'Update user success'));
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, 'Update user fail'));
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await User.findOneAndDelete({ _id: id });
      if (result) {
        res.status(httpStatus.OK)
          .send(response.success(httpStatus.OK, 'Delete user success'));
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR)
          .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, 'Delete user fail'));
      }
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.fail(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  }
};
