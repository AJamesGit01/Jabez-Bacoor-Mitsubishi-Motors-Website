import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'; // Mitsubishi Logo

const Footer = () => {
  return ( 

<footer className="bg-zinc-900 py-6">
    <div className="w-full max-w-screen-2xl mx-auto py-4 md:px-12 px-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20" alt="Mitsubishi Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-base font-normal sm:mb-0 text-zinc-400">
                <li>
                    <Link to="https://www.mitsubishi-motors.com.ph/cars" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6" target='_blank'>All Vehicles</Link>
                </li>
                <li>
                    <Link to="https://www.mitsubishi-motors.com.ph/service/service-guide-0" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6" target='_blank'>Service</Link>
                </li>
                <li>
                    <Link to="https://www.mitsubishi-motors.com.ph/price-list" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6" target='_blank'>Prices</Link>
                </li>
                <li>
                    <Link to="https://www.mitsubishi-motors.com.ph/privacy-policy" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6" target='_blank'>Privacy Policy</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm font-normal text-zinc-600 sm:text-center text-zinc-400">© 2025 <a href="https://www.mitsubishi-motors.com.ph/" target='_blank' className="hover:text-red-600 ease-in-out duration-300">Mitsubishi Jabez Bacoor Motor Corporation</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;

 