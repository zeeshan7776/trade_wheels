import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import NextPrevButton from "../../NextPrevButton";

const Popular = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [cars, setCars] = useState([]);
  const [curr, setCurr] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:7000/popularNewCars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        setError("Failed to load cars");
      });

    if (autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  const prev = () =>
    setCurr((prevCurr) => (prevCurr === 0 ? cars.length - 1 : prevCurr - 1));

  const next = () =>
    setCurr((prevCurr) => (prevCurr === cars.length - 1 ? 0 : prevCurr + 1));

  if (error) return <p>Error loading cars: {error}</p>;

  return (
    <div className="w-full px-2 sm:px-8">
      <div className="my-10">
        {/* Heading */}
        <motion.div
          className="text-xl"
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
          <div>Popular</div>
        </motion.div>

        <div>
          <motion.div
            className="flex items-center gap-x-9 my-10 px-2 sm:my-14 sm:px-7 overflow-hidden"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              delay: 0.2,
              duration: 1,
              y: { type: "spring", stiffness: 60 },
            }}
          >
            {cars.map((car) => (
              <div key={car._id}>
                <div
                  className="flex transition-transform ease-out duration-500 flex-col justify-center"
                  style={{ transform: `translateX(-${curr * 111.1}%)` }}
                >
                  <div
                    className="flex items-center justify-center min-w-64 h-64 sm:min-w-80 sm:h-80 border border-dark-700 rounded-sm shadow
                   hover:border-dark-white"
                  >
                    <div>
                      <Link to={`/newcarspecificmodel/${car._id}`}>
                        <img
                          className="rounded-t-lg"
                          src={process.env.PUBLIC_URL + car.image}
                          alt={`${car.make} ${car.model}`}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="font-normal text-dark-text hover:text-dark-white">
                      <Link
                        to={`/newcarspecificmodel/${car._id}`}
                        className="flex items-center justify-between"
                      >
                        <div className="font-bold">
                          {car.make} {car.model}
                        </div>
                        <div className="text-sm text-red-600">
                          PKR {car.price.min} - {car.price.max}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Next and Previous Button */}
          <div>
            <NextPrevButton next={next} prev={prev} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
