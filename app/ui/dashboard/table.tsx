import { GripVerticalIcon } from "lucide-react";
import Image from "next/image";
import User from "@/public/images/user.avif";

export default async function PatientTable() {

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
                <tr>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src={User}
                            className="rounded-xl"
                            width={28}
                            height={28}
                            alt={`Profile picture`}
                        />
                            <p>Solomon King</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">Skin rash and eczema</td>
                    <td className="whitespace-nowrap px-3 py-3 text-yellow-600">New Patient</td>
                    <td className="whitespace-nowrap px-3 py-3"><GripVerticalIcon /></td>
                </tr>

                <tr>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src={User}
                            className="rounded-xl"
                            width={28}
                            height={28}
                            alt={`Profile picture`}
                        />
                            <p>Ibrahim Michael</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">Skin rash and eczema</td>
                    <td className="whitespace-nowrap px-3 py-3 text-blue-500">In Treatment</td>
                    <td className="whitespace-nowrap px-3 py-3"><GripVerticalIcon /></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}