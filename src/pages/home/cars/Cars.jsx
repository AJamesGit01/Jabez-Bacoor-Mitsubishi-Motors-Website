import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoArrowUpRight } from "react-icons/go";

const tabs = [
  { id: "profile", title: "Profile", content: "This is the Profile tab content." },
  { id: "dashboard", title: "Dashboard", content: "This is the Dashboard tab content." },
  { id: "settings", title: "Settings", content: "This is the Settings tab content." },
  { id: "contacts", title: "Contacts", content: "This is the Contacts tab content." },
];

const Cars = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Layout className="space-y-10">
      {/* Header */}
      <div className="w-full flex items-center justify-center text-center space-y-3 flex-col">
        <h6 className="text-lg text-zinc-300 uppercase font-medium">What brands we offer?</h6>
        <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
          Featured <span className="text-red-600">Cars</span>
        </h1>
      </div>

      {/* Tabs Section */}
      <div className="py-2">
        {/* Tab Buttons */}
        <div className="w-full flex items-center justify-center mb-2">
          <ul className="flex flex-wrap border-b border-zinc-700 text-sm font-medium text-center">
            {tabs.map((tab) => (
              <li key={tab.id} className="me-2">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block px-4 py-2 border-b-2 rounded-t-lg ${
                    activeTab === tab.id
                      ? "text-red-600 border-red-600"
                      : "text-zinc-400 border-transparent hover:text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="mt-2 p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
          <p className="text-sm">
            <strong className="font-medium text-zinc-100">{tabs.find(tab => tab.id === activeTab).title} tab’s associated content</strong>.{" "}
            {tabs.find(tab => tab.id === activeTab).content}
          </p>
        </div>
      </div>

      {/* Button */}
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
