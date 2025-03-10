import { Router } from 'express';
import { submitContactForm } from '../controllers/ContactFormController';

const router = Router();

router.post('/submit', submitContactForm);

export default router;