import { Request, Response } from 'express';
import ContactForm from '../Models/ContactForm';

export const submitContactForm = async (req: Request, res: Response) => {
  const { name, email, subject, message, phone, doctorId, doctorName } = req.body;

  console.log('Received form data:', req.body);

  try {
    const newContactForm = new ContactForm({
      name,
      email,
      subject,
      message,
      phone,
      doctorId,
      doctorName,
    });

    await newContactForm.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error); 
    res.status(500).json({ message: 'Failed to submit contact form', error });
  }
};