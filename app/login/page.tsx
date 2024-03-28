import LoginForm from '@/app/ui/auth/login-form';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-20">
        <div className="flex h-20 w-full items-end rounded-lg bg-cyan-500 p-3 md:h-16">
          <div className="w-32 text-white md:w-36">
            <h1 className="text-2xl">MedCare</h1>
          </div>
        </div>
        <LoginForm />
        <p className='text-center text-sm'>
            Dont have an account? <Link href='/' className='text-cyan-500'>Register</Link>
        </p>
      </div>
    </main>
  );
}