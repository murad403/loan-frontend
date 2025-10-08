import React from "react";
import creditLimitData from "../../data/CreditLimit";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const CreditLimit = () => {
  return (
    <div className="my-7 md:my-12 lg:my-20 mx-5 md:mx-14 lg:mx-24">
      <div className="text-center space-y-1 md:space-y-2 lg:space-y-3">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-red-950">
          Credit Limit Tiers
        </h1>
        <p className="text-sm text-gray-700">
          Our system suggests credit limits based on your credit score range
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-5 md:mt-8 lg:mt-10">
        {
            creditLimitData.map((tier) => (
                <div key={tier?.id} className={`border border-gray-200 rounded-lg shadow p-5 space-y-3 `} style={{backgroundColor: tier?.color}}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[16px] font-semibold text-gray-900">{tier?.tag}</h2>
                        <p className="text-[11px] bg-yellow-200 px-1 rounded-lg text-red-950">{tier?.scoreRange}</p>
                    </div>
                    <p className="text-lg font-medium text-red-950">{tier?.FCFA} FCFA</p>
                    <p className="text-sm text-gray-800">{tier?.description}</p>
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <ul className="text-gray-700">
                        {tier?.facilities.map((facility, index) => (
                            <li key={index} className="text-sm flex  items-center gap-1"><IoCheckmarkDoneCircleOutline className="text-blue-600" />{facility}</li>
                        ))}
                    </ul>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default CreditLimit;
