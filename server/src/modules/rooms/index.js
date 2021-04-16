import express from 'express';
import roomController from './controllers';
import Auth from '../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/', roomController.getRooms);
router.get('/:id', roomController.getRoom);
router.post('/', request, roomController.createRoom);


export default router;
