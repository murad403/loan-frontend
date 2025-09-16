import React from 'react';
import ClientStatus from '../components/LenderDashBoard/ClientStatus';
import ClientList from '../components/LenderDashBoard/ClientList';

const LenderDashBoard = () => {
    return (
        <div className='md:space-y-7 space-y-5'>
            <ClientStatus></ClientStatus>
            <ClientList></ClientList>
        </div>
    );
};

export default LenderDashBoard;