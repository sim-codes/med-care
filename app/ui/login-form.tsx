'use client';

import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-0 pt-8">
        <div className='text-center'>
          <h1 className={`${lusitana.className} mb-1 text-2xl font-bold`}>Log in to your account</h1>
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
                id='email'
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
                id='password'
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        </div>
            <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
            >
            {errorMessage && (
                <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
            </div>
        <LoginButton />
      </div>
    </form>
  );
}


function LoginButton() {
    const { pending } = useFormStatus();

    return (
      <Button className="mt-4 w-full" aria-disabled={pending}>
        Sign in
      </Button>
    );
}