import React from 'react'
import SidebarDashboard from '../components/SidebarDashboard'
import DashboardNav from '../components/DashboardNav'
import TableRecentActivities from '../components/TableRecentActivities'

function DashboardRecentActivities() {
    return (
        <>
            <DashboardNav />
            <div className="bg-[#F8F8F8] w-full h-[100vh] flex">
                <SidebarDashboard />
                <div className='flex w-full h-full justify-center items-center px-10 py-10'>
                    <div className='bg-white flex w-full h-full rounded-2xl py-10 px-5 sm:px-12 overflow-scroll'>
                        <TableRecentActivities />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardRecentActivities