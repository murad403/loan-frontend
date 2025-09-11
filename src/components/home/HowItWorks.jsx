import React from "react";
import howItWorksData from "../../data/HowItWorks";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-3 md:py-5 lg:py-7">
      <div className="my-7 md:my-12 lg:my-16 mx-5 md:mx-14 lg:mx-24">
        <div className="text-center space-y-1 md:space-y-2 lg:space-y-3">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-red-950">
            How It Works
          </h1>
          <p className="text-sm">
            Get your credit score and suggested credit limit in just four simple
            steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-5 md:mt-8 lg:mt-10">
            {
            howItWorksData.map(step =>(
                <div key={step?.id} className="bg-white p-3 md:p-4 lg:p-5 rounded-sm space-y-1 shadow-md">
                  <p className="bg-red-200 p-2 inline-block rounded-full">{step?.icon && <step.icon />}</p>
                    <h2 className="font-bold text-lg text-red-950">{step.title}</h2>
                    <p className="text-sm text-gray-600">{step.description}</p>
                </div>
            ))
        }
        </div>
        <div className="bg-[#DBCBB9] p-2 md:p-4 lg:p-6 rounded-lg mt-10 md:mt-16 lg:mt-20 text-center space-y-2 md:space-y-3 lg:space-y-4 py-6 md:py-8 lg:py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-950">Ready to discover your credit potential?</h2>
          <p className="text-gray-700">Get your credit score now and see what credit limit you qualify for. It's quick, <br /> free, and completely transparent.</p>
          <button className="bg-red-950 text-gray-400 py-2 px-4 rounded-md text-sm cursor-pointer">Get Your Credit Score</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
