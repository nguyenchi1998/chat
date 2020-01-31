import { User } from '../users/schema';
import httpStatus from 'http-status';
import response from '../../helper/response';
import services from './services';
import jwt from 'jsonwebtoken';

export default {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user && user === null) {
      return res.status(httpStatus.NOT_FOUND)
        .send(response.success(
          httpStatus.NOT_FOUND,
          'Login failed! Check authentication credentials'
          )
        );
    }
    return res.status(httpStatus.OK)
      .send(response.success(
        httpStatus.OK, 'Login success', {
          scheme: 'Bearer',
          token: await services.generateAccessToken(user),
          refreshToken: await services.generateRefressToken(user),
        }
        )
      );
  },
  refreshToken: async (req, res) => {
    const { refreshToken } = req.body;
    console.log(refreshToken);
    const user = jwt.verify(refreshToken, process.env.publicRefreshToken);
    if (!user)
      return res.status(httpStatus.NOT_FOUND)
        .send(response.success(
          httpStatus.NOT_FOUND,
          'Login failed! Check authentication credentials'
          )
        );
    return res.status(httpStatus.OK)
      .send(response.success(
        httpStatus.OK, 'Login success', {
          scheme: 'Bearer',
          token: await services.generateAccessToken(user),
        })
      );
  },
  info: async (req, res) => {
    try {
      const token = req.header('Authorization').trim()
        .replace('Bearer ', '');
      const user = await services.getUserFromToken(token);
      if (user.user)
        return res.status(httpStatus.OK)
          .send(response.success(
            httpStatus.OK,
            'Success',
            user.user)
          );
      return res.status(httpStatus.NOT_FOUND)
        .send(response.success(
          httpStatus.NOT_FOUND,
          'Fail')
        );
    } catch (err) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.success(
          httpStatus.INTERNAL_SERVER_ERROR,
          err.message
        ));
    }
  }
};
