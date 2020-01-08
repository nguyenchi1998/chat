import { User } from '../users/schema';
import httpStatus from 'http-status';
import response from '../../helper/response';
import services from './services';

export default {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user && user === null) {
      res.status(httpStatus.NOT_FOUND)
        .send(response.success(
          httpStatus.NOT_FOUND,
          'Login failed! Check authentication credentials'
          )
        );
      return;
    }
    res.status(httpStatus.OK)
      .send(response.success(
        httpStatus.OK, 'Login success', {
          scheme: 'Bearer',
          token: await services.generateAuthToken(user),
        }
        )
      );
  },
  info: async (req, res) => {
    try {
      const token = req.header('Authorization')
        .replace('Bearer ', '');
      const user = await services.getUserFromToken(token);
      if (user.user)
        res.status(httpStatus.OK)
          .send(response.success(
            httpStatus.OK,
            'Success',
            user.user)
          );
      res.status(httpStatus.NOT_FOUND)
        .send(response.success(
          httpStatus.NOT_FOUND,
          'Fail')
        );
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(response.success(
          httpStatus.INTERNAL_SERVER_ERROR,
          err.message
        ));
    }
  }
};
