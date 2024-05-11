import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PostAnAdd = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          x: { type: "spring", stiffness: 60 },
          ease: "easeOut",
        }}
        className="flex items-center"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ damping: 10, type: "spring", stiffness: 400 }}
          className="text-red-700 border-2 ml-4 border-solid border-red-800 w-28 h-8 rounded hover:bg-red-900 hover:border-none hover:text-zinc-300"
        >
          <Link to="/postanadd">Post an Add</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PostAnAdd;
