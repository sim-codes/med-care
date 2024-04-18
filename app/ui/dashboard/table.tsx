"use client";

import { GripVerticalIcon } from "lucide-react";
import Image from "next/image";
import User from "@/public/images/user.avif";
import GetPatientsData from '@/app/lib/actions';
import Pagination from '@/app/ui/dashboard/patients/pagination';

export default function PatientTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const data = GetPatientsData(currentPage);
  const patients = data?.results;
  const allPages = data?.pages || 1;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="border border-gray-200 rounded-lg p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Patient Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date In
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Diagnostic
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                patients?.map((patient, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src={User}
                            className="rounded-xl"
                            width={28}
                            height={28}
                            alt={`Profile picture`}
                        />
                            <p>{patient.full_name}</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">Hunger</td>
                    <td className="whitespace-nowrap px-3 py-3 text-yellow-600">{patient.status}</td>
                    <td className="whitespace-nowrap py-3">
                    <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2.5C4.5 1.67157 3.8284 1 3 1C2.1716 1 1.5 1.67157 1.5 2.5C1.5 3.32843 2.1716 4 3 4C3.8284 4 4.5 3.32843 4.5 2.5Z" stroke="#676767" stroke-width="1.5"/>
                      <path d="M4.5 10C4.5 9.1716 3.8284 8.5 3 8.5C2.1716 8.5 1.5 9.1716 1.5 10C1.5 10.8284 2.1716 11.5 3 11.5C3.8284 11.5 4.5 10.8284 4.5 10Z" stroke="#676767" stroke-width="1.5"/>
                      <path d="M4.5 17.5C4.5 16.6716 3.8284 16 3 16C2.1716 16 1.5 16.6716 1.5 17.5C1.5 18.3284 2.1716 19 3 19C3.8284 19 4.5 18.3284 4.5 17.5Z" stroke="#676767" stroke-width="1.5"/>
                    </svg>

                    </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={allPages} />
        </div>
        
      </div>
    </div>
  );
}