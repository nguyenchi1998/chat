import { Message } from './schema';

const DELETE_STATUS = 0;
export default {
    getMessages: () => {
        return Message.find().select('-__v');
    },
    deleteMessage: (id) => {
        return Message.updateOne({ _id: id }, {
            status: DELETE_STATUS,
        });
    },
    createMessage: (message) => {
        return Message.create(message);
    }
};
