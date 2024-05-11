import React from "react";
import AutoGear from "../../../images/AutoGear.png";
import ClutchPedal from "../../../images/ClutchPedal.png";
import TwoDoor from "../../../images/2Door.png";
import Sedan from "../../../images/Sedan.png";
import Hatchback from "../../../images/Hatchback.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { image: AutoGear, text: "Automatic" },
  { image: ClutchPedal, text: "Manual" },
  { image: Sedan, text: "1300" },
  { image: Sedan, text: "1800" },
  { image: Hatchback, text: "1000" },
  { image: TwoDoor, text: "660" },
];

const delay = [0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1];

const Category = () => {
  return (
    <div className="text-zinc-400 px-2 sm:px-8 w-full">
      {/* Heading */}
      <motion.div
        className="text-lg my-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          delay: 0.2,
          duration: 0.5,
          x: { type: "spring", stiffness: 60, delay: 0.2 },
        }}
      >
        <p className="text-lg">Category</p>
      </motion.div>

      <div className="flex justify-center items-center relative my-14 sm:my-24">
        <div>
          <div className="flex flex-wrap gap-x-8 sm:gap-x-10 items-center justify-center px-10">
            {categories.map((categorie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "easeInOut",
                  delay: delay[index],
                  duration: 1,
                  y: { type: "spring", stiffness: 60, delay: delay[index] },
                }}
              >
                <motion.div
                  whileHover={{
                    scale: [1, 1.3, 1.3, 1, 1],
                    rotate: [0, 0, 360, 360, 360],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                  }}
                >
                  <Link
                    to={`/allusedcars?category=${encodeURIComponent(
                      categorie.text
                    )}`}
                    className="flex flex-col items-center justify-center hover:text-dark-white"
                  >
                    <img src={categorie.image} alt={categorie.text} />
                    <div className="text-sm">
                      {categorie.text}
                      {["660", "1000", "1300", "1800"].includes(categorie.text)
                        ? "cc"
                        : ""}
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
