import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import medCareLogo from '@/public/medcare-logo.svg';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-10 items-end justify-start rounded-m p-4 md:h-20"
        href="/"
      >
        <Image src={medCareLogo} alt="MedCare Logo" />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
      <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-teal-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <LogOut className="w-6" />
            <div className="hidden md:block">Log Out</div>
          </button>
        </form>
    </div>
  );
}
