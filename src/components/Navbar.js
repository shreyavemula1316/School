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
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-2xl flex gap-2 items-center text-white">
        <FaGraduationCap className="w-8 h-8"/>
          Model School
        </a>
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-black hidden items-center lg:flex gap-4">
          <button className="px-6 py-2 font-bold rounded bg-violet-400 hover:bg-white transition-all duration-200 ease-in">
            LogIn
          </button>
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile view menu */}
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-violet-400 ${
            isOpen ? "fixed top-0 right-0 w-full transition-all ease-out duration-150" : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
