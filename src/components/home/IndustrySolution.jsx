import { FaLongArrowAltRight } from "react-icons/fa";
import industrySolutions from "../../data/IndustrySolution.js";

const IndustrySolution = () => {
  return (
    <div className="my-7 md:my-12 lg:my-16 mx-5 md:mx-14 lg:mx-24">
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
            className="p-5 border border-gray-300 rounded-lg shadow space-y-2"
          >
            <p className="text-red-900 bg-gray-100 inline-block p-2 rounded-lg">
              {solution?.icon && <solution.icon />}
            </p>
            <h2 className="text-red-900 text-md font-semibold">
              {solution?.title}
            </h2>
            <p className="text-sm">{solution?.description}</p>
          </div>
        ))}
        <div className="p-5 border border-gray-300 rounded-lg shadow space-y-2 bg-red-900 text-gray-300">
          <h2 className="text-md font-semibold">Need a Custom Solution?</h2>
          <p className="text-sm">
            Don't see your industry? We offer customized lending solutions
            tailored to your specific business needs.
          </p>
          <button className="text-sm bg-gray-300 px-3 flex justify-between items-center gap-2 py-1 rounded-sm cursor-pointer text-gray-700">
            Get Started as Client <FaLongArrowAltRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolution;
