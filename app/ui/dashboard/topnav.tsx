import Search from '../search';
import {
    BellIcon,
    UserIcon,
    ArrowDownIcon,
  } from '@heroicons/react/24/outline';

import Image from 'next/image';
import User from '@/public/images/user.avif';
import { Suspense } from 'react';


export default function TopNav({
  full_name,
  role,
  avatar,
}: {
  full_name: string;
  avatar: string;
  role: string;
}) {
  return (
    <div className="grid grid-cols-6 py-4 gap-4">
      <div className="col-span-5">
        <Search placeholder="Search for anything" />
      </div>

      <div className="place-self-start flex grow flex-row justify-end items-center space-x-2 md:flex-row md:space-x-3 md:space-y-2">
        
        <BellIcon className='w-10 h-10 border border-gray-200 p-1 rounded-lg'/>

        <div className='flex flex-row space-x-2 items-center gap-3'>
              <Image
              src={avatar}
              className="rounded-lg border-2 object-cover border-gray-200 w-10 h-10"
              width={40}
              height={40}
              alt={`Profile picture`} />
            <div className='flex flex-col'>
                <p className='font-bold leading-4'>{full_name}</p>
                <p className='text-xs text-gray-300 font-light'>{role}</p>
            </div>
            <ArrowDownIcon className='w-3'/>
        </div>
      </div>
    </div>
  );
}
