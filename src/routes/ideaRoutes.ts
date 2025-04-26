import { Router } from 'express';
import { generateIdea, refineIdea } from '../controllers/ideaController';

const router = Router();

router.get('/generate', generateIdea);
router.post('/refine', refineIdea);

export const ideaRoutes = router; 