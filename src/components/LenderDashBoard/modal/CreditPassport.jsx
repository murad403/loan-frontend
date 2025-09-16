import logo from "../../../assets/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";


const CreditPassport = ({creditInfo, email}) => {
    // console.log(creditInfo);
    return (
        <div className="border-b border-gray-300 pb-7">
            <h2 className="text-red-900 text-lg font-semibold">Credit Passport</h2>
            <div className="mt-4 flex md:gap-20 gap-3 flex-col md:flex-row">
                <div className="flex gap-2 flex-col md:flex-row">
                    <img className="w-8 h-8 rounded-full" src={logo} alt="Logo" />
                    <div>
                        <h3 className="text-[17px] font-semibold capitalize">{creditInfo?.clientName}</h3>
                        <div className="text-sm flex items-center gap-1">
                            <MdOutlineEmail/>
                            <p>{email}</p>
                        </div>
                        <div className="text-sm flex items-center gap-1">
                            <RiPhoneLine/>
                            <p>{creditInfo?.phone}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-sm flex items-center gap-1">
                        <CiCalendar/>
                        <p>{creditInfo?.dateOfBirth}</p>
                    </div>
                    <div className="text-sm flex items-center gap-1">
                        <CiLocationOn/>
                        <p>{creditInfo?.lacation}</p>
                    </div>
                    <div className="text-sm flex items-center gap-1">
                        <FiUser/>
                        <p>{creditInfo?.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditPassport;