import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center py-2 bg-gray-100 px-4 md:px-16 lg:px-20">
        <Link to="/">
          <img src={logo} alt="logo" className="w-15 md:w-18 lg:w-20" />
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-3 text-[15px] text-gray-600 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-red-900 rounded-sm px-2 text-white text-[13px] py-1 cursor-pointer hidden md:block">
          <Link to="/signup">Sign Up</Link>
        </button>

        {/* responsive menu------------------------------------- */}
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <RiMenu2Line size={20} />
        </button>
      </div>
      <div className={menu ? "block md:hidden" : "hidden"}>
        <div className="relative">
          <ul className="text-[14px] text-gray-600 w-full absolute top-0 right-0 bg-gray-200 px-7 py-4 z-10">
            <li>
              <NavLink to="/" onClick={() => setMenu(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenu(false)}>About</NavLink>
            </li>
            <button className="bg-red-900 rounded-sm mt-2 px-2 text-white text-[13px] py-1 cursor-pointer">
          <Link to="/register">Sign Up</Link>
        </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
