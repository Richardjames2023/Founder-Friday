// import React from "react";
// import useVerticalSlider from "../customeHook/useVerticalSlider";

// const VerticalTextSlider = () => {
//   useVerticalSlider("text-slider");

//   return (
//     <div className="h-[200px] overflow-hidden relative">
//       <div className="text-slider" id="text-slider">
//         <p className="text-xl">Vertical Slider Text 1</p>
//         <p className="text-xl">Vertical Slider Text 2</p>
//         <p className="text-xl">Vertical Slider Text 3</p>
//         <p className="text-xl">Vertical Slider Text 4</p>
//       </div>
//     </div>
//   );
// };

// export default VerticalTextSlider;


import React, { useState, useEffect } from "react";

const VerticalTextSlider = () => {
  const texts = [
    "Kaduna",
    "Abuja",
    "Kano",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop back to the start
    }, 3000); // Adjust time interval (3 seconds per slide)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [texts.length]);

  return (
    <div className="h-[80px] overflow-hidden flex items-center">
      {/* Viewport area */}
      <div
        className="transition-transform duration-1000 ease-in-out flex flex-col"
        style={{
          transform: `translateY(-${currentIndex * 100}px)`, // Move text vertically
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className="h-[100px] flex items-center justify-center font-bold"
          >
            <p className="text-4xl text-purple-800">  {text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTextSlider;
