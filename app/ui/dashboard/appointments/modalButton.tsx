"use client";

import { CirclePlusIcon } from "lucide-react";
import { Modal } from "@/app/ui/dashboard/appointmentModal";
import { useState } from "react";

export default function ModalButton() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setOpen(true)} className="bg-[#00E7BD] rounded-lg w-full p-3 text-white">
            <div className="flex flex-row gap-2 justify-center">
                <CirclePlusIcon />
                <p>Add Appointment</p>
                </div>
            </button>
            <Modal open={open} onClose={() => setOpen(false)}></Modal>
        </div>
    )
}