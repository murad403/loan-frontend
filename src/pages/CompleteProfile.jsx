import React, { useState } from "react";
import { PiArrowElbowRightLight } from "react-icons/pi";
import PersonalInfo from "../components/completeProfile/PersonalInfo";
import ContactInfo from "../components/completeProfile/ContactInfo";
import FinancialInfo from "../components/completeProfile/FinancialInfo";


const CompleteProfile = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  
  // console.log(personalInfo, contactInfo);

  const steps = [
    { id: 1, label: "Personal", component: <PersonalInfo step={step} setStep={setStep} setPersonalInfo={setPersonalInfo}/> },
    { id: 2, label: "Contact", component: <ContactInfo step={step} setStep={setStep} setContactInfo={setContactInfo}/> },
    { id: 3, label: "Financial", component: <FinancialInfo step={step} setStep={setStep} personalInfo={personalInfo} contactInfo={contactInfo}/> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-5">
      <div className="w-full md:w-[80%] lg:w-[70%] bg-white p-5 shadow-lg rounded-sm">
        <div className="md:mb-10 mb-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-950 font-semibold">Complete Your Profile</h2>
            <p className="text-sm text-gray-700">Please provide accurate information to get the most accurate credit rating</p>
        </div>

      <div className="relative mb-8">
        {/*  Line */}
        <div className="absolute top-3 left-0 right-0 flex justify-between items-center">
          {steps.slice(0, -1).map((s, index) => (
            <div
              key={index}
              className={`h-1 flex-1 mx-2 ${
                step > s.id ? "bg-red-950" : "bg-gray-300"
              } transition-colors duration-300`}
            />
          ))}
        </div>

        {/*Circles */}
        <div className="flex justify-between relative z-10">
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center w-full">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-30 transition-colors duration-300 bg-gray-300
                ${
                  step > s.id
                    ? "bg-red-950 text-white"
                    : step === s.id
                    ? "bg-red-950 text-white"
                    : "border-gray-400 text-gray-600"
                }`}
              >
                {step > s.id ? (
                  <PiArrowElbowRightLight />
                ) : (
                  s.id
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  step >= s.id ? "font-bold text-red-950" : "text-gray-600"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* current component */}
      <div className="mb-8">{steps.find((s) => s.id === step).component}</div>

      {/* Buttons */}
      {/* <div className="flex justify-between">
        <button
          onClick={() => setStep((prev) => prev - 1)}
          disabled={step === 1}
          className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
        >
          <MdArrowBackIosNew />Back
        </button>
        {
          step === 3 
          ?
          <button
          className="px-4 py-2 rounded bg-red-950 text-white disabled:opacity-50 cursor-pointer"
        >
          Submit Application
        </button> :
        <button
          onClick={() => setStep((prev) => prev + 1)}
          type="submit"
          className="px-4 py-2 rounded bg-red-950 text-white disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
        }
      </div> */}
      </div>
    </div>
  );
};

export default CompleteProfile;
