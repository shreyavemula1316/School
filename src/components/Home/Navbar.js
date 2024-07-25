import React, { useState } from "react";
import { FaBars, FaGraduationCap, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/gallery", link: "Gallery" },
    { path: "/academics", link: "Academics" },
    { path: "/faculty", link: "Faculty" },
    { path: "/admissions", link: "Admissions" },
    { path: "/student-activities", link: "Student Activities" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-black text-white top-0 left-0 right-0 z-50">
      {/* School Name Section */}
      <div className="bg-blue-900 text-white py-4 px-4 flex flex-col justify-center items-center min-h-[80px]">
        <a href="/" className="font-bold text-xl sm:text-4xl flex gap-4 items-center text-white uppercase">
          <FaGraduationCap className="w-6 h-6 sm:w-10 sm:h-8" />
          <span>Model School</span>
        </a>
        <p className="mt-1 text-sm sm:text-base pl-4 sm:pl-20">Mandepally,Sircilla</p>
      </div>

      {/* Navbar Section */}
      <nav className="px-4 py-4 max-w-7xl mx-auto">
        {/* Mobile view button */}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={toggleMenu} className="cursor-pointer text-white p-2">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navbar items */}
        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className={`flex flex-col md:flex-row justify-center md:justify-between w-full md:gap-4 ${isOpen ? "mt-4" : ""}`}>
            {navItems.map(({ path, link }) => (
              <li className="text-white mb-2 md:mb-0" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    `block transition-all duration-300 ${isActive ? "text-blue-300 underline" : isPending ? "text-gray-400" : "hover:underline hover:text-blue-300"}`
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
