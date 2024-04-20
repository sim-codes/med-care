'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { GetPatientsRecord } from '../lib/data';
import { useState } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(false);

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const { data, isLoading } = GetPatientsRecord(searchParams.get('query')?.toString() || '', 1);

  return (
    <div className="grid gap-4">

    <div className="relative flex flex-1 flex-shrink-0 gap-3">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }
      }
        defaultValue={searchParams.get('query')?.toString()}
      />

      <button
      className='w-20 border border-gray-200 p-2 rounded-lg hover:bg-gray-100'
      onClick={() => {
        setSearchTerm(!searchTerm);
      }}
      >
        {
          (!searchTerm) ? "Search" : "Close"
        }
      </button>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>

      {
        searchTerm && <SearchTable results={data?.results}/>
      }
    </div>
  );
}

function SearchTable({
  results,
}: {
  results: any;
}) {

  return (
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
                  Diagnosis
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                results?.map((result: any, i: number) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                        {/* <Image
                            src={result || User}
                            className="rounded-xl"
                            width={28}
                            height={28}
                            alt={`Profile picture`}
                        /> */}
                            <p>{result.patient.name}</p>
                    </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{result.date_in}</td>
                    <td className="whitespace-nowrap px-3 py-3">{result.diagnosis}</td>
                    <td className="whitespace-nowrap py-3 flex gap-1">
                      {result.patient.status}
                      {/* <MoreTableIcon /> */}
                    </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
  )
}