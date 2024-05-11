import React from "react";
import { motion } from "framer-motion";
import LocationLogo from "../../../../images/LocationLogo.png";
import MobileIcon from "../../../../images/MobileIcon.png";

const HeadingBar = ({ carAdData }) => {
  const { name, contactnumber } = carAdData.creators || {};

  return (
    <motion.div
      className="mb-5 sm:mb-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
        x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
      }}
    >
      <div className="w-full h-full md:h-32 p-3 md:px-10 bg-dark-900 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <div className="sm:text-lg md:text-2xl font-semibold text-dark-white">
            {carAdData.carAd.make} {carAdData.carAd.model} For Sale
          </div>
          <div className="flex items-center">
            <img src={LocationLogo} alt="locationlogo" />
            <div className="text-xs">{carAdData.carAd.city}, Punjab</div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-center">
          <div className="mr-4">
            <div className="sm:text-md md:text-2xl text-red-700">
              PKR {carAdData.carAd.price}
            </div>
          </div>
          <div className="flex items-center bg-dark-900">
            <div className="w-10 h-10 sm:w-14 sm:h-14">
              <img src={MobileIcon} alt="mobicon" />
            </div>
            <div className="text-sm text-zinc-200">
              <div>{name}</div>
              <div>{contactnumber}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeadingBar;
