import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo02.svg";
import SocialIcons from "./SocialIcons";

const make = [
  "Suzuki",
  "Kia",
  "Hyundai",
  "Changan",
  "Peugeot",
  "Nissan",
  "Toyota",
  "Honda",
  "DFSK",
  "MG",
  "Proton",
  "Haval",
  "Baic",
  "Isuzu",
];

const category = ["Manual", "Automatic", "660", "1300", "1800", "1000"];

const Footer = () => {
  return (
    <div>
      <footer className="bg-red-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Link to="/">
                <img
                  className="h-8 rounded"
                  src={Logo}
                  alt="Official Brand Logo"
                />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-10 sm:gap-8 sm:grid-cols-3">
              {/* Explore Tradewheels */}
              <div>
                <h2 className="mb-6 text-xs sm:text-sm font-semibold uppercase text-dark-200">
                  Explore TradeWheels
                </h2>
                <ul className="text-dark-200 text-xs sm:text-sm">
                  <li className="mb-2">
                    <Link to="/usedcars" className="hover:underline">
                      Used Cars
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/newcars" className="hover:underline">
                      New Cars
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Cars by Make */}
              <div>
                <h2 className="mb-6 text-xs sm:text-sm font-semibold uppercase text-dark-200">
                  Cars by Make
                </h2>
                <ul className="text-dark-200 text-xs sm:text-sm">
                  {make.map((each, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        to={`/allusedcars?make=${each.toLowerCase()}`}
                        className="hover:underline "
                      >
                        {each}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Cars by Category */}
              <div>
                <h2 className="mb-6 text-xs sm:text-sm font-semibold uppercase text-dark-200">
                  Cars by Category
                </h2>
                <ul className="text-dark-200 text-xs sm:text-sm">
                  {category.map((each, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        to={`/allusedcars?category=${encodeURIComponent(each)}`}
                        className="hover:underline"
                      >
                        {each}
                        {["1000", "1800", "660", "1300"].includes(each)
                          ? "cc"
                          : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Footer */}
          <hr className="my-6 sm:mx-auto border-dark-text lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs sm:text-sm sm:text-center text-dark-200">
              © 2024{" "}
              <Link to="/" className="hover:underline">
                TradeWheels™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="hidden sm:block">
              <div className="mb-2 flex items-center justify-center">
                <div className="mr-4">Follow Us:</div>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
