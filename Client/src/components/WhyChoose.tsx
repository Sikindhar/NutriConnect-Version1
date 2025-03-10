import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type SimpleCardProps = {
  heading: string;
  description: string;
  image: string; 
};

const SimpleCard = ({ heading, description, image }: SimpleCardProps) => {
  return (
    <Card className="w-full sm:w-[450px] flex flex-col sm:flex-row">
      <img src={image} alt={heading} className="w-full sm:w-1/3 object-cover" />
      <CardContent className="p-4">
        <CardHeader>
          <CardTitle>{heading}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

const WhyChoose = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-black m-20 px-2">
        Why choose NutriConnect?
      </h1>
      <div className="flex justify-center gap-4 px-10 flex-wrap">
        <SimpleCard
          heading="Certified Experts"
          description="Connect with verified nutritionists who have proven track records and certifications."
          image="https://advancedmedicallv.com/wp-content/uploads/2020/01/Nutrition-Expert-with-Healthy-Vegtables-on-a-cutting-board-and-an-open-laptop.jpg" // Add image URL
        />
        <SimpleCard
          heading="Flexible Scheduling"
          description="Book appointments that fit your schedule with easy online scheduling."
          image="https://img.freepik.com/premium-photo/healthy-lifestyle-boy-nutritionist-appointment_210733-2092.jpg?w=2000" // Add image URL
        />
        <SimpleCard
          heading="Personalized Plans"
          description="Get customized nutrition plans tailored to your specific goals and lifestyle."
          image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/33996/images/Fe2A4oIS0aQnFu98xveA_Blog_Posts.png" // Add image URL
        />
      </div>
    </div>
  );
};

export default WhyChoose;