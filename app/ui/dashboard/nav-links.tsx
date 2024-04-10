'use client';

import { Home,
  CalendarDays,
  ClipboardListIcon,
  BriefcaseMedicalIcon,
  UsersIcon,
  SettingsIcon,

 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dasboard', href: '/dashboard', icon: Home },
  {
    name: 'Appointments',
    href: '/dashboard/appointments',
    icon: CalendarDays,
  },
  { name: 'Patients', href: '/dashboard/patients', icon: UsersIcon },
  { name: 'Doctors', href: '/dashboard/doctors', icon: BriefcaseMedicalIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: ClipboardListIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: SettingsIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-teal-100 hover:text-teal-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-teal-100 text-teal-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
