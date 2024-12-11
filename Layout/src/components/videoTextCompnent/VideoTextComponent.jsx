import React, { useState } from 'react';
import CustomButton from '../customButton/CustomButton';
import { IoIosArrowRoundForward } from "react-icons/io";

const VideoTextComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-6">
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[400px] md:h-[564px] bg-black">
        <video
          src="your-video-url.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
        ></video>
        <button
          className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition duration-300"
          onClick={() => alert('Play button clicked!')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-4.8-2.88A1 1 0 009 9.08v5.84a1 1 0 001.6.832l4.8-2.88a1 1 0 000-1.664z"
            />
          </svg>
        </button>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800">At Founder’s Friday, Every Friday Is a Learning Experience!</h3>
        <p className="text-gray-600 mt-10 mb-10">
        Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.
        </p>
        <CustomButton 
            width="w-44"
            color="bg-purple-700" 
            textColor='text-white'
            borderRadius="rounded-full" 
            borderRadiusColor="border-purple-800"
            icon={IoIosArrowRoundForward} 
            onClick={() => alert('Button Clicked!')}
            className="ml-4 mt-10" // Add margin to the left for spacing
            >
            Register
        </CustomButton>
      </div>
    </div>
  );
};

export default VideoTextComponent;
