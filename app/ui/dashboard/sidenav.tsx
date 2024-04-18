'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { LogoutIcon } from '@/app/ui/icons';
import { Logo } from '@/app/ui/icons';
import LogoutForm from '@/app/ui/auth/logout-form';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-2 py-3 md:px-2">
      <div
        className="mb-2 flex h-10 items-end justify-start rounded-m p-4 md:h-20"
      >
        <Logo />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
      <LogoutForm />
    </div>
  );
}
