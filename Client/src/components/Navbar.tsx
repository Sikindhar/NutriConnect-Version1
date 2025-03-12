"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Find Nutritionists</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link to="/browseNutritionists">
            <DropdownMenuRadioItem value="top" className="text-customGreen">
              Browse all Nutritionists
            </DropdownMenuRadioItem>
          </Link>

          <Link to="/nutritionPrograms">
            <DropdownMenuRadioItem value="bottom" className="text-customGreen">
              Nutrition Programs
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <h1 className="text-4xl sm:text-3xl font-bold text-customGreen">
        NutriConnect
      </h1>

      <div className="hidden md:flex items-center gap-4">
        <DropdownMenuRadioGroupDemo />
        <Link to="/about">
          <Button variant="outline">About Us</Button>
        </Link>
        <Link to="/contactUs">
          <Button variant="outline">Contact us</Button>
        </Link>
        <Link to="/getStarted">
          <Button variant="outline" className="bg-customGreen text-white hover:bg-green-600">
            Get Started
          </Button>
        </Link>
        <Link to="/profile">
          <FaUserCircle className="w-8 h-8 text-gray-400 hover:text-customGreen" />
        </Link>
      </div>

      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" aria-label="Close menu" />
        ) : (
          <Menu className="w-6 h-6" aria-label="Open menu" />
        )}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-2 p-4 md:hidden ${isMobileMenuOpen ? "flex" : "hidden"
          }`}
      >
        <DropdownMenuRadioGroupDemo />
        <Link to="/about">
          <Button variant="outline">About Us</Button>
        </Link>
        <Link to="/contactUs">
          <Button variant="outline">Contact us</Button>
        </Link>
        <Link to="/getStarted">
          <Button variant="outline" className="bg-customGreen text-white hover:bg-green-600">
            Get Started
          </Button>
        </Link>
        <Link to="/profile">
          <FaUserCircle className="w-8 h-8 text-gray-400 hover:text-customGreen" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;