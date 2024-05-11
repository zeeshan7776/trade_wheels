import React from "react";
import { Link } from "react-router-dom";
import LocationLogo from "../../../images/LocationLogo.png";
import { motion } from "framer-motion";

const ListedItem = ({ adId, ad }) => {
  return (
    <div
      key={adId}
      className="sm:w-1/2 md:w-1/3 px-2 flex items-top justify-center mb-2"
    >
      <motion.div
        className="transition ease-in-out max-w-xs border rounded-lg shadow bg-dark-bkg border-dark-text hover:bg-dark-700 hover:border-dark-white w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
        }}
      >
        <Link
          className="bg-dark-700 rounded-t-lg flex items-center justify-center w-full"
          to={`/eachusedcar/${adId}`}
        >
          <div className="w-full h-56 overflow-hidden">
            <img
              className="w-full h-full rounded-t-lg object-cover"
              alt="Image"
              src={`http://localhost:7000/${ad.images[0]}`}
            />
          </div>
        </Link>
        <div className="p-5">
          <Link to={`/eachusedcar/${adId}`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-dark-200">
              {ad.make} {ad.model}
            </h5>
          </Link>
          <div className="flex items-center flex-wrap justify-center mb-3 font-normal text-dark-text">
            {ad.year} <div className="mx-2 opacity-20 text-dark-white">|</div>
            <div className="flex items-center">
              <div>{ad.mileage}</div> <div className="ml-0.5">km</div>
            </div>
            <div className="mx-2 opacity-20 text-dark-white">|</div>{" "}
            {ad.transmission}
            <div className="mx-2 opacity-20 text-dark-white">|</div>
            {ad.fuelType} <p className="mx-2 opacity-20 text-dark-white">|</p>
            {ad.engineCapacity}cc
          </div>
          <div className="flex items-center justify-between">
            <div className="text-red-800 text-sm md:text-lg flex items-center">
              <div className="font-thin">PKR</div>
              <div className="font-semibold ml-2 text-red-600">{ad.price}</div>
            </div>
            <div className="flex items-center text-sm">
              <img src={LocationLogo} alt="locationlogo" />
              {ad.city}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ListedItem;
