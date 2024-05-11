import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import NextPrevButton from "../../../NextPrevButton";

const names = [
  "Honda Civic",
  "Honda City",
  "Suzuki Swift",
  "Suzuki Cultus",
  "Suzuki Alto",
  "Honda BRV",
  "Suzuki WeagonR",
  "Kia Sportage",
  "Kia Stonic",
  "Toyota Fortuner",
  "Toyota Yaris",
  "Toyota Grande",
  "Toyota LandCruser",
];

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
      .catch(() => {
        setError("Failed to load cars");
      });

    if (autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? names.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === names.length - 1 ? 0 : curr + 1));

  if (error) return <p>Error loading cars: {error}</p>;
  if (!cars.length) return <p>Loading...</p>;

  return (
    <div className="w-full px-8 text-dark-text">
      <div className="my-10">
        {/* Heading */}
        <motion.div
          className="text-lg"
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
          {/* Popular Cars */}
          <motion.div
            className="flex items-center gap-x-9 my-24 px-7 overflow-hidden"
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
            {cars.map((car, index) => (
              <div key={index}>
                <div
                  className="flex items-center transition-transform ease-out duration-500 flex-col justify-center rounded-full"
                  style={{ transform: `translateX(-${curr * 111.1}%)` }}
                >
                  <Link to={`/newcarspecificmodel/${car._id}`}>
                    <div
                      className="flex items-center justify-center min-w-32 h-32 sm:min-w-80 sm:h-80 border border-dark-700 
                    rounded-full hover:border-none"
                    >
                      <img
                        className="rounded-t-lg"
                        key={index}
                        src={process.env.PUBLIC_URL + car.image}
                        alt={`${car.make} ${car.model}`}
                      />
                    </div>{" "}
                  </Link>
                  <div>
                    <div className="text-xs font-normal text-dark-text hover:text-dark-white">
                      <Link to={`/newcarspecificmodel/${car._id}`}>
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
            <NextPrevButton prev={prev} next={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
