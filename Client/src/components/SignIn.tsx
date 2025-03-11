import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';
import config from '@/config';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/auth/login`, data);

      if (response.status === 200) {
        login(response.data.token);
        navigate('/');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong! Try again.');
    }
  };

  return (
    <div className="flex flex-auto justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-customGreen font-weight:700">
            Welcome back! Login to NutriConnect
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
            </div>

            <CardFooter className="flex justify-center my-4">
              <Link to="/sign-up">
                <Button variant="outline" className="text-customGreen mx-4">New User?</Button>
              </Link>
              <Button className="bg-customGreen text-white hover:bg-green-600 mx-4" type="submit">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignInForm;