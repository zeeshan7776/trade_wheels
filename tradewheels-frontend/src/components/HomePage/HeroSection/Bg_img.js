import React from "react";
import Bmw from "../../../images/bmw.png";
import { motion } from "framer-motion";

const Bg_img = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="relative flex items-center justify-center w-full max-w-md mt-0"
        initial={{ opacity: 0 }}
        animate={{
          y: [-100, 100],
          opacity: 1,
        }}
        transition={{
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 3 },
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-b from-zinc-50 to-red-300 filter blur-xl opacity-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-t from-zinc-50 to-red-300 filter blur-xl opacity-20"></div>
        <img src={Bmw} className="relative" alt="" />
      </motion.div>
    </div>
  );
};

export default Bg_img;
