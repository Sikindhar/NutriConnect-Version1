import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ContactInfoCard from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from '@/config';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name cannot contain numbers or special characters." }),
  email: z.string().email({ message: "Enter a valid email address with '@'." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
  phone: z.string().min(10, { message: "Phone number must contain at least 10 characters." }),
  doctorId: z.string(),
  doctorName: z.string()
});

export function ContactForm() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      doctorId: "",
      doctorName: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`${config.apiBaseUrl}/contact/submit`, data);
      alert("Form submitted successfully! , We shall contact you shortly");
      navigate("/"); 
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-black m-4 p-2">Contact us and schedule your call with our Doctors and Nutritionists</h1>
      <div className="flex m-5 justify-between p-6 flex-wrap my-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 border border-gray-300 rounded-lg p-6 shadow-sm bg-white max-w-lg mx-auto m-5"
        >
          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Name:</label>
            <Input
              placeholder="Enter your name"
              {...form.register("name")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Email:</label>
            <Input
              placeholder="Enter your email"
              {...form.register("email")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Subject:</label>
            <Input
              placeholder="Enter the subject"
              {...form.register("subject")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Phone:</label>
            <Input
              placeholder="Enter your phone number"
              {...form.register("phone")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Doctor Id:</label>
            <Input
              placeholder="Enter the doctor id you want to meet"
              {...form.register("doctorId")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Doctor Name:</label>
            <Input
              placeholder="Enter Doctor name"
              {...form.register("doctorName")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4 flex-wrap">
            <label className="w-24 font-medium">Concern and Time:</label>
            <Input
              placeholder="Brief your concerns and available time of schedule"
              {...form.register("message")}
              className="flex-1 border-gray-300"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="bg-customGreen text-white hover:bg-green-600">
              Send Message
            </Button>
          </div>
        </form>

        <ContactInfoCard />
      </div>
    </div>
  );
}

export default ContactForm;