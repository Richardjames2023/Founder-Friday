import React, { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from '../../assets/Ellipse 309.png'

const UserSlider = () => {
  // User Data
  const users = [
    {
      id: 1,
      image: Image,
      name: "Mr Belba Ngoy",
      quote: "Always a remarkable experience for my team and myself!",
    },
    {
      id: 2,
      image: Image,
      name: "Belba Smith",
      quote: "I loved the experience!",
    },
    {
      id: 3,
      image: Image,
      name: "Belba Johnson",
      quote: "Highly recommend this!",
    },
    {
      id: 4,
      image: Image,
      name: "Belba Brown",
      quote: "Great job, team!",
    },
    {
      id: 5,
      image: Image,
      name: "Belbay Wilson",
      quote: "Fantastic support and service!",
    },
  ];

  // State for the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next slide (next group of 3)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % users.length
    );
  };

  // Navigate to the previous slide (previous group of 3)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 3 : (prevIndex - 3 + users.length) % users.length
    );
  };

  // Get the current visible slides
  const visibleUsers = [
    users[currentIndex],
    users[(currentIndex + 1) % users.length],
    users[(currentIndex + 2) % users.length],
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">What DO Our Attendees Have To Say</h2>
        <p className="text-gray-600 mt-5">Well See For Yourself!</p>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto">
        {/* Arrows */}
        <div className="absolute -top-20 right-4 flex gap-2">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex justify-center items-center border border-purple-800 rounded-full hover:bg-gray-200"
          >
            <IoIosArrowRoundBack  className="text-black text-3xl"/>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex justify-center items-center border border-purple-800 rounded-full hover:bg-gray-200"
          >
            <IoIosArrowRoundForward className="text-black text-3xl" />
          </button>
        </div>

        {/* Slider Content */}
        <div className="flex gap-10 justify-center mt-20">
          {visibleUsers.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-80"
            >
              <span className="w-40 h-40 border border-purple-800 flex justify-center items-center rounded-full mb-4"><img
                src={user.image}
                alt={user.name}
                className="w-32 h-32 rounded-full transform transition-transform duration-300 hover:scale-110"
              /></span>
              <h3 className="text-lg font-semibold text-gray-700">
                {user.name}
              </h3>
              <p className="text-gray-600 mt-2 text-center">{user.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSlider;
