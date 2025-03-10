import express from 'express';
import {
  createDoctor,
  getAllDoctors
} from '../controllers/Doctor.Controller';

const router = express.Router();

router.post('/create-doctor', createDoctor);
router.get('/doctors-list', getAllDoctors);

export default router;