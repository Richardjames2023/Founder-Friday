import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomContainer from './customeContainer/CustomeContainer';
import CustomButton from './customButton/CustomButton';
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from '../assets/Frame 8.png'

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

   // Function to determine if the link is active
   const isActive = (path) => location.pathname === path ?  'text-purple-700 font-semibold' : '';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-lg sticky top-0 w-full z-20 bg-white mb-2'>
      <CustomContainer className="">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="w-52">
              <img src={logo} alt="Logo" className="mr-3" />
            </div>
            <div className="flex items-center">
              <nav className={`md:flex md:items-center mr-8 ${isOpen ? 'block' : 'hidden '}`}>
                <Link to="/" className={`block md:inline-block px-4 py-2 ${isActive('/')}`}>Home</Link>
                <Link to="/about" className={`block md:inline-block px-4 py-2 ${isActive('/about')}`}>About Us</Link>
                <Link to="/gallery" className={`block md:inline-block px-4 py-2 ${isActive('/gallery')}`}>Gallery</Link>
                <Link to="/contact" className={`block md:inline-block px-4 py-2 ${isActive('/contact')}`}>Contact Us</Link>
              </nav>
              <CustomButton 
                width="w-36"
                color="bg-white" 
                textColor='text-purple-900'
                borderRadius="rounded-lg" 
                borderRadiusColor="border-purple-800"
                icon={IoIosArrowRoundForward} 
                onClick={() => alert('Button Clicked!')}
                className="ml-4" // Add margin to the left for spacing
              >
                Register
              </CustomButton>
            </div>
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};