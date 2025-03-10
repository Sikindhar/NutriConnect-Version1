import express from 'express';
import {Request , Response } from 'express';
import {
  createNutritionProgram,
  getAllNutritionPrograms,
  updateNutritionProgram,
  deleteNutritionProgram
} from '../controllers/NutritionProgram.Controller';

const router = express.Router();

router.post('/nutrition-programs', createNutritionProgram);
router.get('/nutrition-programs', getAllNutritionPrograms);
router.put('/nutrition-programs/:id', updateNutritionProgram);
router.delete('/nutrition-programs/:id', deleteNutritionProgram);

export default router;
