import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo02.svg";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-shadow duration-300 ease-in-out ${
        isScrolled ? "shadow-md bg-red-900" : "shadow-none bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between w-full p-4 md:px-6">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="h-8 md:h-10" src={Logo} alt="Official Brand Logo" />
          </Link>
          <button
            className="text-dark-300 hover:text-dark-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row items-center justify-between md:space-x-4 w-full md:w-auto`}
        >
          <SearchInput />
          <Link
            to="/login"
            className={`py-2 px-4 text-xs text-dark-300 ${
              isScrolled
                ? "hover:bg-dark-100 hover:bg-opacity-10"
                : "hover:bg-dark-bkg"
            } hover:text-dark-white rounded-md font-medium`}
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className={`py-2 px-4 text-xs text-dark-300 ${
              isScrolled
                ? "hover:bg-dark-100 hover:bg-opacity-10"
                : "hover:bg-dark-bkg"
            } hover:text-dark-white rounded-md font-medium`}
          >
            Sign up
          </Link>
          <DropdownMenu />
          <UserProfile />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
