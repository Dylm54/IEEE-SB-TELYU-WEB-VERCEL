import SidebarDashboard from "../components/SidebarDashboard";
import TableNews from "../components/TableNews";
import DashboardNav from "../components/DashboardNav";
import { Toaster } from "sonner";

export const DashboardNews = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]

    return (
        <>
            <Toaster richColors position="top-center" />
            <DashboardNav />
            <div className="bg-[#F8F8F8] w-full h-[100vh] flex">
            
            <SidebarDashboard />
            <div className='flex w-full h-full justify-center items-center p-0 sm:p-10'>
                <div className='bg-white flex w-full h-full rounded-2xl py-10 px-5 sm:px-12 overflow-scroll'>               
                    <TableNews />
                </div>
            </div>
        </div>
        </>
        

    )
}