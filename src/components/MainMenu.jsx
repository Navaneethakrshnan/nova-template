import React, { useEffect, useState } from "react";
import LOGO from "../assets/logo-blue.png";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`border-gray-200 hidden lg:block lg:mt-0 lg:min-w-80 z-40 ${
          isSticky ? "bg-[#292662]" : "bg-transparent"
        } fixed top-0 left-0 w-full transition-colors duration-300`}
      >
        <div className="mx-10 flex flex-wrap items-start justify-between lg:justify-normal p-4">
          <a
            href="https://www.novarace.in/"
            className="flex items-start space-x-3 rtl:space-x-reverse"
          >
            <img src={LOGO} className="h-12" alt="Logo" />
          </a>

          <div
            className="w-full md:w-auto justify-normal lg:mt-3 lg:ml-6 hidden lg:block"
            id="navbar-default"
          >
            <ul className="text-base font-sm flex flex-col md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="/events"
                  className={`block py-2 px-3 ${
                    isSticky ? "text-white" : "text-black"
                  } rounded md:bg-transparent md:p-0`}
                  aria-current="page"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Events
                </Link>
              </li> 
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isSticky ? "text-white" : "text-gray-900"
                  } md:hover:bg-transparent md:border-0 md:p-0`}
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isSticky ? "text-white" : "text-gray-900"
                  } md:hover:bg-transparent md:border-0 md:p-0`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isSticky ? "text-white" : "text-gray-900"
                  } md:hover:bg-transparent md:border-0 md:p-0`}
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    isSticky ? "text-white" : "text-gray-900"
                  } md:hover:bg-transparent md:border-0 md:p-0`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
