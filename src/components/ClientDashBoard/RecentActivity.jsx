import { VscGraph } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";

const RecentActivity = () => {
    return (
        <div>
            <h3 className='bg-gray-300 text-black p-4 font-bold rounded-t-sm'>Recent Activity</h3>
            <div className='px-4 py-6 space-y-4'>
                <div className="bg-gray-50 rounded-sm items-center justify-between p-3 flex gap-2 border border-gray-300">
                    <div className='flex items-center gap-3'>
                        <div className="bg-yellow-200 p-2 rounded-full">
                            <VscGraph size={18} className="text-yellow-700"/>
                        </div>
                        <h3 className="text-gray-700 text-[15px] font-semibold">Credit Score Calculator</h3>
                    </div>
                    <p className="text-sm text-gray-700">Today</p>
                </div>
                <div className="bg-gray-50 rounded-sm items-center justify-between p-3 flex gap-2 border border-gray-300">
                    <div className='flex items-center gap-3'>
                        <div className="bg-red-200 p-2 rounded-full">
                            <IoDocumentTextOutline size={18} className="text-red-700"/>
                        </div>
                        <h3 className="text-gray-700 text-[15px] font-semibold">Profile information submitted</h3>
                    </div>
                    <p className="text-sm text-gray-700">Today</p>
                </div>
                <div className="bg-gray-50 rounded-sm items-center justify-between p-3 flex gap-2 border border-gray-300">
                    <div className='flex items-center gap-3'>
                        <div className="bg-gray-200 p-2 rounded-full">
                            <AiOutlineEye size={18} className="text-gray-700"/>
                        </div>
                        <h3 className="text-gray-700 text-[15px] font-semibold">Account created</h3>
                    </div>
                    <p className="text-sm text-gray-700">Today</p>
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;