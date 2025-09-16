import { LuUsers } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const ClientStatus = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-5 gap-3">
            <div className="flex w-full items-center gap-3 p-4 bg-white rounded-sm">
                <div className="bg-red-300 p-2 inline-block rounded-full">
                    <LuUsers size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight'>Total Clients</h3>
                    <p className='text-red-950 text-xl'>10</p>
                </div>
            </div>
            <div className="flex items-center w-full gap-3 p-4 bg-white rounded-sm">
                <div className="bg-green-300 p-2 inline-block rounded-full">
                    <IoCheckmarkDoneCircleOutline size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight'>Approved Clients</h3>
                    <p className='text-green-700 text-xl'>2</p>
                </div>
            </div>
            <div className="flex w-full items-center gap-3 p-4 bg-white rounded-sm">
                <div className="bg-yellow-300 p-2 inline-block rounded-full">
                    <MdAccessTime size={23}/>
                </div>
                <div>
                    <h3 className='text-lg font-extralight'>Pending Decisions</h3>
                    <p className='text-yellow-950 text-xl'>6</p>
                </div>
            </div>
        </div>
    );
};

export default ClientStatus;