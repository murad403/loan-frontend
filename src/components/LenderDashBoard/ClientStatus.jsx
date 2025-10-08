import { LuUsers } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const ClientStatus = ({creditRequestStatus}) => {
    return (
        <div className="flex flex-col md:flex-row md:gap-5 gap-3">
            <div className="flex w-full items-center gap-3 p-4 bg-white rounded-sm">
                <div className="bg-red-300 p-2 inline-block rounded-full">
                    <LuUsers size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight text-gray-900'>Total Clients</h3>
                    <p className='text-red-950 text-xl'>{creditRequestStatus?.totalClients}</p>
                </div>
            </div>
            <div className="flex items-center w-full gap-3 p-4 bg-white rounded-sm">
                <div className="bg-green-300 p-2 inline-block rounded-full">
                    <IoCheckmarkDoneCircleOutline size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight text-gray-900'>Approved Clients</h3>
                    <p className='text-green-700 text-xl'>{creditRequestStatus?.approvedClients}</p>
                </div>
            </div>
            <div className="flex w-full items-center gap-3 p-4 bg-white rounded-sm">
                <div className="bg-yellow-300 p-2 inline-block rounded-full">
                    <MdAccessTime size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight text-gray-900'>Pending Decisions</h3>
                    <p className='text-yellow-950 text-xl'>{creditRequestStatus?.pendingClients}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientStatus;