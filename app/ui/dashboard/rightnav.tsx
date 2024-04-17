import Calendar from 'react-calendar';

export default function RightNav() {
  return (
    <div className="flex m-2 h-100 w-85 flex-col justify-center md:grid pt-5
    md:col-span-6 border border-gray-200 rounded-xl">
      <Calendar className='react-calendar' />
    </div>
  );
}
