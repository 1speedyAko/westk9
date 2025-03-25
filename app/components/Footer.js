import React from "react";
import { AiFillHome, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsImages, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 pb-0 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/" className="hover:text-gray-400 flex items-center">
                  <AiFillHome className="mr-2 text-lg" /> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="hover:text-gray-400 flex items-center">
                  <BsImages className="mr-2 text-lg" /> Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="list-none">
              <li className="mb-2">Dog Grooming</li>
              <li className="mb-2">Dog Breeding</li>
              <li className="mb-2">Dog Training</li>
              <li className="mb-2">Handler Training</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-lg focus:outline-none text-black"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md focus:outline-none">
                <Link href="/">Subscribe</Link>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links - Aligned to Bottom Left */}
        <div className="flex justify-end mt-8">
          <Link href="#" className="mr-4">
            <BsFacebook className="text-white text-lg hover:text-gray-400" />
          </Link>
          <Link href="https://www.instagram.com/westk.9" className="mr-4">
            <AiFillInstagram className="text-white text-lg hover:text-gray-400" />
          </Link>
          <Link href="#" className="mr-4">
            <BsTwitter className="text-white text-lg hover:text-gray-400" />
          </Link>
          <Link href="https://www.youtube.com/@Westk9" className="mr-4">
            <AiFillYoutube className="text-white text-lg hover:text-gray-400" />
          </Link>
          <Link href="#" className="mr-4">
            <BsLinkedin className="text-white text-lg hover:text-gray-400" />
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            © 2025 All rights reserved. Site made by{" "}
            <Link
              href="https://www.digitalcheuxes.co.ke"
              className="underline decoration-2 decoration-emerald-600 hover:text-gray-400"
            >
              digitalcheuxes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
