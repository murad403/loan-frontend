import { IoEyeOutline } from "react-icons/io5";
import ClientsDetailsModal from "./modal/ClientsDetailsModal";
import { useState } from "react";

const AllClients = ({allClients}) => {
    const [actionId, setActionId] = useState(null);
    // console.log(actionId);
    return (
        <div>
            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
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
              allClients.length > 0 &&
              allClients.map((client, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{client?.creditInfo?.lacation}</td>
                  <td>{client?.financialInfo?.creditScore}/100</td>
                  <td>${client?.financialInfo?.loanAmount}</td>
                  <td><span className={`text-[11px] py-[2px]  rounded-xl px-2  ${client?.status === "approve" ? "text-green-700 bg-green-200" : client?.status === "reject" ? "text-red-700 bg-red-200" : "bg-yellow-200 text-yellow-800"}`}>{client?.status}</span></td>
                  <td>
                    <button onClick={()=>{document.getElementById('my_modal_3').showModal(); setActionId(client?._id)}} className="cursor-pointer">
                      <IoEyeOutline size={18}/>
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_3" className="modal">
  <ClientsDetailsModal actionId={actionId} setActionId={setActionId}></ClientsDetailsModal>
</dialog>
        </div>
    );
};

export default AllClients;