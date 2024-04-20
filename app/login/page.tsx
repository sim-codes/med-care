import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import Link from 'next/link';
import { Logo } from '@/app/ui/icons';


export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:-mt-20">
        <div className="flex justify-center">
          <Logo />
        </div>
        <LoginForm />
        <p className='text-center text-sm'>
            Dont have an account? <Link href='/' className='text-[#00E7BD]'>Register</Link>
        </p>
      </div>
    </main>
  );
}