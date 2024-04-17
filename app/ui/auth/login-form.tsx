import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';

import { useForm } from 'react-hook-form';
import { AuthActions } from '@/app/auth/utils';
import { useRouter } from 'next/navigation';


type FormData = {
  email: string;
  password: string;
};


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const router = useRouter();

  const { login, storeToken } = AuthActions();

  const onSubmit = (data: FormData) => {
    login(data.email, data.password)
      .json((json) => {
        storeToken(json.access, "access");
        storeToken(json.refresh, "refresh");

        router.push("/dashboard");
      })
      .catch((err) => {
        setError("root", { type: "manual", message: err.json.message });
        console.log(err.json.message);
      });
  };


  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-1 rounded-lg px-6 pb-0 pt-8">
        <div className='text-center'>
          <h1 className="mb-1 text-2xl font-bold">Log in to your account</h1>
          <p className="text-sm text-gray-500">Welcome Admin! Please enter your details.</p>
        </div>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="absolute text-xs text-red-500">Email is required</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password*
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="absolute text-xs text-red-500">Password is required</span>
              )}
            </div>
          </div>
        </div>
        {errors.root && (
          <span className="block w-full text-xs text-red-500 mt-2">{errors.root.message}</span>
        )}
        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Sign in
    </Button>
  );
}
