import Role from './schema';

const DELETE_STATUS = 0;

export default {
  all: () => {
    return Role.find().select('-__v -createdAt -updatedAt');
  },
  find: (id) => {
    return Role.findById(id).select('-__v');
  },
  delete: (id) => {
    return Role.updateOne({ _id: id }, {
      status: DELETE_STATUS,
    });
  },
  create: (role) => {
    return Role.create(role);
  }
};
