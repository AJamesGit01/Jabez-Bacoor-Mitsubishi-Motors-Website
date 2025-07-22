import React from "react";
import Layout from "../../../components/layout/Layout";

import HeroImg from '../../../assets/hero3.png';
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="w-full md:h-screen h-auto pt-[9ch] relative flex items-center justify-center z-30">
      <Layout className="flex md:flex-row flex-col flex-wrap items-center justify-between gap-16 z-50 flex-wrap">
        
        {/* Text Content */}
        <div className="md:w-[40%] w-full md:space-y-16 space-y-10 text-center md:text-left">
          <div className="space-y-5">
            <div className="space-y-2">
              <h6 className="text-lg text-zinc-300 font-medium uppercase">
                New Arrivals
              </h6>
              <h1 className="md:text-7xl sm:text-5xl text-4xl text-zinc-50 font-bold uppercase leading-[1.3]">
                Drive your Ambition In <span className="text-red-600">Mitsubishi</span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-zinc-400 font-normal">
              Mitsubishi empowers you to move forward with confidence. Every vehicle is designed to reflect your drive your goals, your lifestyle, your passion. 
              Chase your dreams fearlessly, take the wheel of life with determination, and go beyond limits. With Mitsubishi, you're not just driving a car
              you're <span className="text-red-600">Driving your ambition.</span>
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start md:gap-5 gap-3 flex-wrap">
            <button className="cursor-pointer bg-red-700 text-zinc-50 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
              About Us
              <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
            </button>

            <button className="cursor-pointer border border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
              Explore Cars
              <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-[55%] w-full h-auto">
          <img src={HeroImg} alt="Hero Car" className="w-full h-auto object-contain" />
        </div>
      </Layout>

      {/* Background Circle (only for large screens) */}
      <div className="absolute md:flex hidden w-[1000px] h-[650px] rounded-full -top-24 -right-96 -rotate-[35deg] bg-gradient-to-r from-red-950/80 via-zinc-950 to-transparent"></div>
    </div>
  );
};

export default Hero;
