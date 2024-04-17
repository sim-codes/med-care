'use client';

import { HomeIcon, PatientIcon,
  AppointmentIcon, ReportIcon,
  DoctorIcon, SettingIcon } from '@/app/ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dasboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Appointments',
    href: '/dashboard/appointments',
    icon: AppointmentIcon,
  },
  { name: 'Patients', href: '/dashboard/patients', icon: PatientIcon },
  { name: 'Doctors', href: '/dashboard/doctors', icon: DoctorIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: ReportIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: SettingIcon },
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-[#676767] font-medium hover:bg-gray-100 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-teal-50 border border-[#00E7BD]': pathname === link.href,
              },
            )}
          >
            <LinkIcon />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
