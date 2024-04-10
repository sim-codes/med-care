import Link from 'next/link';
import medCareLogo from '@/public/medcare-logo.svg';
import Calendar from 'react-calendar';

export default function RightNav() {
  return (
    <div className="flex m-2 h-100 w-full flex-col
    md:col-span-6 border border-gray-200 rounded-xl">
      <Calendar className='react-calendar' />
    </div>
  );
}
