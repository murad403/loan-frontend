import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import logo from "../assets/logo.png";
import { PiSignOutFill } from "react-icons/pi";

const LenderRoot = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const [isActive, setIsActive] = useState(pathname);
  return (
    <div className="flex flex-col md:flex-row gap-7 bg-gray-100">
      <div className="md:w-[30%] w-full bg-red-950 px-4 md:rounded-tr-3xl md:rounded-br-3xl">
        <div className="flex justify-center mt-5">
            <img className="bg-white p-2 rounded-xl" src={logo} alt="Logo" />
        </div>
        <div className="mt-7">
          <ul className="md:space-y-2 space-y-1 text-[15px] font-medium">
            {lenderLinks.map((link) => (
              <li key={link?.id}>
                <NavLink
                  onClick={() => setIsActive(link?.route)}
                  className={`${
                    isActive === link?.route
                      ? "bg-gray-400 border border-gray-500"
                      : ""
                  } w-full flex items-center gap-3 py-2 px-3 rounded-sm text-white`}
                  to={`${link?.route}`}
                  end
                >
                  {link?.icon}
                  {link?.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-10 pb-7'>
                        <button className='flex items-center gap-3 font-medium text-red-600 cursor-pointer text-[16px]'><PiSignOutFill size={19}/>Sign Out</button>
                    </div>
      </div>
      <div className="w-full md:py-10 py-4 px-4 min-h-screen">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-950 md:mb-5 mb-3">CreditFrist-Dashboard</h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
const lenderLinks = [
  {
    id: 1,
    title: "Dashboard",
    route: "/lender",
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    title: "Settings",
    route: "/lender/settings",
    icon: <CiSettings />,
  },
];
export default LenderRoot;
