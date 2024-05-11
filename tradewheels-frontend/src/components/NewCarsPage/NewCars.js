import React from "react";
import Popular from "./Popular/Popular";
import Make from "./Make/Make";
import { motion } from "framer-motion";

const NewCars = () => {
  return (
    <h2 className="text-dark-text mx-10 md:mx-24 py-20">
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
        Find New Cars In Pakistan
      </motion.div>

      <div>
        <Popular autoSlide={true} />
      </div>

      <div>
        <Make autoSlide={true} />
      </div>
    </h2>
  );
};

export default NewCars;
