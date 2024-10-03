import { Router } from 'express';
import { getAllComments, createComment } from '../controllers/commentController';

const router = Router();

router.get('/', getAllComments);
router.post('/', createComment);

export default router;
