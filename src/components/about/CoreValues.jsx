import React from "react";
import coreValues from "../../data/CoreValues";

const CoreValues = () => {
  return (
    <div className="py-4 md:py-8 lg:py-14 justify-center gap-4 items-center px-5 md:px-14 lg:px-28 bg-gray-100">
      <div className="text-center space-y-1 md:space-y-2">
        <h1 className="text-red-950 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Core Values
        </h1>
        <p className="text-sm text-gray-800">
          The principle that guide everything we do a GUEHI and CO
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-5 md:mt-8 lg:mt-12">
        {coreValues.map((value) => (
          <div
            key={value?.id}
            className="p-5 border border-gray-300 rounded-lg shadow space-y-2 bg-white"
          >
            <p className="text-red-900 bg-gray-100 inline-block p-2 rounded-full">
              {value?.icon && <value.icon />}
            </p>
            <h2 className="text-red-900 text-md font-semibold">
              {value?.title}
            </h2>
            <p className="text-sm text-gray-700">{value?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
