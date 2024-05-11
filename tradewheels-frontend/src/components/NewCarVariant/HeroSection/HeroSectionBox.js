import React from "react";
import Transmission from "../../../images/TransmissionIcon.png";
import Mileage from "../../../images/MileageIcon.png";
import Fuel from "../../../images/FuelIcon.png";
import Engine from "../../../images/EngineIcon.png";
import { motion } from "framer-motion";

const HeroSectionBox = ({ carVariant }) => {
  const icons = [Engine, Mileage, Fuel, Transmission];
  const iconTitle = ["Engine", "Mileage (Km / L)", "Fuel", "Transmission"];

  const iconDescription = [
    `${carVariant.engineCapacity}cc`,
    `${carVariant.mileage.min} - ${carVariant.mileage.max}`,
    `${carVariant.fuelType}`,
    `${carVariant.transmission}`,
  ];

  return (
    <motion.div
      className="w-full px-2 text-dark-text"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
        x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
      }}
    >
      <div
        className="w-full h-full md:h-72 border-2 border-dark-bkg rounded-md my-0.5
         flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between 
         md:px-4 lg:px-8 xl:px-112 bg-dark-900"
      >
        <div className="flex md:flex-col lg:flex-row lg:items-center md:gap-2 mt-4 md:mt-0 text-red-800 text-xs md:text-md">
          <div className="font-thin">PKR</div>
          <div className="font-bold text-red-700">{carVariant.price}</div>
          <div className="font-thin text-xs">(*Ex-Factory Price)</div>
        </div>
        <div className="w-1/2">
          <img src={process.env.PUBLIC_URL + carVariant.image} alt="" />
        </div>
      </div>
      <div
        className="w-full h-full md:h-20 bg-dark-700 bg-opacity-50 rounded-md flex
        flex-row items-center justify-between md:px-12 md:py-6"
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-1 md:flex-row md:mb-0"
          >
            <img
              src={icon}
              alt=""
              className="mr-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            <div>
              <div className="text-xs font-thin">{iconTitle[index]}</div>
              <div className="text-xs md:text-md">{iconDescription[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSectionBox;
