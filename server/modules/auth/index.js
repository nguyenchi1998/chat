import express from 'express';
import auth from './controllers';
import request from './request';

const router = express.Router();

router.post('/login', request, auth.login);
router.get('/info', auth.info);

export default router;
