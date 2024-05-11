import React from "react";
import Popular from "./PopularCarSection/Popular";
import { motion } from "framer-motion";
import Make from "./MakeSection/Make";

const FeaturedNewCars = () => {
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
        <div className="text-xl text-dark-white">Featured New Cars</div>
      </motion.div>
      <div>
        <Popular autoSlide={true} />
      </div>
      <div>
        <Make autoSlide={true} />
      </div>
    </div>
  );
};

export default FeaturedNewCars;
