import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-red-900 w-full px-5 py-6 md:px-14 lg:px-18 text-gray-300">
      <div className=" flex justify-start md:justify-between items-start gap-7 md:gap-0 flex-col md:flex-row">
        <div>
          <img className="bg-white p-2 rounded-xl" src={logo} alt="Logo" />
          <p className="text-sm mt-2">
            Empowering financial decisions through transparent credit scoring <br />
            and connecting borrowers with trusted lenders.
          </p>
        </div>
        <div>
            <h3 className="text-md font-medium">Quick Links</h3>
            <ul className="text-sm">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
        <div>
            <h3 className="text-md font-medium">Contact Us</h3>
            <ul className="text-sm ">
                <li className="flex items-center justify-start gap-1"><CiLocationOn size={17}/>123 Finance Street Douala, Cameroon</li>
            </ul>
            <ul className="text-sm">
                <li className="flex items-center justify-start gap-1"><CiPhone size={17}/>+237 123 456 789</li>
            </ul>
            <ul className="text-sm">
                <li className="flex items-center justify-start gap-1"><MdOutlineMailOutline size={17}/>info@creditmatch.com</li>
            </ul>
        </div>
      </div>
      <div className="divider divider-primary"></div>
      <div className="flex justify-between items-center flex-col md:flex-row text-sm">
        <p>© 2025 GUEHI AND CO. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
