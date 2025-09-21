import React, { useState } from 'react';
import ClientsDetailsModal from './modal/ClientsDetailsModal';
import { IoEyeOutline } from 'react-icons/io5';

const PendingClients = ({pendingClients}) => {
  const [actionId, setActionId] = useState(null);
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>City</th>
              <th>Credit Score</th>
              <th>Amount Requested</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              pendingClients.length > 0 &&
              pendingClients.map((client, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{client?.creditInfo?.lacation}</td>
                  <td>{client?.financialInfo?.creditScore}/100</td>
                  <td>${client?.financialInfo?.loanAmount}</td>
                  <td><span className="text-[11px] py-[2px] bg-yellow-200 rounded-xl px-2 text-yellow-800">{client?.status}</span></td>
                  <td>
                    <button onClick={()=>{document.getElementById('my_modal_2').showModal(); setActionId(client?._id)}} className="cursor-pointer">
                      <IoEyeOutline size={18}/>
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_2" className="modal">
  <ClientsDetailsModal actionId={actionId} setActionId={setActionId}></ClientsDetailsModal>
</dialog>
        </div>
    );
};

export default PendingClients;