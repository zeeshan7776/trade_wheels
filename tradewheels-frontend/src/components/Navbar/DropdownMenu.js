import { Link } from "react-router-dom";
import React from "react";
import Dropdown from "../../images/Dropdown.png";

const DropdownMenu = () => {
  return (
    <>
      <div className="relative group">
        <img
          src={Dropdown}
          className="w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
          alt=""
        />

        <div className="absolute right-0 z-10 hidden group-hover:block">
          <div className="px-4 pt-2 pb-2 text-xs bg-dark-700 rounded-md shadow-lg">
            <div className="dropdown-menu">
              <ul className="divide-y-2">
                <li className="p-1">
                  <Link to="/usedcars" className=" dropdown-item">
                    UsedCars
                  </Link>
                </li>
                <li className="p-1">
                  <Link to="/newcars" className=" dropdown-item">
                    NewCars
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/postanadd" className="dropdown-item">
                    Post An Ad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
