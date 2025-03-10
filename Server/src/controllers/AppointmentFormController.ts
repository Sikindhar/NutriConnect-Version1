import { Request, Response } from 'express';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email?: string;
  };
}
import Appointment from '../Models/AppointmentContactForm.model';

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, phone, doctorId, doctorName, concernAndTime } = req.body;
    
    const newAppointment = new Appointment({ name, email, subject, phone, doctorId, doctorName, concernAndTime });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const getUserAppointments = async (req: AuthenticatedRequest, res: Response): Promise<any> => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userEmail = req.user.email; 
    console.log('User Email:', userEmail); 
    const appointments = await Appointment.find({ email: userEmail }).populate('doctorId', 'name');
    console.log('Appointments:', appointments); 
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};