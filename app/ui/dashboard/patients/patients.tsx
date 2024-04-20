import Pagination from '@/app/ui/dashboard/patients/pagination';
import GetPatientsData from '@/app/lib/data';

export default function Patients({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page || '1');
    const data = GetPatientsData(currentPage);

    console.log(currentPage);
    return (
        <div>
            <p>Patients</p>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={3} />
            </div>
        </div>
    )
}