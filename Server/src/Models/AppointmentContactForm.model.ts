import mongoose, { Schema, Document } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  email: string;
  subject: string;
  phone: string;
  doctorId: mongoose.Types.ObjectId;
  doctorName: string;
  concernAndTime: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const AppointmentSchema: Schema = new Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      trim: true, 
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
    },
    subject: { 
      type: String, 
      required: true, 
      trim: true 
    },
    phone: { 
      type: String, 
      required: true, 
      trim: true, 
      minlength: 10, 
      maxlength: 13
    },
    doctorId: { 
      type: Schema.Types.ObjectId, 
      required: true, 
      ref: "Doctor" 
    },
    doctorName: { 
      type: String, 
      required: true, 
      trim: true 
    },
    concernAndTime: { 
      type: String, 
      required: true, 
      trim: true 
    }
  },
  { 
    timestamps: true 
  }
);

const Appointment = mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;
