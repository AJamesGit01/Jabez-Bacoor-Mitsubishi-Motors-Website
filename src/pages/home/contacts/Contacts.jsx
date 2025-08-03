import React from "react";
import Layout from "../../../components/layout/Layout";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';


const Contacts = () => {
  return (
    <section className="bg-black text-white py-12 px-4 text-center">
      <h2 className="md:text-3xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
       Connect with <span className="text-red-600">Us</span>
      </h2>
      <p className="text-zinc-400 mb-8">Follow us on our social media platforms</p>
      
      <div className="flex justify-center space-x-6 text-3xl">
        <a href="https://www.facebook.com/MitsubishiMotorsPH/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/mitsubishimotorsph/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/c/MitsubishiMotorsPhilippines" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
          <FaYoutube />
        </a>
        <a href="https://x.com/mitsucars" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
