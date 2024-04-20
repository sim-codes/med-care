import CardWrapper from '@/app/ui/dashboard/cards';
import RightNav from '@/app/ui/dashboard/rightnav';
import { Metadata } from 'next';
import PatientTable from '@/app/ui/dashboard/table';
import MyLineChart from '@/app/ui/dashboard/MyChartLine';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page || '1');

  const user= await cookies().get('MedUser')?.value;
  const userJson = JSON.parse(user as string);

  return (
    <main>
      <h1 className={`mb-4 text-xl text-[#676767] md:text-4xl font-bold`}>
        Welcome, Mr {userJson?.firstname}
      </h1>
        <p className={`mb-4 text-sm text-[#676767] font-light`}>
        Have a great day at work!
        </p>
      <div className='grid grid-cols-3 gap-4 h-full'>
        <div className="col-span-2">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardWrapper />
          </div>

          <div className='w-full mt-7'>
            <MyLineChart />
            
            <div className="m-3">
              <div className=" flex flex-row justify-between p-3">
                <h2 className='font-bold'>Patient Data</h2>
                <p className='text-teal-300 font-normal'>View all</p>
              </div>
              <PatientTable currentPage={currentPage} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <RightNav />
      </div>
      </div>
    </main>
  );
}