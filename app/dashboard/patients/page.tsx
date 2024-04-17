import { FilterIcon, CirclePlusIcon } from "lucide-react"
import AppointmentTable from "@/app/ui/dashboard/appointmentTable"
// import { Modal } from "@/app/ui/dashboard/appointmentModal"

export default function Page() {
    // const [open, setOpen] = useState<boolean>(false);
    return (
        <main className="p-10">
            <div className="flex flex-row justify-between">
            <h1 className="font-bold text-4xl">Staff List</h1>

            <div className="flex flex-row gap-2">
                <div className="bg-teal-100 p-2 flex rounded-lg">
                    <FilterIcon className="h-5 w-5 text-[#00E7BD] place-self-end me-2" />
                    <p>Filter</p>
                </div>

                <div className="bg-[#00E7BD] p-2 flex rounded-lg">
                    <CirclePlusIcon className="h-5 w-5 text-white place-self-end me-2" />
                    <button className=" text-white">
                        Add Appointment
                    </button>
                    {/* <Modal open={open} onClose={() => setOpen(false)}></Modal> */}
                </div>
            </div>
        </div>
        {/* <AppointmentTable /> */}

        </main>
    )
}