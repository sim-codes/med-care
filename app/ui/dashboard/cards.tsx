import { DoctorCardIcon, PatientCardIcon, AppointmentCardIcon, NurseCardIcon } from '@/app/ui/icons';
import { Stethoscope } from 'lucide-react';
import { lusitana } from '@/app/ui/fonts';
  
const iconMap = {
    doctors: DoctorCardIcon,
    patients: PatientCardIcon,
    staff: NurseCardIcon,
    appointments: PatientCardIcon,

};
  
export default function CardWrapper() {
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        <Card title="Total Doctors" value="20" type="doctors" />
        <Card title="Total Staff" value="50" type="staff" />
        <Card title="Total Patients" value="5K" type="patients" />
        <Card title="New Appointments" value="250" type="appointments" />
      </>
    );
}
  
export function Card({
    title,
    value,
    type,
 }: {
    title: string;
    value: number | string;
    type: 'doctors' | 'patients' | 'staff' | 'appointments';
}) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-white shadow-sm h-15 border border-[#F1F1F1]">
        <div className="flex p-4">
          <h3 className="text-sm font-medium text-[#676767]">{title}</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 py-4">
        <p
          className={`bg-white px-4 text-left text-2xl font-bold text-[#676767]`}
        >
          {value}
        </p>
        <div className={`h-5 w-5 text-gray-700 place-self-end me-4`}>
          {Icon ? <Icon /> : null}
        </div>
        </div>
      </div>
    );
}
  