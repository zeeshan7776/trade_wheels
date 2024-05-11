import React from "react";
import Category from "./Category/Category";
import { motion } from "framer-motion";
import Make from "./Make/Make";
import Ads from "./Ads/Ads";

const UsedCars = () => {
  return (
    <div>
      <div className="text-dark-text mx-10 md:mx-24 py-20">
        {/* Heading of Used Cars Page */}
        <motion.div
          className="text-xl sm:text-2xl font-semibold text-dark-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          Find Used Cars In Pakistan
        </motion.div>

        <div>
          <Make autoSlide={true} />
        </div>

        <div>
          <Category />
        </div>

        <div>
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default UsedCars;
