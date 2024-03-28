import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import {
    BellAlertIcon,
    UserIcon,
    ArrowDownIcon,
    HandRaisedIcon,
  } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="flex flex-row px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-end space-x-2 md:flex-row md:space-x-1 md:space-y-2">
        <BellAlertIcon className='w-6 me-4'/>
        <div className='flex flex-row space-x-2'>
            <UserIcon className='w-6'/>
            <div className='flex flex-col'>
                <p className='font-bold leading-4'>Segun Ayo</p>
                <p className='text-xs text-gray-300 font-light'>Admin</p>
            </div>
            <ArrowDownIcon className='w-3'/>
        </div>
      </div>
    </div>
  );
}
