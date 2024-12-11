import React from 'react';
import CustomContainer from './customeContainer/CustomeContainer';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from '../assets/footerLogo.png'
import CustomButton from './customButton/CustomButton';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" text-black border-t-4 border-t-gray-100 py-8">
     <CustomContainer className="py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className=" md:grid-cols-3 gap-4 mb-6">
          <div className='w-full mb-6'>
            <img src={footerLogo} alt="footerLogo" className='w-50' />
          </div>
          <div className='w-full flex flex-col justify-center items-center p-8 text-center'>
            <h2 className="w-[600px] text-2xl mb-10 font-bold">Want To Be A Part Of Abuja's Biggest Tech Community?</h2>

            <CustomButton 
            color="bg-white" 
            borderRadius="rounded-full" 
             textColor='text-purple-900'
            icon={ MdKeyboardDoubleArrowRight } 
            borderRadiusColor="border-purple-800"
            onClick={() => alert('Another Button Clicked!')}
            >
            Register For Our Next Event
            </CustomButton>
          </div>
        </div>

        {/* Row 2 */}
        <div className="border-t border-purple-600 py-2"></div>

        {/* Row 3: Social Media Icons and Menu Links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-purple-800 rounded-full flex justify-center items-center tex-white hover:text-purple-400">
              <FaFacebook size={20} className="text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-purple-800 rounded-full flex justify-center items-center tex-white hover:text-purple-400">
              <FaInstagram size={20} className='text-white' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-purple-800 rounded-full flex justify-center items-center tex-white hover:text-purple-400">
              <FaXTwitter size={20} className="text-white" />
            </a>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="text-purple-900 hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About Us</a>
            <a href="/services" className="hover:text-gray-400">Gallery</a>
            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
          </nav>
        </div>
      </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
