import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 'step1',
    title: "1. Explore Your Health Needs",
    description: "Browse through our platform to find information and services that best match your health concerns and nutritional goals.",
  },
  {
    id: 'step2',
    title: "2. Provide Your Details",
    description: "Fill in your personal details and health preferences to help us tailor the consultation to your specific needs.",
  },
  {
    id: 'step3',
    title: "3. Schedule an Appointment",
    description: "Book a consultation at your convenience by filling out our Appointment Form.",
  },
  {
    id: 'step4',
    title: "4. Reach Out Directly (Alternative Option)",
    description: "Prefer a direct approach? You can use our Contact Us page to submit your details and reach out to us.",
  },
  {
    id: 'step5',
    title: "5. Confirmation & Credentials",
    description: "Once your request is processed, we will schedule a call with the assigned doctor/nutritionist and share the meeting credentials with you via email.",
  },
];

const GetStartedComponent = () => {
  return (
    <div className="p-6 m-6 bg-white rounded-md shadow-md max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-customGreen mb-6">Welcome to NutriConnect</h1>
      <p className="text-lg text-center mb-6">
        Your personalized gateway to expert nutrition guidance. Follow these simple steps to schedule your consultation with a qualified nutritionist or doctor.
      </p>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="grid grid-cols-[auto_1fr] gap-4 bg-gray-100 p-4 rounded-md shadow-sm min-h-[100px]">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg text-center mt-6">
        💡 That's it! You're all set to take the next step toward a healthier lifestyle with NutriConnect.
      </p>
      <div className="flex justify-center mt-6">
        <Link to="/browseNutritionists">
          <Button className="bg-customGreen text-white hover:bg-green-600">Schedule Appointment</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetStartedComponent;