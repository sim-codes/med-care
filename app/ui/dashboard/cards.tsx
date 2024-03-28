import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    UserIcon,
    CalendarDaysIcon,
    HandRaisedIcon,
  } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
  
const iconMap = {
    doctors: HandRaisedIcon,
    patients: UserGroupIcon,
    staff: UserIcon,
    appointments: CalendarDaysIcon,

};
  
export default function CardWrapper() {
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        <Card title="Total Doctors" value="20" type="doctors" iconColor="text-cyan-500" />
        <Card title="Total Staff" value="50" type="staff" iconColor="text-violet-900" />
        <Card title="Total Patients" value="5K" type="patients" iconColor="text-green-700" />
        <Card title="New Appointments" value="250" type="appointments" iconColor="text-orange-700" />
      </>
    );
}
  
export function Card({
    title,
    value,
    type,
    iconColor,
 }: {
    title: string;
    value: number | string;
    type: 'doctors' | 'patients' | 'staff' | 'appointments';
    iconColor: string;
}) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-white p-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 py-8">
        <p
          className={`bg-white px-4 text-left text-2xl font-bold`}
        >
          {value}
        </p>
        {Icon ? <Icon className={`h-5 w-5 text-gray-700 place-self-end me-4 ${iconColor}`} /> : null}
        </div>
      </div>
    );
}
  