import mongoose, { Schema, Document } from "mongoose";

export interface IDoctor extends Document {
  name: string;
  id: string;
  email: string;
  phone: string;
  specialization: string;
  description: string;
  experience: number;
  availableSlots: string[];
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const DoctorSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    id: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, trim: true, minlength: 10, maxlength: 10 },
    specialization: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    rating: { type: Number, required: true },
    experience: { type: Number, required: true, min: 1 },
    availableSlots: { type: [String], required: false }, 
  },
  { timestamps: true }
);

const Doctor = mongoose.model<IDoctor>("Doctor", DoctorSchema);
export default Doctor;