import React from "react";
import Layout from "../../../components/layout/Layout";

import HeroImg from '../../../assets/hero3.png';
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="w-full md:h-screen h-auto pt-[9ch] relative flex items-center justify-center z-30">
      <Layout className="flex md:flex-row flex-col items-center justify-between gap-10 md:gap-16 z-50">
        
        {/* Text Content */}
        <div className="md:w-[45%] w-full space-y-8 md:space-y-12 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-1.5 md:space-y-2">
              <h6 className="text-sm md:text-lg text-zinc-300 font-medium uppercase">
                New Arrivals
              </h6>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-zinc-50 font-bold uppercase leading-tight md:leading-[1.2]">
                Drive your Ambition In{" "}
                <span className="text-red-600">Mitsubishi</span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-normal">
              Mitsubishi empowers you to move forward with confidence. Every vehicle is designed to reflect your drive—your goals, your lifestyle, your passion.
              Chase your dreams fearlessly, take the wheel of life with determination, and go beyond limits. With Mitsubishi, you're not just driving a car—
              you're <span className="text-red-600">Driving your ambition.</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5">
            <a
              href="https://www.mitsubishi-motors.com.ph/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer bg-red-700 text-zinc-50 px-4 md:px-6 py-2.5 md:py-4 rounded-full uppercase text-xs md:text-base font-medium group flex items-center justify-center gap-x-2 md:gap-x-3 transition duration-300">
                About Us
                <GoArrowUpRight className="text-lg md:text-xl group-hover:rotate-45 transition duration-300" />
              </button>
            </a>
            <a
              href="https://www.mitsubishi-motors.com.ph/cars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer border border-zinc-300 text-zinc-300 px-4 md:px-6 py-2.5 md:py-4 rounded-full uppercase text-xs md:text-base font-medium group flex items-center justify-center gap-x-2 md:gap-x-3 transition duration-300">
                Explore Cars
                <GoArrowUpRight className="text-lg md:text-xl group-hover:rotate-45 transition duration-300" />
              </button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-[50%] w-full flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="Hero Car"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </Layout>

      {/* Background Circle */}
      <div className="absolute hidden md:block w-[900px] h-[600px] rounded-full -top-24 -right-96 -rotate-[35deg] bg-gradient-to-r from-red-950/80 via-zinc-950 to-transparent"></div>
    </div>
  );
};

export default Hero;
