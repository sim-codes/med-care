import CardWrapper from '@/app/ui/dashboard/cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-4xl font-bold`}>
        Welcome, Mr Ayo
      </h1>
        <p className={`mb-4 text-sm text-gray-300 font-light`}>
            Here is a summary of your activities
        </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
    </main>
  );
}