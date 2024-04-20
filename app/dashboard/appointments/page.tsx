import { FilterIcon} from "lucide-react"
import AppointmentTable from "@/app/ui/dashboard/appointmentTable"
import ModalButton from "@/app/ui/dashboard/appointments/modalButton";


export default function Page() {
    
    return <main className="p-10">
        <div className="grid grid-flow-col grid-cols-3">
            <h1 className="font-bold text-4xl col-span-2">Appointments</h1>

            <div className="grid grid-flow-col grid-cols-2 gap-2">
                
                <button className="bg-[#EEFFFC] rounded-lg w-30 p-3 place-self-end text-[#00E7BD]">
                    <div className="flex flex-row gap-2 justify-center">
                        <FilterIcon />
                        <p>Filter</p>
                    </div>
                </button>
                
                <ModalButton />
            </div>
            
        </div>

        <AppointmentTable />
    </main>
}