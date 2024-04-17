import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { LogoutIcon } from '@/app/ui/icons';
import { Logo } from '@/app/ui/icons';

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
      <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-[#676767] font-medium hover:bg-gray-100 md:flex-none md:justify-start md:p-2 md:px-3">
            <LogoutIcon />
            <div className="hidden md:block">Log Out</div>
          </button>
        </form>
    </div>
  );
}
