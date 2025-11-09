import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-sky-950 p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <h1 className="text-white font-bold text-xl ml-4">WORLLD MARKET</h1>
      <ul className="hidden md:flex text-white text-lg flex-row gap-[35px] ml-14">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/lenganpendek" className="hover:text-blue-400">
            Product
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex border rounded-md bg-white px-2 py-2 w-52 items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm text-gray-700 flex-grow"
        />
        <FaSearch className="text-gray-600" />
      </div>
      <button
        className="text-white text-2xl md:hidden mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-sky-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/lenganpendek" onClick={() => setIsOpen(false)}>
            Product
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="border rounded-md bg-white px-2 py-2 w-10/12 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm text-gray-700 flex-grow"
            />
            <FaSearch className="text-gray-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
