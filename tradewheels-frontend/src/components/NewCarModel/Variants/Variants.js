import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Variants = ({ car }) => {
  return (
    <div className="text-dark-text px-2 w-full md:my-14">
      <motion.div
        className="text-lg md:text-xl font-semibold text-dark-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
          x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
        }}
      >
        {car.make} {car.model} 2024 Variants & It's Prices
      </motion.div>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-dark-text">
            <thead className="text-xs uppercase bg-dark-700 text-dark-text">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Variants
                </th>

                <th scope="col" className="px-6 py-3">
                  Prices
                </th>
              </tr>
            </thead>

            <tbody>
              {car.variants.map((variant, index) => (
                <tr
                  key={index}
                  className="odd:bg-dark-white odd:dark:bg-dark-900 even:bg-dark-white even:dark:bg-dark-bkg border-b
                   border-dark-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-dark-white hover:underline hover:text-red-700"
                  >
                    <Link to={`/newcarspecificvariant/${variant.model}`}>
                      {variant.make} {variant.model}
                    </Link>
                  </th>

                  <td className="px-6 py-4 font-medium dark:text-zinc-500 flex items-center gap-2 text-red-800">
                    <span className="font-thin">PKR</span>
                    <span className="font-bold text-red-700">
                      {variant.price}
                    </span>
                    <span className="font-thin text-xs">
                      (*Ex-Factory Price)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Variants;
