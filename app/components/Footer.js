import React from "react";
import { faHome, faInfoCircle,  faPhone, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"; // Corrected import statement
// faShoppingCart, faImages,
import { faImages } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  About
                </Link>
              </li>
              {/* <li className="mb-2">
                <Link to="#" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Shop
                </Link>
              </li> */}
              <li className="mb-2">
                <Link to="/gallery" className="hover:text-gray-400">
                  <FontAwesomeIcon icon={faImages} className="mr-2" />
                  Gallery
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
          {/* Physical Address and Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>
              <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
             Sondu,Kisumu City
            </p>
            <p className="mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              0702802588
            </p>
            <p className="mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              0743833555
            </p>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <form action="" method="post" className="flex ">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-auto first-line:rounded-l-md focus:outline-none text-black rounded-l-lg "
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-auto rounded-r-md focus:outline-none">
                <Link to='#'>
                 Subscribe
                </Link>
              </button>
            </form>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-end mt-8">
          <Link to="#" className="mr-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-2xl hover:text-gray-400"
            />
          </Link>
          <Link to="#" className="mr-4">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl hover:text-gray-400"
            />
          </Link>
          <Link to="#" className="mr-4">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white text-2xl hover:text-gray-400"
            />
          </Link>
          <Link to="#" className="mr-4">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-2xl hover:text-gray-400"
            />
          </Link>
          <Link to="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-2xl hover:text-gray-400"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
