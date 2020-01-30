import Role from './schema';

const DELETE_STATUS = 0;
export default {
  getRoles: () => {
    return Role.find().select('-__v');
  },
  getRole: (id) => {
    return Role.findById(id).select('-__v');
  },
  deleteRole: (id) => {
    return Role.updateOne({ _id: id }, {
      status: DELETE_STATUS,
    });
  },
  createRole: (role) => {
    return Role.create(role);
  }
};
