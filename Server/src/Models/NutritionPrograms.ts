import mongoose, { Schema, Document } from 'mongoose';

interface INutritionProgram extends Document {
  title: string;
  reviews: string;
  description: string;
  programDuration: string;
  consultations: string;
  price: string;
}

const NutritionProgramSchema: Schema = new Schema({
  title: { type: String, required: true },
  reviews: { type: String, required: true },
  description: { type: String, required: true },
  programDuration: { type: String, required: true },
  consultations: { type: String, required: true },
  price: { type: String, required: true },
});

const NutritionProgram = mongoose.model<INutritionProgram>('NutritionProgram', NutritionProgramSchema);

export default NutritionProgram;