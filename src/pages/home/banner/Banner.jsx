import React from 'react';
import Layout from '../../../components/layout/Layout';
import BannerImg from '../../../assets/carbanner.png'; // Adjust the path based on your file structure
import { GoArrowUpRight } from 'react-icons/go';


const Banner = () => {
  return (
    <Layout>
      <div className="w-full md:h-[70vh] h-[40vh] rounded-2xl relative overflow-hidden">
        <img src={BannerImg} alt="" className="w-full h-full object-cover object-center" />

        <div className="w-full h-full absolute top-0 left-0 flex items-center bg-gradient-to-r from-black to-transparent">
            <div className="md:w-1/2 w-full py-8 md:p1-12 pl-6 md:pr-8 pr-8">
              <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase !leading-[1.3]">
                Ready to Ride <span className="text-red-600">Car?</span><br />
                Inquire Now!
              </h1>
              <p className="p text-lg text-zinc-400 font-normal mt-4 md:pr-16 pr-0">
                Discover the latest Mitsubishi models and exclusive offers. <br />
                Contact us today to schedule a test drive or learn more about <br />  
                our financing options.
              </p>
            <div className="flex items-center justify-center md:justify-start md:gap-5 gap-3 flex-wrap md:mt-10 mt-6">
              <a href="https://www.mitsubishi-motors.com.ph/dealer-locator" target="_blank">
                <button className="cursor-pointer bg-red-700 text-zinc-50 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                    Reserve Now
                    <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
                </button>
              </a>
              <a href="https://www.mitsubishi-motors.com.ph/about-us/contact-us" target="_blank">  
                <button className="cursor-pointer border border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                    Contact us
                    <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
                </button>
              </a>
            </div>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Banner;
