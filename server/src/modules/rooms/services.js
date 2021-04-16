import Room from './schema';

const DELETE_STATUS = 0;
export default {
  getRooms: () => {
    return Room.find().select('-createdAt -updatedAt -__v');
  },
  getRoom: (id) => {
    return Room.findById(id).select('-createdAt -updatedAt -__v');
  },
  deleteRoom: (id) => {
    return Room.updateOne({ _id: id }, {
      status: DELETE_STATUS,
    });
  },
  createRoom: (room) => {
    return Room.create(room);
  }
};
