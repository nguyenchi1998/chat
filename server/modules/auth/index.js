import express from 'express';
import auth from './controllers';
import request from './request';
import Auth from '../../middleware/auth';

const router = express.Router();
router.post('/login', request, auth.login);
router.post('/refresh-token', auth.refreshToken);
router.get('/info', Auth.checkAuth, auth.info);

export default router;
