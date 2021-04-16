import jwt from 'jsonwebtoken';
import  User  from '../users/schema';

export default {
  getUserFromToken: async (token) => {
    const data = jwt.verify(token, process.env.private_key);
    return {
      id: data._id,
      user: await User.findById(data._id).lean()
        .select('-password -createdAt -updatedAt -__v')
    };
  },
  generateAccessToken: async (user) => {
    return jwt.sign({ _id: user._id }, process.env.private_key, {
        'expiresIn': process.env.tokenLife,
      }
    );
  },
  generateRefreshToken: async (user) => {
    return jwt.sign({ _id: user._id }, process.env.refreshToken, {
      'expiresIn': process.env.refreshTokenLife,
    });
  },
};
