import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/JABEZ_LOGO.png";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';
import { auth, provider } from "../../firebase/Authentication"; 
import { signInWithPopup, signOut } from "firebase/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // 🔹 store user info
  const location = useLocation();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // save user info
      console.log("Signed in:", result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Signed out");
    } catch (error) {
      console.error(error);
    }
  };

  const navItems = [
    { name: "Home", link: "/", active: true },
    { name: "About", link: "/about", active: false },
    { name: "Cars", link: "/cars", active: false },
    { name: "Services", link: "/services", active: false },
    { name: "Bookings", link: "/bookings", active: false },
    { name: "Blogs", link: "/blogs", active: false },
    { name: "Contacts", link: "/contacts", active: false },
    { name: "Agents", link: "/agents", active: false },
  ];

  return (
    <nav className="bg-zinc-50 fixed top-0 w-full border-b border-zinc-200 z-50 py-2 md:py-3 px-4 md:px-6 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 md:py-2 md:px-8 px-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3">
          <img src={Logo} className="h-10 md:h-12" alt="Mitsubishi Logo" />
        </Link>
        {/* Buttons */}
        <div className="flex md:order-2 items-center gap-x-2 md:gap-x-4">
          {user ? (
            <>
              {/* Show profile photo */}
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-zinc-300"
              />

              {/* Logout icon */}
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-500 rounded-lg md:rounded-xl w-9 h-9 md:w-10 md:h-10 flex items-center justify-center ease-in-out duration-300"
              >
                <FiLogOut />
              </button>
            </>
          ) : (
            // If not logged in -> show login/user icon
            <button
              onClick={handleLogin}
              className="text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg md:rounded-xl w-9 h-9 md:w-10 md:h-10 flex items-center justify-center ease-in-out duration-300"
            >
              <FaUserAlt />
            </button>
          )}

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-700 rounded-lg focus:outline-none w-9 h-9 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <FaBars className="text-lg md:text-xl" />
          </button>
        </div>

        {/* Nav Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex items-center justify-between w-full md:w-auto md:order-1`}
        >
          <ul
            className="flex md:items-center items-start flex-col md:p-0 p-3 mt-2 md:mt-0 text-base md:text-lg font-normal border md:border-0 border-zinc-200 rounded-lg 
            md:space-x-6 lg:space-x-8 md:space-y-0 space-y-2 rtl:space-x-reverse md:flex-row
            bg-white md:bg-transparent w-2/3 sm:w-1/2 absolute top-full right-0 z-50 shadow-md md:relative md:w-auto md:shadow-none"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`hover:text-red-600 active:text-red-600 focus:text-red-600 ease-in-out duration-300 ${
                    location.pathname === item.link
                      ? "text-red-600 font-medium"
                      : "text-black"
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
