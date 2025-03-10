import mongoose, { Document, Schema } from 'mongoose';

interface IContactForm extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  doctorId: string;
  doctorName: string;
  createdAt: Date;
}

const ContactFormSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  phone: { type: String, required: true },
  doctorId: { type: String, required: false },
  doctorName: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IContactForm>('ContactForm', ContactFormSchema);