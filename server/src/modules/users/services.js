import User from './schema';

const DELETE_STATUS = 0;

export default {
  all: () => {
    return User.find().select('-createdAt -updatedAt -__v -password');
  },
  get: (id) => {
    return User.findById(id).select('-createdAt -updatedAt -__v');
  },
  delete: (id) => {
    return User.updateOne({ _id: id }, {
      status: DELETE_STATUS,
    });
  },
  create: (room) => {
    return User.create(room);
  }
};
