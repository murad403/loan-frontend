import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import AllClients from "./AllClients";
import PendingClients from "./PendingClients";
import ApprovedClients from "./ApprovedClients";
import RejectedClients from "./RejectedClients";

const ClientList = ({clientList}) => {
  // console.log(clientList);
  const [filter, setFilter] = useState(false);
  return (
    <div className="bg-white p-4 rounded-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-gray-900">Client List</h3>
        <button onClick={() => setFilter(!filter)} className="flex items-center gap-3 border border-gray-300 px-3 rounded-sm py-1 cursor-pointer text-gray-700">
          <CiFilter size={18} /> <span className="text-sm">Filter</span>
        </button>
      </div>
      {/* name of each tab group should be unique */}
<div className="tabs text-red-950 space-x-4 space-y-4">
  <input type="radio" name="my_tabs_2" className="tab bg-gray-400 rounded-lg" aria-label="All Clients" defaultChecked/>
  <div className="tab-content p-10">
    <AllClients allClients={clientList.allClients}></AllClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab bg-gray-400 rounded-lg" aria-label="Pending" />
  <div className="tab-content p-10">
    <PendingClients pendingClients={clientList?.pendingClients}></PendingClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab bg-gray-400 rounded-lg" aria-label="Approved" />
  <div className="tab-content p-10">
    <ApprovedClients approvedClients={clientList?.successClients}></ApprovedClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab bg-gray-400 rounded-lg" aria-label="Rejected" />
  <div className="tab-content p-10">
    <RejectedClients rejectedClients={clientList?.rejectedClients}></RejectedClients>
  </div>
</div>
      
    </div>
  );
};

export default ClientList;
