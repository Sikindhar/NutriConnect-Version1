import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/userRoutes";
import nutritionRoutes from "./routes/nutritionProgram"
import doctorRoutes from "./routes/doctorRoutes"
import appointmentRoutes from './routes/appointmentRoutes'
import contactFormRoutes from './routes/contactFormRoutes'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/programs', nutritionRoutes);
app.use('/api/doctors',doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactFormRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
