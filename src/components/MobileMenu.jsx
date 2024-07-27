import React, { useState } from "react";
import LOGO from "../assets/logo-blue.png";
import classes from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white relative border-gray-200 px-4 py-2.5 block lg:hidden">
        <div className="flex flex-wrap sticky top-0 items-center justify-between max-w-screen-xl mx-auto">
          <a href="https://www.novarace.in/" className="flex items-center">
            <img src={LOGO} className="h-12" alt="Logo" />
          </a>
          <button
            onClick={toggleMenu}sticky top-0 
            className="inline-flex items-center p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
        <a href="#" className="flex items-center">
          <img src={LOGO} className={classes.img} alt="Logo" />
        </a>
        <hr className="mt-7" style={{ color: "black" }} />
        <ul className="flex flex-col px-4 py-2 -mt-12">
          <li className="w-full">
            <a
              href="#"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
              className="block px-3 text-left py-2 text-gray-700 rounded hover:bg-gray-100"
            >
              Events
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="block px-3 py-2 text-left text-gray-700 rounded hover:bg-gray-100"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Results
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="block px-3 py-2 text-left text-gray-700 rounded hover:bg-gray-100"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Services
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="block px-3 py-2 text-left text-gray-700 rounded hover:bg-gray-100"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Photos
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="block px-3 py-2 text-left	 text-gray-700 rounded hover:bg-gray-100"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
