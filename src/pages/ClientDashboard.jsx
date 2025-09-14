import React from 'react';
import CreditScore from '../components/ClientDashBoard/CreditScore';
import CreditLimit from '../components/ClientDashBoard/CreditLimit';
import ApplicationStatus from '../components/ClientDashBoard/ApplicationStatus';
import FinancialSummary from '../components/ClientDashBoard/FinancialSummary';
import RecentActivity from '../components/ClientDashBoard/RecentActivity';

const ClientDashboard = () => {
    return (
        <div className='bg-gray-100 px-4 md:px-16 py-5 md:py-10 space-y-7'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-950'>M. GUEHI - Dashboard</h1>
            <div className='flex flex-col md:flex-row gap-4 md:mt-10 mt-5'>
                <div className='w-full md:w-[70%] bg-white rounded-sm shadow-lg'>
                    <CreditScore></CreditScore>
                </div>
                <div className='w-full md:w-[30%] space-y-3'>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <CreditLimit></CreditLimit>
                    </div>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <ApplicationStatus></ApplicationStatus>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <FinancialSummary></FinancialSummary>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <RecentActivity></RecentActivity>
            </div>
        </div>
    );
};

export default ClientDashboard;