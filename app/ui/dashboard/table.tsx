"use client";

import { MoreTableIcon } from "../icons";
import Image from "next/image";
import User from "@/public/images/user.avif";
import GetPatientsData from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/patients/pagination';
import { PatientTableSkeleton } from "./skeletons";

export default function PatientTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const {data, isLoading} = GetPatientsData(currentPage);
  const patients = data?.results;
  const allPages = data?.pages || 1;

  if (isLoading) {
    return <PatientTableSkeleton />;
  }

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
                  Gender
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  School ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  School Role
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
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
                            src={patient.image || User}
                            className="rounded-xl"
                            width={28}
                            height={28}
                            alt={`Profile picture`}
                        />
                            <p>{patient.full_name}</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{patient.gender}</td>
                    <td className="whitespace-nowrap px-3 py-3">{patient.school_id}</td>
                    <td className="whitespace-nowrap px-3 py-3">{patient.school_role}</td>
                    <td className="whitespace-nowrap py-3 flex gap-1">
                      {patient.status}
                      <MoreTableIcon />
                    </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="mt-2 flex w-full justify-end">
          <Pagination totalPages={allPages} />
        </div>
        
      </div>
    </div>
  );
}