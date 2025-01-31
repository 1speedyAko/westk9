"use client"
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";



const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id) =>{
    const section= document.getElementById(id)
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <Link
          href="/"
         >
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg"><Image src="/profile.png" alt='logo' width={90} height={70}/></span>
          </div>
          </Link>
          

          {/* Desktop Navigation Links */}
           <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={()=>scrollToSection("home")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                Home
              </button>
              <button
                onClick={()=>scrollToSection("services")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                Services
              </button>
              <button
                onClick={()=>scrollToSection("about")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                About
              </button>
             
              <button
                onClick={()=>scrollToSection("testimonials")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                Testimonials
              </button>
              <button
                onClick={()=>scrollToSection("faqs")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                Faqs
              </button>
              {/* <Button
                to="/gallery"
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                Gallery
              </Button> */}
              <button
                onClick={()=>scrollToSection("faq")}
                className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                {/* <FontAwesomeIcon icon={faShoppingCart} className="mr-1" /> */}
                {/* Shop */}
              </button>
            {/* </div> */}
          {/* </div> */} 

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link
                to="/gallery"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {/* <FontAwesomeIcon icon={faShoppingCart} className="mr-1" /> */}
                {/* Shop */}
              {/* </Link> */} 
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
    </nav>
  );
};

export default Header;
