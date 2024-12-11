import React from "react";
import CustomButton from "./customButton/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

const CustomLayout = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Title at the top-left */}
      <div className="text-left">
        <h3 className="text-xl text-purple-700 font-semibold">Sponsor The Next Friday</h3>
      </div>

      {/* Centered Title */}
      <div className="flex justify-center ">
        <h2 className="w-[350px] text-4xl font-bold">Why Sponsor Founders Friday?</h2>
      </div>

      {/* Row with two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[1200px] mx-auto">
        {/* Left Column */}
        <div className="w-[460px] border shadow-lg border-purple-400 rounded-[5px]">
          {/* Fully rounded text tags */}
          <div className="flex justify-around flex-wrap w-[450px] gap-4 p-2">
            <div className=" w-[200px] h-[200px] flex items-center justify-center flex-col p-4 border text-center rounded-full bg-purple-300">
              <h5 className="font-semibold">Networking Opporturnity</h5>
              <p className="text-sm">Connect with industry leaders, founders, and potential partners.</p>
            </div>
            <div className=" w-[200px] h-[200px] flex items-center justify-center flex-col border p-4 text-center rounded-full bg-purple-200">
              <h5 className="font-semibold">Community Impact</h5>
              <p className="text-sm">Support the growth and development of the startup ecosystem.</p>
            </div>
            <div className=" w-[200px] h-[200px] flex items-center justify-center flex-col p-4 border text-center rounded-full bg-purple-200">
              <h5 className="font-semibold">Brand Associations</h5>
              <p className="text-sm">Align your brand with innovation and entrepreneurial success.</p>
            </div>
            <div className=" w-[200px] h-[200px] flex items-center justify-center flex-col p-4  border text-center rounded-full bg-purple-300">
              <h5 className="font-semibold">Visibility</h5>
              <p className="text-sm">Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {/* Title and Subtitle */}
          <h3 className="text-lg font-bold mb-2">How To Sponsor</h3>
          <p className="text-gray-600 mb-4 italic">Ready To Make an Impact ?</p>
          <p className="text-gray-600 mb-4">Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>

          {/* Form */}
          <form className="space-y-4">
            {/* Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div>
                <CustomButton
                    width="w-1/3"
                    color="bg-white"
                    textColor="text-purple-800"
                    borderRadius="rounded-[5px]"
                    borderRadiusColor="border-purple-800"
                    icon={IoIosArrowRoundForward}
                    onClick={() => alert('Button Clicked!')}
                    className="ml-4 mt-20" // Add margin to the left for spacing
                >
                    Register
                </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomLayout;
