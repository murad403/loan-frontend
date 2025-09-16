import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import AllClients from "./AllClients";
import PendingClients from "./PendingClients";
import ApprovedClients from "./ApprovedClients";
import RejectedClients from "./RejectedClients";

const ClientList = ({clientList}) => {
  // console.log(clientList.allClients);
  const [filter, setFilter] = useState(false);
  return (
    <div className="bg-white p-4 rounded-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg">Client List</h3>
        <button onClick={() => setFilter(!filter)} className="flex items-center gap-3 border border-gray-300 px-3 rounded-sm py-1 cursor-pointer">
          <CiFilter size={18} /> <span className="text-sm">Filter</span>
        </button>
      </div>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="All Clients" defaultChecked/>
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <AllClients allClients={clientList.allClients}></AllClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Pending" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <PendingClients></PendingClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Approved" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <ApprovedClients></ApprovedClients>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Rejected" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <RejectedClients></RejectedClients>
  </div>
</div>
      
    </div>
  );
};

export default ClientList;
