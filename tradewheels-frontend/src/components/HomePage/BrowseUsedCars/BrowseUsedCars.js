import React from "react";
import Category from "./CategorySection/Category";
import Make from "./MakeSection/Make";
import { motion } from "framer-motion";

const BrowseUsedCars = () => {
  return (
    <div className="text-dark-text mx-10 md:mx-24 py-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          delay: 0.2,
          duration: 0.5,
          x: { type: "spring", stiffness: 60 },
        }}
      >
        <p className="text-xl text-dark-white">Browse Used Cars</p>
      </motion.div>
      <div>
        <Category />
      </div>
      <div>
        <Make autoSlide={true} />
      </div>
    </div>
  );
};

export default BrowseUsedCars;
