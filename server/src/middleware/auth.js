import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import response from '../helper/response';
import User from '../modules/users/schema';
import * as lodash from 'lodash';

export default {
  checkAuth: (req, res, next) => {
    try {
      const token = req
        .header('Authorization')
        .trim()
        .replace('Bearer ', '');
      if (!token)
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send(
            response.error(
              httpStatus.UNAUTHORIZED,
              'Access denied. No token provided'
            )
          );
      req.user = jwt.verify(token, process.env.private_key);
      next();
    } catch (ex) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .send(response.error(httpStatus.UNAUTHORIZED, ex.message));
    }
  },
  checkRole: (...allowed) => {
    const isAllowed = role => lodash.intersection(role, allowed).length;
    return async (req, res, next) => {
      try {
        const token = req
          .header('Authorization')
          .trim()
          .replace('Bearer ', '');
        const data = jwt.verify(token, process.env.private_key);
        const user = await User.findOne({ _id: data._id }).populate(
          'roles',
          'name'
        );
        if (user && isAllowed(user.roles.map(({ name }) => name))) {
          next();
        } else {
          res
            .status(httpStatus.FORBIDDEN)
            .send(response.error(httpStatus.FORBIDDEN, 'Access denied'));
        }
      } catch ({ message }) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send(response.error(httpStatus.FORBIDDEN, message));
      }
    };
  }
};
