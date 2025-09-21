import React, { useState } from 'react';
import ClientsDetailsModal from './modal/ClientsDetailsModal';
import { IoEyeOutline } from 'react-icons/io5';

const ApprovedClients = ({approvedClients}) => {
  const [actionId, setActionId] = useState(null);
  // console.log(actionId);
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
              approvedClients.length > 0 &&
              approvedClients.map((client, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{client?.creditInfo?.lacation}</td>
                  <td>{client?.financialInfo?.creditScore}/100</td>
                  <td>${client?.financialInfo?.loanAmount}</td>
                  <td><span className="text-[11px] py-[2px] bg-green-200 text-green-700 rounded-xl px-2">{client?.status}</span></td>
                  <td>
                    <button onClick={()=>{document.getElementById('my_modal_1').showModal(); setActionId(client?._id)}} className="cursor-pointer">
                      <IoEyeOutline size={18}/>
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
  <ClientsDetailsModal actionId={actionId} setActionId={setActionId}></ClientsDetailsModal>
</dialog>
        </div>
    );
};

export default ApprovedClients;