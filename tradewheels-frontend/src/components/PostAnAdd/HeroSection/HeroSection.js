import React from "react";
import CarIcon from "../../../images/CarIcon.png";
import { motion } from "framer-motion";
import ImageIcon from "../../../images/ImageIcon.png";

const HeroSection = () => {
  return (
    <>
      <motion.div
        className="w-full h-80 bg-dark-900 flex items-center justify-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          y: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
        }}
      >
        <div className="text-lg">
          <div className="sm:text-3xl md:text-4xl text-dark-white">
            Sell Your Car With 2 Simple Steps
          </div>
          <div className="text-xs text-red-700 float-end">
            It's Totally Free
          </div>
        </div>
        <div className="absolute text-xs w-full top-80 md:top-80 flex flex-col md:flex-row items-center justify-center">
          <div className="md:mr-24">
            <div className="flex items-center sm:text-sm">
              <img src={CarIcon} className="mr-3" alt=""></img>
              <div>Enter Your Car Information</div>
            </div>
          </div>
          <div className="md:ml-24">
            <div className="flex items-center sm:text-sm">
              <img src={ImageIcon} className="mr-3" alt=""></img>
              <div>Upload Photos</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
