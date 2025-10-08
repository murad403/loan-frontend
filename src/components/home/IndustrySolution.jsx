import { FaLongArrowAltRight } from "react-icons/fa";
import industrySolutions from "../../data/IndustrySolution.js";
import useProfileInfo from "../../hooks/useProfileInfo.jsx";
import { useAuthContext } from "../../providers/AuthProviders.jsx";
import { Link } from "react-router-dom";

const IndustrySolution = () => {
  const {profileInfo} = useProfileInfo();
  const {user} = useAuthContext();
  return (
    <div className="py-7 pd:my-12 lg:py-16 px-5 md:px-14 lg:px-24 bg-gray-100">
      <div className="text-center space-y-1 md:space-y-2 lg:space-y-3">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-red-950">
          Our Industry Solutions
        </h1>
        <p className="text-sm">
          We provide specialized lending solutions across multiple industries,
          tailored to meet the unique needs of each sector{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-5 md:mt-8 lg:mt-12">
        {industrySolutions.map((solution) => (
          <div
            key={solution?.id}
            className="p-5 border border-gray-300 rounded-lg shadow space-y-2 bg-white"
          >
            <p className="text-red-900 bg-gray-100 inline-block p-2 rounded-lg">
              {solution?.icon && <solution.icon />}
            </p>
            <h2 className="text-red-900 text-md font-semibold">
              {solution?.title}
            </h2>
            <p className="text-sm text-gray-700">{solution?.description}</p>
          </div>
        ))}
        <div className="p-5 border border-gray-300 rounded-lg shadow space-y-2 bg-red-900 text-gray-300">
          <h2 className="text-md font-semibold">Need a Custom Solution?</h2>
          <p className="text-sm">
            Don't see your industry? We offer customized lending solutions
            tailored to your specific business needs.
          </p>
          <Link to={user?.role === "admin" ? "/lender" : profileInfo?.data ? "/dashboard" : user ? "/complete-profile" : "/sign-in"} >
            <button className="text-sm text-gray-800 bg-gray-300 px-3 flex items-center gap-2 py-1 rounded-sm cursor-pointer">Get Started as Client <FaLongArrowAltRight size={16} /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolution;
