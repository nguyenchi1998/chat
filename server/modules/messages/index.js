import express from 'express';
import messageController from './controllers';
// import Auth from './../../middleware/auth';

const router = express.Router();

// router.use(Auth.checkAuth);
router.get('/', messageController.getMessages);
router.post('/', messageController.createMessage);
router.delete('/:id', messageController.deleteMessage);

export default router;
