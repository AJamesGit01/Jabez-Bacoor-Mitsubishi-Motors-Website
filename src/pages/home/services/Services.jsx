import React from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";
import { IoCarSport } from "react-icons/io5";
import ServiceCard from "../../../components/service/ServiceCard";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdCarRepair, MdPayments } from "react-icons/md";

const Services = () => {
    return (
        <Layout>
            <div className="w-full flex items-center justify-between gap-20 flex-wrap">

                <div className="md:w-[38%] w-full md:space-y-10 space-y-7">
                    <div className="space-y-7">
                        <h6 className="text-lg text-zinc-300 uppercase font-medium">
                            How it works?
                        </h6>
                        <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
                             Our <span className="text-red-600">Services</span>
                        </h1>
                    </div>
                    <p className="text-base text-zinc-500 font-normal">
                        We help you find your dream car with ease. From advanced search filters to personalized recommendations, we've got you covered.
                    </p>
                    <a href="https://www.mitsubishi-motors.com.ph/service/service-guide" target="_blank">
                    <button className="cursor-pointer border border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                        Explore More
                    <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
                    </button>
                    </a>
                </div>
                   

                <div className="flex-1">
                    <div className="full grid md:grid-cols-2 grid-cols-1 gap-10">

                        <ServiceCard
                         icon={IoCarSport}
                         title={"Wide range of cars"}
                         description={"Explore our extensive collection of cars to find your perfect match."}
                        />

                        <ServiceCard
                         icon={VscWorkspaceTrusted}
                         title={"Trusted Clients"}
                         description={"Explore our extensive collection of cars to find your perfect match."}
                        />

                        <ServiceCard
                         icon={MdPayments}
                         title={"Secure Payments"}
                         description={"Explore our extensive collection of cars to find your perfect match."}
                        />

                        <ServiceCard
                         icon={MdCarRepair}
                         title={"Repair Services"}
                         description={"Explore our extensive collection of cars to find your perfect match."}
                        />

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;