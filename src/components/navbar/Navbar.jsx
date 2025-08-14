import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import Logo from '../../assets/JABEZ_LOGO.png';
import { FaBars, FaUserAlt } from 'react-icons/fa';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', link: '/', active: true },
    { name: 'About', link: '/about', active: false },
    { name: 'Cars', link: '/cars', active: false },
    { name: 'Services', link: '/services', active: false },
    { name: 'Events', link: '/events', active: false },
    { name: 'Blogs', link: '/blogs', active: false },
    { name: 'Contacts', link: '/contacts', active: false },
    { name: 'Verified Agents', link: '/agents', active: false },
  ];

  return (
  <nav className="bg-zinc-50 fixed top-0 w-full border-b border-zinc-200 z-50 py-3 px-6 shadow-sm">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 md:px-8 px-4">
    
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-12" alt="Mitsubishi Logo" />
    </Link>

    {/* Buttons */}
    <div className="flex md:order-2 items-center gap-x-4">
      <button type="button" className="text-white bg-zinc-800 hover:bg-zinc-700/40 rounded-xl w-10 h-10 flex items-center justify-center ease-in-out duration-300">
        <FaUserAlt />
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-zinc-700 rounded-lg focus:outline-none w-10 h-10 flex items-center justify-center"
        aria-label="Toggle Menu"
      >
        <FaBars className="text-xl" />
      </button>
    </div>

      {/* Nav Menu */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex items-center justify-between w-full md:w-auto md:order-1`}
      >
        <ul className="flex md:items-center items-start flex-col md:p-0 p-4 mt-3 md:mt-0 text-lg font-normal border md:border-0 border-zinc-200 rounded-lg md:space-x-8 md:space-y-0 space-y-3 rtl:space-x-reverse md:flex-row
          bg-white md:bg-transparent w-1/2 absolute top-full right-0 z-50 shadow-md md:relative md:w-auto md:shadow-none"
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`hover:text-red-600 active:text-red-600 focus:text-red-600 ease-in-out duration-300 ${
                  location.pathname === item.link ? 'text-red-600 font-medium' : 'text-black'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  </div>
</nav>

  );
};

export default Navbar;
