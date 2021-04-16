import express from 'express';
import roleController from './controllers';
import Auth from '../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/', Auth.checkRole('admin'), roleController.getRoles);
router.get('/:id', roleController.getRole);
router.post('/', request, roleController.createRole);
router.delete('/:id', roleController.deleteRole);

export default router;
