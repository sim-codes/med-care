import CardWrapper from '@/app/ui/dashboard/cards';
import RightNav from '@/app/ui/dashboard/rightnav';
import Image from 'next/image';
import Overview from '@/public/images/overview.png';
import { Metadata } from 'next';
import PatientTable from '@/app/ui/dashboard/table';
import MyLineChart from '@/app/ui/dashboard/MyChartLine';
import { Suspense } from 'react';

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
        Have a great day at work!
        </p>
      <div className='flex flex-row flex-wrap justify-between h-full'>
        <div className="basis-4/6 md:basis-4/4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardWrapper />
          </div>

          <div className='w-full mt-2'>
            <Suspense fallback={<div>Loading...</div>}>
              <MyLineChart />
            </Suspense>
            
            <div className="m-3">
              <div className=" flex flex-row justify-between p-3">
                <h2 className='font-bold'>Patient Data</h2>
                <p className='text-teal-300 font-normal'>View all</p>
              </div>
              <PatientTable />
            </div>
          </div>
        </div>

        <div className="basis-2/6 md:basis-4/4 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-8">
          <RightNav />
      </div>
      </div>
    </main>
  );
}