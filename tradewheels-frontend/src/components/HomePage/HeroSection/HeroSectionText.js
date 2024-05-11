import React from "react";
import "./Style.css";
import { motion } from "framer-motion";

const HeroSectionText = () => {
  return (
    <div className="px-18 sm:px-12 md:px-24">
      <motion.div
        className="hidden md:block border-l-8 border-red-800 p-2 absolute top-1/5 mt-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, x: { duration: 1, delay: 1 } }}
      >
        <div className="text-dark-white ml-10 flex items-center text-3xl md:text-4xl lg:text-5xl font-semibold">
          Find Used Cars In{" "}
          <span className="ml-2 text-red-700">Pakistan At Best Prices</span>
        </div>
        <div className="text-red-700 text-xs md:text-sm lg:text-base ml-10">
          With Thousand of Cars, We Have Just The Right One For You
        </div>
      </motion.div>

      {/* Responsive heading for below medium device sizes */}
      <div className="flex items-center justify-center">
        <motion.div
          className="text-center md:hidden top-1/5 mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-red-800">
            Find Used Cars In Pakistan At Best Prices
          </h1>
          <div className="mb-6 text-xs sm:text-sm md:text-base font-normal text-dark-200 sm:px-16">
            With Thousand of Cars, We Have Just The Right One For You
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionText;
