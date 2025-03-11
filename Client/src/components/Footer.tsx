import { Button } from "./ui/button"

const Footer = () => {

    return (

        <div className="flex flex-row flex-wrap  justify-around ">

            <div className="flex flex-col p-10">
                <h1 className="text-lg font-semibold py-1">NutriConnect</h1>
                <h2 className="text-sm text-gray-600 py-1">Connecting you with the best nutrition experts for a healthier lifestyle.</h2>
            </div>

            <div className="flex flex-col p-10">
                <h1 className="text-lg font-semibold py-1">Quick Links</h1>
                <a href="/browseNutritionists" className="text-sm text-gray-600 hover:text-customGreen py-1">Find Nutritionists</a>
                <a href="/nutritionPrograms" className="text-sm text-gray-600 hover:text-customGreen py-1">Programs</a>
                <a href="/about" className="text-sm text-gray-600 hover:text-customGreen py-1">About us</a>
            </div>

            <div className="flex flex-col p-10">
                <h1 className="text-lg font-semibold">Support</h1>
                <a href="/contactUs" className="text-sm text-gray-600 hover:text-customGreen py-1">Contact Us</a>
                <a href="/faqs" className="text-sm text-gray-600 hover:text-customGreen py-1">FAQ</a>
                <a href="/about" className="text-sm text-gray-600 hover:text-customGreen py-1">Privacy Policy</a>
            </div>

            <div className="flex flex-col p-10">
                <h1 className="text-lg font-semibold py-1">Connect</h1>
                <h2 className="text-sm text-gray-600 py-1">Stay updated with Newsletter</h2>
                <Button variant={"outline"} className="bg-customGreen text-white hover:bg-green-600 mt-4 mx-4">Subscribe</Button>
            </div>

            <div className="flex flex-col items-center mt-8 border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">© 2025 NutriConnect. All rights reserved.</p>
            </div>



        </div>

    )

}

export default Footer;
