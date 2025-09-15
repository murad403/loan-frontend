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
    <div className="flex gap-7 bg-gray-100">
      <div className="w-[30%] bg-red-950 px-4 rounded-tr-3xl rounded-br-3xl">
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
        <div className='mt-10'>
                        <button className='flex items-center gap-3 font-medium text-red-600 cursor-pointer text-[16px]'><PiSignOutFill size={19}/>Sign Out</button>
                    </div>
      </div>
      <div className="w-full py-10 min-h-screen">
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
