import React from "react";
import Layout from '../../../components/layout/Layout';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Layout className="pt-16">
       <div className="w-full bg-zinc-900 py-5 px-7 rounded-xl relative">

        <div className="md:w-fit w-[65%] md:px-6 px-4 pt-3 pb-2 flex items-center justify-center rounded-xl bg-zinc-900 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <h1 className="md:text-3xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
            Find your Dream <span className="text-red-600">Cars</span>
           </h1>
        </div>

           <div className="pt-8 pb-5">
            <div className="w-full grid md:grid-cols-7 grid-cols-2 gap-10 items-center">

                <div className="w-full h-14 col-span-2 border-zinc-700 rounded-xl px-3">

                    <select className="w-full h-full bg-zinc-900 text-zinc-50 border border-zinc-700 box-border focus:outline-none rounded-xl"
                    defaultValue="">

                        <option value="" disabled>CAR TYPE</option>
                        <option value="sport">Sport</option>
                        <option value="suv">SUV</option>
                        <option value="normal">Normal</option>
                        <option value="used">Used</option>
                    
                    </select>
                </div>

                <div className="w-full h-14 col-span-2 border-zinc-700 rounded-xl px-3">
                    <select className="w-full h-full bg-zinc-900 text-zinc-50 border border-zinc-700 box-border focus:outline-none rounded-xl"
                    defaultValue="">
                        <option value="" disabled>BRAND</option>
                        <option value="luxury">X-pander Cross</option>
                        <option value="suv">X-pander</option>
                        <option value="normal">X-force</option>
                        <option value="normal">Mirage G4</option>
                        <option value="normal">Mirage</option>
                        <option value="sport">Montero Sport</option>
                        <option value="sport">Triton</option>
                        <option value="used">L300</option>      
                    </select>
                </div>

                <div className="w-full h-14 col-span-2 border-zinc-700 rounded-xl px-3">

                    <select className="w-full h-full bg-zinc-900 text-zinc-50 border border-zinc-700 box-border focus:outline-none rounded-xl"
                    defaultValue="">
                        <option value="" disabled>MODEL</option>
                        <option value="luxury">2023</option>
                        <option value="suv">2024</option>
                        <option value="normal">2025</option>
                        <option value="used">2026</option>
                    </select>
                </div>

                <button className="w-full h-14 md:col-span-1 col-span-2 rounded-xl bg-red-600 text-base text-zinc-50 font-medium uppercase flex items-center justify-center gap-x-2 cursor-pointer hover:bg-red-700 ease-in-out duration-300">
                       <FaSearch />
                       <span>Search</span>
                </button>
            </div>
           </div>
       </div>   
    </Layout>
  );
};

export default Search;
