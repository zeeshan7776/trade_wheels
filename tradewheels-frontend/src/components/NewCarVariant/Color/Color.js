import { motion } from "framer-motion";
import React from "react";

const colorNames = [
  "Cherry Black",
  "Clear White",
  "Mercury Blue",
  "Sparkling Silver",
  "Sunset Red",
];

const Color = () => {
  return (
    <div className="text-dark-text px-2 w-full my-14">
      <motion.div
        className="text-lg md:text-xl font-semibold text-red-50"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          x: { type: "spring", stiffness: 60, duration: 1, delay: 0.3 },
        }}
      >
        Colors
      </motion.div>

      <div className="relative my-14">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 px-10">
          {colorNames.map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 1,
                y: { type: "spring", stiffness: 60, delay: 0.5 },
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="bg-CherryBlack-50 w-10 h-10 rounded-full mb-2" />
                <div className="text-sm">{name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Color;
