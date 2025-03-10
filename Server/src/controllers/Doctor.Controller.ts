import { Request, Response } from 'express';
import Doctor from '../Models/Doctor.model';

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { name, id, email, phone, specialization, description, experience, availableSlots, rating } = req.body;
    
    const newDoctor = new Doctor({ name, id, email, phone, specialization, description, experience, availableSlots, rating });
    await newDoctor.save();
    
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const query = search ? { $or: [{ name: { $regex: search, $options: 'i' } }, { specialization: { $regex: search, $options: 'i' } }] } : {};

    const doctors = await Doctor.find(query)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};