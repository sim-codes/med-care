import Image from 'next/image';
import medCareLogo from '@/public/medcare-logo.svg';

import doctorIcon from '@/public/images/icons/doctor.svg';
import apppointmentIcon from '@/public/images/icons/appointment.svg';
import reportIcon from '@/public/images/icons/report.svg';
import homeIcon from '@/public/images/icons/home.svg';
import settingIcon from '@/public/images/icons/setting.svg';
import logoutIcon from '@/public/images/icons/logout.svg';
import patientIcon from '@/public/images/icons/patient.svg';

import doctorCardIcon from '@/public/images/icons/doctor-card.svg';
import nurseCardIcon from '@/public/images/icons/nurse-card.svg';
import patientCardIcon from '@/public/images/icons/patients-card.svg';
import appointmentCardIcon from '@/public/images/icons/appointment-card.svg';
import moreTableIcon from '@/public/images/icons/more.svg';


import Link from 'next/link';


export function Logo() {
    return (
    <Link href="/">
        <Image src={medCareLogo} alt="MedCare Logo" width="250" />
    </Link>
    )
}

export function DoctorIcon() {
    return (
        <Image src={doctorIcon} alt="Doctor Icon" width="20" />
    )
}

export function AppointmentIcon() {
    return (
        <Image src={apppointmentIcon} alt="Appointment Icon" width="20" />
    )
}

export function ReportIcon() {
    return (
        <Image src={reportIcon} alt="Report Icon" width="20" />
    )
}

export function HomeIcon() {
    return (
        <Image src={homeIcon} alt="Home Icon" width="20" />
    )
}

export function SettingIcon() {
    return (
        <Image src={settingIcon} alt="Setting Icon" width="20" />
    )
}

export function LogoutIcon() {
    return (
        <Image src={logoutIcon} alt="Logout Icon" width="20" />
    )
}

export function PatientIcon() {
    return (
        <Image src={patientIcon} alt="Patient Icon" width="20" />
    )
}

export function DoctorCardIcon() {
    return (
        <Image src={doctorCardIcon} alt="Doctor Card Icon" width="20" />
    )
}

export function NurseCardIcon() {
    return (
        <Image src={nurseCardIcon} alt="Nurse Card Icon" width="20" />
    )
}

export function PatientCardIcon() {
    return (
        <Image src={patientCardIcon} alt="Patient Card Icon" width="20" />
    )
}

export function AppointmentCardIcon() {
    return (
        <Image src={appointmentCardIcon} alt="Appointment Card Icon" width="20" />
    )
}

export function MoreTableIcon() {
    return (
        <Image src={moreTableIcon} alt="More Table Icon" />
    )
}