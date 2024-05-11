import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const NextPrevButton = (props) => {
  return (
    <div>
      <motion.div
        className="left-0 right-0 flex justify-between items-center text-sm"
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
        <button
          onClick={props.prev}
          className="hover:text-dark-white flex items-center"
        >
          <GrFormPrevious />
          <div>Previous</div>
        </button>
        <button
          onClick={props.next}
          className="hover:text-dark-white flex items-center"
        >
          <div>Next</div>
          <GrFormNext />
        </button>
      </motion.div>
    </div>
  );
};

export default NextPrevButton;
