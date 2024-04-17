import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';

import { useForm } from 'react-hook-form';
import { AuthActions } from '@/app/auth/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


type FormData = {
    email: string;
    password: string;
};

export function AppointmentForm() {
    return(
        <form className="space-y-3 pt-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="name">Patient Name</label>
                    <input type="text" id="name" value={"Samuel Sophia"} name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="patientID">Email</label>
                    <input type="text" id="name" value={"#280322"} name="patientID" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="gender">Gender</label>
                    <select name="gender" id="" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" value={"08032437698"} name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="doctor">Doctor</label>
                    <input type="text" id="doctor" value={"Dr. Lilian O"} name="doctor" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="date">Date-Time</label>
                    <input type="datetime-local" id="date" name="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                </div>
            </div>

            <div className="grid grid-cols-1 mb-2">
                <div>
                    <label className="block text-sm font-medium text-gray-400" htmlFor="reason">Reason</label>
                    <textarea name="" id="" cols={30} rows={7}
                    className="mt-1 block resize-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    placeholder="Enter reason for visit"
                    ></textarea>
                </div>
            </div>

            <div>
            <Button className="mt-7 w-full">
                Add Appointment
            </Button>
            </div>
        </form>
    )
}