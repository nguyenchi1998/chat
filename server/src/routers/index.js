import { Router } from 'express';
import authModule  from '../modules/auth';
import userModule  from '../modules/users';
import roleModule  from '../modules/roles';
import messageModule  from '../modules/messages';
import roomModule  from '../modules/rooms';
import Auth from '../middleware/auth';

const router = Router();

/**
 *  API without authenticate
 */
router.use('/auth', authModule);

/**
 *  API with authenticate
 */
router.use(Auth.checkAuth);
router.use('/users', userModule);
router.use('/roles', roleModule);
router.use('/messages', messageModule);
router.use('/rooms', roomModule);

export default router;
