import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '@/app/ui/dashboard/topnav';
import { cookies } from 'next/headers';
import User from '@/public/images/user.avif';

export default async function Layout({ children }: { children: React.ReactNode }) {

    const user= await cookies().get('MedUser')?.value;
    const userJson = JSON.parse(user as string);
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
            <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-7">
                <TopNav 
                full_name={`${userJson.firstname} ${userJson.lastname}`}
                avatar={userJson.image || User}
                role={userJson.role}
                />
                {children}
            </div>
        </div>
    );
}