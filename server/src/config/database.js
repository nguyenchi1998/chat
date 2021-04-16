import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;
const url = 'mongodb://localhost:27017/chat';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

export { connect, mongoose } ;
