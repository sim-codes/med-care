import Search from '../search';
import {
    BellIcon,
    UserIcon,
    ArrowDownIcon,
  } from '@heroicons/react/24/outline';

import Image from 'next/image';
import User from '@/public/images/user.avif';
import { Suspense } from 'react';


export default function TopNav() {
  return (
    <div className="flex flex-row px-3 py-4 md:px-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Search placeholder="Search for anything" />
      </Suspense>
      <div className="flex grow flex-row justify-end items-center space-x-2 md:flex-row md:space-x-3 md:space-y-2">
        
        <BellIcon className='w-10 h-10 border border-gray-200 p-1 rounded-lg'/>

        <div className='flex flex-row space-x-2 items-center gap-3'>
              <Image
              src={User}
              className="rounded-lg border border-gray-200"
              width={40}
              height={40}
              alt={`Profile picture`} />
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
