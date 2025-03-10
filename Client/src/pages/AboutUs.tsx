import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardWithFormProps {
    Title: string;
    Description: string;
}

const CardWithoutForm = ({ Title, Description }: CardWithFormProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>
                    {Title}
                </CardTitle>
                <CardDescription>
                    {Description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

const About = () => {
    return (

        <div>
            <div className="flex flex-wrap ">
                <div >
                    <h1 className="text-3xl font-bold text-black m-5 px-10" >About NutriConnect</h1>
                    <p className="text-2xl text-gray-700 m-2">Welcome to NutriConnect, your trusted platform for connecting with certified nutritionists who can guide you on your journey to better health. Whether you're looking to improve your eating habits, manage a health condition, or optimize your athletic performance, we're here to help you find the right nutrition expert.</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-black m-5 px-10">Our Mission</h2>
                    <p className="text-2xl text-gray-700 m-2">We believe that personalized nutrition guidance should be accessible to everyone. Our platform connects you with qualified nutritionists who understand your unique needs and can create customized plans to help you achieve your health goals.</p>
                </div>
            </div>



            <div className="flex justify-center m-4 flex-wrap">
                <div className="m-5">
                    <CardWithoutForm
                        Title="For Clients"
                        Description="Explore nutritionist profiles, book consultations, receive personalized meal plans, and monitor your progress—all in one place."
                    />
                </div>

                <div className="m-5">
                    <CardWithoutForm
                        Title="For Nutritionists"
                        Description="Create a professional profile, connect with clients, manage appointments, and share expertise and resources."
                    />
                </div>
            </div>

        </div>

    );
}

export default About;
