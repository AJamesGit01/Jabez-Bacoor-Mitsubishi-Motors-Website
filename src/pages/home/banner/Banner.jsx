import React from 'react';
import Layout from '../../../components/layout/Layout';
import BannerImg from '../../../assets/mitsubishi-banner.jpg'; 
import { GoArrowUpRight } from 'react-icons/go';
import { FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <Layout>
      <div className="w-full md:h-[70vh] h-[50vh] rounded-2xl relative overflow-hidden">
        <img 
          src={BannerImg} 
          alt="Mitsubishi Banner" 
          className="w-full h-full object-cover object-center" 
        />

        {/* Overlay with gradient */}
        <div className="w-full h-full absolute top-0 left-0 flex items-center bg-gradient-to-r from-black/90 to-transparent">
          <div className="w-full md:w-1/2 px-6 md:px-12 py-6 md:py-10 space-y-4">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-50 uppercase leading-snug">
              Ready to Ride <span className="text-red-600">Car?</span><br />
              Inquire Now!
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
              Discover the latest Mitsubishi models and exclusive offers. <br className="hidden sm:block" />
              Contact us today to schedule a test drive or learn more about <br className="hidden sm:block" />  
              our financing options.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600 text-base" />
              <span className="text-xs sm:text-sm text-zinc-400">
                Go to Jabez Bacoor Motor Corporation Dealership
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-5 pt-4">
              <a 
                href="https://www.mitsubishi-motors.com.ph/dealer-locator" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer bg-red-700 text-zinc-50 px-4 md:px-6 py-2.5 md:py-4 rounded-full uppercase text-sm md:text-base font-medium group flex items-center justify-center gap-1.5 md:gap-3 transition duration-300">
                  Reserve Now
                  <GoArrowUpRight className="text-lg md:text-xl group-hover:rotate-45 transition duration-300" />
                </button>
              </a>

              <a 
                href="https://www.mitsubishi-motors.com.ph/sales/test-drive?dealerAddress=Molino%20Boulevard%20Barangay%20Mambog%20Bacoor%20City" 
                target="_blank"
                rel="noopener noreferrer"
              >  
                <button className="cursor-pointer border border-zinc-300 text-zinc-300 px-4 md:px-6 py-2.5 md:py-4 rounded-full uppercase text-sm md:text-base font-medium group flex items-center justify-center gap-1.5 md:gap-3 transition duration-300">
                  Book A Test Drive
                  <GoArrowUpRight className="text-lg md:text-xl group-hover:rotate-45 transition duration-300" />
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
