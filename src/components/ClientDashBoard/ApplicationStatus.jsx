import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const ApplicationStatus = () => {
    return (
        <div>
            <h3 className='bg-gray-200 p-4 font-bold rounded-t-sm'>Application Status</h3>
            <div className='px-4 py-7 space-y-3'>
                <div className="flex gap-2">
                    <IoCheckmarkDoneCircleOutline size={22} className="text-green-700" />
                    <div>
                        <h3 className="text-[16px] font-semibold text-gray-800">Profile Complete</h3>
                        <p className="text-sm text-gray-700">Your profile information is complete.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <IoCheckmarkDoneCircleOutline size={22} className="text-green-700" />
                    <div>
                        <h3 className="text-[16px] font-semibold text-gray-800">Score Generated</h3>
                        <p className="text-sm text-gray-700">Your credit score has been calculated.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationStatus;