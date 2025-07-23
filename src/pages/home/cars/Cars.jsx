import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";
import Mirage from "../../../assets/hero3.png";
import Lambo from "../../../assets/hero2.png";

// Tabs
const tabs = [
  { id: "all", title: "All Cars" },
  { id: "luxury", title: "Luxury" },
  { id: "sports", title: "Sports" },
  { id: "used", title: "Used Cars" },
];

// Sample car data
const cars = [
  {
    id: 1,
    name1: "Lamborghini Aventador",
    category: "luxury",
    description: "A luxury Italian sports car with aggressive design.",
    image1: Mirage
  },
  {
    id: 2,
    name: "Toyota Supra GR",
    category: "sports",
    description: "High-performance coupe with iconic style and turbocharged engine.",
    image2: Lambo
  },
  {
    id: 3,
    name: "BMW 7 Series",
    category: "luxury",
    description: "Premium sedan packed with luxury features and comfort.",
  },
  {
    id: 4,
    name: "Honda Civic Type R",
    category: "sports",
    description: "Sporty hatchback known for agility and power.",
  },
  {
    id: 5,
    name: "Toyota Vios 2016",
    category: "used",
    description: "Reliable and fuel-efficient, widely used in the Philippines.",
  },
  {
    id: 6,
    name: "Ford Everest 2015",
    category: "used",
    description: "Popular SUV with great resale value and rugged appeal.",
  },
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

      {/* Card Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="border border-zinc-700 bg-zinc-900 p-4 rounded-xl hover:shadow-lg transition"
          >
              <div className="h-48 w-full rounded-md mb-3 bg-zinc-800 flex items-center justify-center overflow-hidden">
                <img
                  src={car.image1}
                  alt={car.name}
                  className="w-full h-full object-contain"
                />
              </div>
            <h3 className="text-lg font-semibold text-zinc-100">{car.name}</h3>
            <p className="text-sm text-zinc-400">{car.description}</p>
          </div>
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
