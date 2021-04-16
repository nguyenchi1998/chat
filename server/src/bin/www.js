// #!/usr/bin/env node

/**
 * Module dependencies.
 */
import { config } from 'dotenv';

config();
import debugLib from 'debug';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import httpStatus from 'http-status';
import cors from 'cors';
import http from 'http';
import socketIO from 'socket.io';
import router from '../routers';

const app = express();
const server = http.createServer(app);

const io = socketIO(server);

io.on('isTyping', () => {
  console.log('user is typing');
});

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

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
 api router
 */
app.use('/api', router);

app.get('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: 'Path not found',
    status: httpStatus.NOT_FOUND
  });
});

app.use(errors());

const debug = debugLib('express-es6-sample:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log(`Listening on ${bind}`);
  debug('Listening on ' + bind);
}
