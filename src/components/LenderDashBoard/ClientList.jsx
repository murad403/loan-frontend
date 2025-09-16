import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const ClientList = () => {
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Pending" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Approved" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Rejected" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</div>
      
    </div>
  );
};

export default ClientList;
