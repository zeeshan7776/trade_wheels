import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Modals = ({ adId, ad }) => {
  return (
    <div key={adId} className="w-full mb-1 px-2 text-dark-text">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            delay: 0.2,
            duration: 1,
            y: { type: "spring", stiffness: 60, delay: 0.2 },
          }}
        >
          <div>
            <div className="mb-0.2 flex transition-transform ease-out duration-500 flex-col justify-center rounded-full">
              <div
                className="flex flex-col md:flex-row items-center justify-center min-w-48 h-80 border border-dark-700 rounded-sm shadow
                 hover:border-dark-100"
              >
                <div>
                  <Link to={`/newcarspecificmodel/${adId}`}>
                    <img
                      className="mr-8 h-80"
                      alt="modelimage"
                      src={process.env.PUBLIC_URL + ad.image}
                    />
                  </Link>
                </div>
                <div className="p-1">
                  <div className="font-normal text-dark-text hover:text-dark-white">
                    <Link
                      to={`/newcarspecificmodel/${adId}`}
                      className="flex items-center justify-between gap-10"
                    >
                      <div className="text-sm md:text-md font-bold">
                        {ad.make} {ad.model}
                      </div>
                      <div className="text-xs md:text-sm text-red-600">
                        PKR {ad.price.min} - {ad.price.max}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modals;
