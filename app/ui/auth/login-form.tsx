import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';


export default function LoginForm() {
  return (
    <form className="space-y-3">
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
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
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
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
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
