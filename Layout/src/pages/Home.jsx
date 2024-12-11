import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa'; // Import an icon from React Icons
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import CustomSection from '../components/customeSection/CustomeSection';
import CustomContainer from '../components/customeContainer/CustomeContainer';
import FAQ from '../components/FAQ'
import UserSlider from '../components/userSlider/UserSlider';
import CustomButton from '../components/customButton/CustomButton';
import VideoTextComponent from '../components/videoTextCompnent/VideoTextComponent'
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import Image from '../assets/Vector 2.png'
import bgImage from '../assets/IMG_2647 1.png'
import Image2 from '../assets/Frame 610.png'
import VerticalTextSlider from '../components/VerticalTextSlider';
import CustomLayout from '../components/CustomLayout'
import photo from '../assets/Frame 714.png'
import photo2 from '../assets/IMG_2857 1.png'
import photo3 from '../assets/Group 3.png'
import SmallPhoto from '../assets/Ellipse 1.png'
import SmallPhoto2 from '../assets/Ellipse 3.png'
import SmallPhoto3 from '../assets/Ellipse 2.png'
import SmallPhoto4 from '../assets/Ellipse 4.png'
import SmallPhoto5 from '../assets/Ellipse 5.png'
import SlideImg from '../assets/WhatsApp.png'
import Line from '../assets/Line 1.png'
import backgroundImage from '../assets/Vector 3.png'

const Home = () => {
  return (
        <div className="">
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6 mt-5">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                        {/* <!-- Left Column --> */}
                        <div class="md:w-1/2">
                            {/* <!-- Sub-Text --> */}
                            <div className=' relative'>
                                <p class="text-black font-bold text-sm">Join our premier monthly meetup for startup founders and tech visionaries</p>
                                {/* <!-- Text --> */}
                                <h2 class="text-purple-800 w-68 text-4xl font-bold mt-2">Connect, Collaborate, Innovate! </h2>
                                {/* <!-- Head --> */}
                                <p class="text-3xl md:text-xl text-gray-800 mt-5 mb-7">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                                    <CustomButton
                                        width="w-[50%]"
                                        color="bg-white"
                                        textColor="text-purple-800"
                                        borderRadius="rounded-[18px]"
                                        borderRadiusColor="border-purple-800"
                                        icon={ RiArrowRightDoubleFill }
                                        onClick={() => alert('Button Clicked!')}
                                        className="ml-4 mt-" // Add margin to the left for spacing
                                    >
                                        Register For Our Next Event
                                    </CustomButton>
                                    <p class="text-black text-sm mt-2">Join Us for our next meetup on the 26th of July 2024</p>
                            </div>
                            <div className="flex mt-10">
                                <p className="w-[90px] h-[90px] rounded-full border flex items-center justify-center mr-5">
                                    <img src={SmallPhoto2} alt="" className='w-full' />
                                </p>
                                <p className="w-[90px] h-[90px] rounded-full border flex items-center justify-center mr-5">
                                    <img src={SmallPhoto} alt="" className='w-full' />
                                </p>
                                <p className="w-[90px] h-[90px] rounded-full border flex items-center justify-center mr-5">
                                    <img src={SmallPhoto3} alt="" className='w-full' />
                                </p>
                                <p className="w-[90px] h-[90px] rounded-full border flex items-center justify-center mr-5">
                                    <img src={SmallPhoto4} alt="" className='w-full' />
                                </p>
                                <p className="w-[90px] h-[90px] rounded-full border flex items-center justify-center">
                                    <img src={SmallPhoto5} alt="" className='w-full' />
                                </p>
                             </div>
                             <div className="flex items-center jus mt-7">
                                <span class="text-black text-sm font-semibold mr-2">Become a collaborator today</span>
                                <BsBoxArrowUpRight />
                             </div>
                        </div>
                        {/* <!-- Right Column --> */}
                        <div class="md:w-1/2">
                            <img
                            src={photo3}
                            alt="Descriptive Alt Text"
                            className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </CustomContainer>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-8 p-6">
                        {/* <!-- Right Column --> */}
                        <div class="md:w-1/2">
                            <img
                            src={photo2}
                            alt="Descriptive Alt Text"
                            className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                            {/* <!-- Left Column --> */}
                           <div class="md:w-1/2 flex ">
                           <img src={Line} alt="" className='w-[100px]' />
                            {/* <!-- Sub-Text --> */}
                            <div className=' relative'>
                            <p class="text-black-500 text-2xl font-bold">Who We Are ?</p>
                            {/* <!-- Text --> */}
                            <p class="text-gray-600 w-68 text-xl mt-20">Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration. </p>
                            <div className="flex justify-between mt-6 w-[450px]">
                                <CustomButton
                                    width="w-[40%]"
                                    color="bg-purple-600"
                                    textColor="text-white"
                                    borderRadius="rounded-[18px]"
                                    borderRadiusColor="border-purple-800"
                                    icon={IoIosArrowRoundForward}
                                    onClick={() => alert('Button Clicked!')}
                                    className="ml-4 mt-5" // Add margin to the left for spacing
                                >
                                    Register
                                </CustomButton>
                                <CustomButton
                                    width="w-[40%]"
                                    color="bg-white"
                                    textColor="text-purple-700"
                                    borderRadius="rounded-[18px]"
                                    borderRadiusColor="border-purple-800"
                                    icon={ TbMoneybag } 
                                    onClick={() => alert('Button Clicked!')}
                                    className="mt-5" // Add margin to the left for spacing
                                >
                                    Donate
                                </CustomButton>
                            </div>
                                {/* <!-- Head --> */}
                            <p class="text-3xl md:text-xl text-gray-800 absolute bottom-0">Founder's Friday is more than just a meetup — it's a movement.</p>
                            </div>
                        </div>
                    </div>
                </CustomContainer>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        {/* <!-- Left Column --> */}
                        <div class="md:w-1/2">
                            {/* <!-- Sub-Text --> */}
                            <p class="text-gray-500s">Founders Friday</p>
                            {/* <!-- Head --> */}
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 w-1/2 mt-5">What Happens At Founders Friday</h1>
                            {/* <!-- Text --> */}
                            <p class="text-gray-600 w-68 text-xl mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                            <CustomButton
                                width="w-1/4"
                                color="bg-purple-600"
                                textColor="text-white"
                                borderRadius="rounded-[5px]"
                                borderRadiusColor="border-purple-800"
                                icon={IoIosArrowRoundForward}
                                onClick={() => alert('Button Clicked!')}
                                className="ml-4 mt-5" // Add margin to the left for spacing
                            >
                                Register
                            </CustomButton>
                        </div>

                        {/* <!-- Right Column --> */}
                        <div class="md:w-1/3">
                            <img
                            src={photo}
                            alt="Descriptive Alt Text"
                            className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </CustomContainer>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <CustomLayout/>
                </CustomContainer>
            </CustomSection>

            <CustomSection className="mb-4 " backgroundImage={bgImage} >
                <CustomContainer className=" w-full py-6">
                    <div className="flex items-center justify-between py-8 text-white">
                        {/* <!-- Left div with title, text slider, text, and button --> */}
                        <div className="w-full md:w-1/2 px-4">
                            {/* <!-- Title --> */}
                            <h1 className="text-3xl font-bold mb-4">Founders Friday is coming to</h1>

                            {/* <!-- Vertical Text Slider --> */}
                                <VerticalTextSlider/>
                            {/* <!-- Some text --> */}
                            <p className="mt-4 text-lg text-white-600 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

                            {/* <!-- Button --> */}
                            <CustomButton
                                width="w-1/3"
                                color=""
                                textColor="text-purple-800"
                                borderRadius="rounded-[18px]"
                                borderRadiusColor="border-purple-800"
                                icon={IoIosArrowRoundForward}
                                onClick={() => alert('Button Clicked!')}
                                className="ml-4 mt-5" // Add margin to the left for spacing
                            >
                                Register
                            </CustomButton>
                        </div>

                        {/* <!-- Right div with image --> */}
                        <div className="w-full md:w-1/3 px-4">
                            <img
                            src={SlideImg}
                            alt="Image"
                            className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </CustomContainer>
            </CustomSection>

            <CustomSection
                className="relative mb-4 h-[300px] sm:h-[400px] md:h-[587px] lg:h-[700px] xl:h-[800px] border mt-20 lg:bg-none sm:bg-none"
                backgroundImage={Image}  backgroundSize="contain" // Pass the imported image here
            >
                <div className="flex flex-col justify-between items-center h-[200px] md:h-[400px] lg:h-[600px] p-6">
                {/* Title and Subtitle */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2 h-[32px] sm:h-[48px] md:h-[56px]">
                    Register And Be Part of Our Community
                    </h1>
                    <p className="text-lg text-gray-600 w-full sm:w-[600px] md:w-[800px] h-[32px] sm:h-[48px] md:h-[58px] mt-4">
                    Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!
                    </p>
                </div>

                {/* Full-Width Div */}
                <div className="group relative w-full h-64 sm:bg-[url('../assets/Vector 2.png')]">
                    {/* <img src={Image} alt="" className="absolute" /> */}
                    <img src={Image2} alt="" className="absolute -top-14 right-0 z-10 w-full h-[150px] sm:h-[180px] md:h-[248px]" />
                </div>

                {/* Button */}
                <CustomButton
                    width="w-1/4"
                    color="bg-white"
                    textColor="text-purple-800"
                    borderRadius="rounded-full"
                    borderRadiusColor="border-purple-800"
                    icon={IoIosArrowRoundForward}
                    onClick={() => alert('Button Clicked!')}
                    className="ml-4 mt-20" // Add margin to the left for spacing
                >
                    Register
                </CustomButton>
                </div>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <VideoTextComponent/>
                </CustomContainer>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <UserSlider/>
            </CustomContainer>
            </CustomSection>
            <CustomSection className="mb-4">
                <CustomContainer className=" w-full py-6">
                    <FAQ/>
                </CustomContainer>
            </CustomSection>
        </div>
   )
}

export default Home