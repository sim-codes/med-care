import { GripVerticalIcon } from "lucide-react";
import Image from "next/image";
import User from "@/public/images/user.avif";

export default function AppointmentTable() {

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="border border-gray-200 rounded-lg md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Patient Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Visit Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Assigned Doctor
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
                    <td className="whitespace-nowrap px-3 py-3">#280301</td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">9:30-11:30 pm</td>
                    <td className="whitespace-nowrap px-3 py-3 flex">Dr. Abraham Wale <GripVerticalIcon /></td>
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
                            <p>Solomon King</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">#280301</td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">9:30-11:30 pm</td>
                    <td className="whitespace-nowrap px-3 py-3 flex">Dr. Abraham Wale <GripVerticalIcon /></td>
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
                            <p>Solomon King</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">#280301</td>
                    <td className="whitespace-nowrap px-3 py-3">March 18, 2024</td>
                    <td className="whitespace-nowrap px-3 py-3">9:30-11:30 pm</td>
                    <td className="whitespace-nowrap px-3 py-3 flex">Dr. Abraham Wale <GripVerticalIcon /></td>
                </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}