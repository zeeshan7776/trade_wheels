import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import Hilux from "../../../images/Hilux.png";
import Prado from "../../../images/Prado.png";
import Sportage from "../../../images/Sportage-SectionA-Modal.png";
import Corolla from "../../../images/Corolla.png";
import Alto from "../../../images/Alto-SectionA.png";
import Swift from "../../../images/Swift-SectionA.png";
import WeagonR from "../../../images/Weagon-R.png";
import { useEffect } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import PostAnAdd from "./PostAnAdd";

const carousel = [Hilux, Prado, Sportage, Corolla, Alto, Swift, WeagonR];

const texts = [
  "Post Your Add for Free",
  "Sell Your Car Fast",
  "Get Genuine Offers from Verified Buyers",
];

const SectionA = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? carousel.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === carousel.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="p-2 flex items-center justify-center">
        <div className="w-full h-3/4 md:flex md:items-center md:justify-center">
          {/* here we implement the car carousal side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              ease: "easeOut",
            }}
            className="w-72 h-72 md:w-96 md:h-80 md:bg-red-800 relative md:left-1 md:bottom-1"
          >
            <div className="md:w-96 md:h-80 md:bg-dark-700 relative md:left-1 md:bottom-1">
              <div className="md:w-96 md:h-80 md:bg-dark-700 relative md:left-1 md:bottom-1">
                <div className="md:w-96 md:h-80 md:bg-SparklingSilver-50 relative md:left-1 md:bottom-1">
                  <div className="overflow-hidden relative md:w-96 md:h-80 md:bg-dark-700 md:left-1 md:bottom-1">
                    <div
                      className="w-full h-full flex items-center transition-transform ease-out duration-500"
                      style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                      {carousel.map((car, index) => (
                        <img key={index} src={car} alt="" />
                      ))}
                    </div>
                    <div className="absolute inset-0 flex justify-between items-center">
                      <button onClick={prev}>
                        <GrFormPrevious />
                      </button>
                      <button onClick={next}>
                        <GrFormNext />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* here we implement the text side of sectionA */}
          <div className="md:ml-20 text-center text-dark-text">
            {/* heading */}
            <motion.header
              className="text-2xl font-semibold text-dark-white"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                ease: "easeOut",
              }}
            >
              Post Your Add on TradeWheels
            </motion.header>
            {/* points */}
            <div className="mt-10">
              {texts.map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center "
                  initial={{ x: 100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    x: { type: "spring", stiffness: 60 },
                    ease: "easeOut",
                  }}
                >
                  <FcApproval />
                  <div className="ml-1 text-xs flex flex-wrap">{text}</div>
                </motion.div>
              ))}
            </div>
            {/* post an add button */}
            <div className="mt-10">
              <PostAnAdd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionA;
