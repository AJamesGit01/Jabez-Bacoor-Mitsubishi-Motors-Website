import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";
import { cars } from "../../../data/carData";
import CarCard from "../../../components/cars/CarCard";

const tabs = [
  { id: "all", title: "All Cars" },
  { id: "luxury", title: "Luxury" },
  { id: "sports", title: "Sports" },
  { id: "used", title: "Used Cars" },
];

const Cars = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCars =
    activeTab === "all" ? cars : cars.filter((car) => car.category === activeTab);

  return (
    <Layout className="space-y-10">
      {/* Header */}
      <div className="w-full flex items-center justify-center text-center space-y-3 flex-col">
        <h6 className="text-lg text-zinc-300 uppercase font-medium">What brands we offer?</h6>
        <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
          Featured <span className="text-red-600">Cars</span>
        </h1>
      </div>

      {/* Tabs */}
      <div className="w-full flex items-center justify-center mb-4">
        <ul className="inline-flex bg-zinc-800 p-1 rounded-full border border-zinc-600 space-x-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Car Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* View All Button */}
      <div className="w-full flex items-center justify-center">
        <button className="cursor-pointer border border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 py-2.5 rounded-full uppercase md:text-base text-sm font-medium group flex items-center justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
          View All Cars
          <GoArrowUpRight className="text-xl group-hover:rotate-45 ease-in-out duration-300" />
        </button>
      </div>
    </Layout>
  );
};

export default Cars;
