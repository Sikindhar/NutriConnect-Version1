import { Request, Response } from 'express';
import mongoose from 'mongoose';
import NutritionProgram from '../Models/NutritionPrograms';

export const createNutritionProgram = async (req: Request, res: Response) => {
  try {
    const { title, reviews, description, programDuration, consultations, price } = req.body;
    
    const newProgram = new NutritionProgram({ title, reviews, description, programDuration, consultations, price });
    await newProgram.save();
    
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const getAllNutritionPrograms = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const query = search ? { title: { $regex: search, $options: 'i' } } : {};

    const programs = await NutritionProgram.find(query)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const updateNutritionProgram = async (req: Request, res: Response) : Promise<any> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const { title, reviews, description, programDuration, consultations, price } = req.body;
    
    const updatedProgram = await NutritionProgram.findByIdAndUpdate(
      req.params.id,
      { title, reviews, description, programDuration, consultations, price },
      { new: true }
    );

    if (!updatedProgram) return res.status(404).json({ message: 'Program not found' });

    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const deleteNutritionProgram = async (req: Request, res: Response) : Promise<any> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const deletedProgram = await NutritionProgram.findByIdAndDelete(req.params.id);
    if (!deletedProgram) return res.status(404).json({ message: 'Program not found' });

    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};



