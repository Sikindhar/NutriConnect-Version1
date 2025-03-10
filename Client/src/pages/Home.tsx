import NavBar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import WhyChoose from "@/components/WhyChoose";
import NutritionistList from "@/components/Featured";
import Footer from "@/components/Footer";

const Home = () => {

    return (

        <div>
            <NavBar />
            <HomePage />
            <WhyChoose />
            <NutritionistList />
            <Footer />
        </div>

    )

}

export default Home;