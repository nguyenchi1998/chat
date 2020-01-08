import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { errors } from 'celebrate';
import httpStatus from 'http-status';
import userModule from './modules/users';
import messageModule from './modules/messages';
import authModule from './modules/auth';
import roleModule from './modules/roles';
import roomModule from './modules/rooms';
import auth from './middleware/auth';
import cors from 'cors';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = socketIO(server);

io.on('isTyping', () => {
    console.log('user is typing');
});

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use(function(req, res, next) {
    res.io = io;
    next();
});

/*
 Authenicate
 */
app.use('/api/auth', authModule);
/*
 Api route
 */
app.use('/api/user', auth.checkAuth, userModule);
app.use('/api/role', roleModule);
app.use('/api/message', messageModule);
app.use('/api/room', roomModule);

app.get('*', (req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        message: 'Path not found',
        status: httpStatus.NOT_FOUND
    });
});

app.use(errors());
export default {
    app: app,
    server: server
};
