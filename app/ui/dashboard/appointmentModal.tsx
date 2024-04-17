import { useRouter } from 'next/navigation';
import { AppointmentForm } from './addAppointmentForm';

type ModalProps = {
    open: boolean;
    onClose: () => void;
};

export function Modal({ open, onClose }: ModalProps) {
  return (
    // <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
    <div className={`fixed inset-0 flex justify-center items-center
    transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `} onClick={onClose}>
      <div className={`bg-white rounded-lg shadow-lg
      transition-all max-w-md w-full
      ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
      onClick={(e) => e.stopPropagation()}
      >
        <div className='grid grid-cols-2 content-center border-b-2 p-6'>
            <h3 className="text-2xl font-sm text-gray-900">Add Appointment</h3>
            <button className='text-black text-2xl place-self-end'
            onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L5 19M5 5L19 19" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
        </div>

        <div className="p-6">
            <AppointmentForm />
        </div>
      </div>
    </div>
  );
}