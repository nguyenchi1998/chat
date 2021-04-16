import express from 'express';
import userController from './controllers';
import Auth from '../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkRole('admin'));

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', request, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
