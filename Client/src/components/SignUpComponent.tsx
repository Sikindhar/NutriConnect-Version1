import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration Successful! Please log in.");
        navigate("/sign-in");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Something went wrong! Try again.");
    }
  };

  return (
    <div className="flex flex-auto justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign-Up</CardTitle>
          <CardDescription className="text-customGreen font-weight:700">
            Sign-up with NutriConnect
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name:</Label>
                <Input id="name" placeholder="Enter your Name" {...register("name", { required: "Name is required" })} />
                {errors.name && <span className="text-red-500">{String(errors.name.message)}</span>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input id="email" placeholder="Enter a valid Email" {...register("email", { required: "Email is required" })} />
                {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <Input id="password" type="password" placeholder="Enter your password" {...register("password", { required: "Password is required" })} />
                {errors.password && <span className="text-red-500">{String(errors.password.message)}</span>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone:</Label>
                <Input id="phone" placeholder="Enter your mobile number" {...register("phone", { required: "Phone number is required" })} />
                {errors.phone && <span className="text-red-500">{String(errors.phone.message)}</span>}
              </div>
            </div>

            <CardFooter className="flex justify-center my-4">
              <Link to="/sign-in">
                <Button variant="outline" className="text-customGreen mx-2">Have Account already?</Button>
              </Link>
              <Button className="bg-customGreen text-white hover:bg-green-600 mx-2" type="submit">
                Sign Up
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpForm;


