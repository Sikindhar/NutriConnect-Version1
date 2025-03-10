import express from 'express';
import { createAppointment } from '../controllers/AppointmentFormController';
import { getUserAppointments } from '../controllers/AppointmentFormController';
import {authMiddleware} from '../Middlewares/authorizationMiddleware'; 


const router = express.Router();

router.post('/schedule-appointment', createAppointment);
router.get('/user-appointments', authMiddleware, getUserAppointments);

export default router;