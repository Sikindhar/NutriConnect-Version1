import { Button } from "./ui/button";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div className="text-center mx-8 py-6 ">
        <h1 className="text-6xl font-bold text-black m-5 px-10">
          <Typewriter
            words={['Your Journey to Better Health Starts Here', 'Boost Your Nutrition with Confidence', 'Connect with the best Doctors ']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h1>
        <h4 className="text-2xl text-gray-700 m-2">
          Connect with certified nutritionists who understand your unique needs and help you achieve your health goals.
        </h4>
         <Link to="/browseNutritionists"> 
           <Button variant="outline" className="bg-customGreen text-white hover:bg-green-600 mt-4 mx-4 my-2 w-35">Find your Nutritionist</Button> 
          </Link>
        <Link to="/nutritionPrograms"> 
          <Button variant={"outline"} className="bg-white text-black my-2 w-35 ">Browse Programs</Button> 
        </Link>

      </div>
    );
};

export default HomePage;