import express from 'express';
import userController from './controllers';
import Auth from './../../middleware/auth';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/', Auth.checkRole('admin'), userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
