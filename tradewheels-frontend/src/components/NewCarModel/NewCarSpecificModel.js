import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSectionBox from "./HeroSection/HeroSectionBox";
import Variants from "./Variants/Variants";
import Specifications from "./Specifications/Specifications";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewCarSpecificModel = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/newcarspecificmodel/${id}`
        );
        setCar(response.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Error fetching car details:",
          error.response ? error.response.data.message : error.message
        );
        setError("Failed to fetch car details");
        setLoading(false);
      }
    };

    fetchCarData();
  }, [id]);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <p className="text-dark-100 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (error) return <div className="mt-10 text-center">{error}</div>;
  if (!car)
    return <div className="mt-10 text-center">No car data available</div>;

  return (
    <div className="mx-10 md:mx-24 py-20">
      <div className="text-dark-text w-full h-full mb-20">
        <motion.div
          className="text-xl sm:text-2xl font-semibold text-dark-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          {car.make} {car.model} 2024 Price in Pakistan, Image, Specs & Features
        </motion.div>
        <div className="w-full h-full mt-6">
          <HeroSectionBox car={car} />
        </div>
      </div>
      <div>
        <Variants car={car} />
      </div>
      <div>
        <Specifications car={car} />
      </div>
    </div>
  );
};

export default NewCarSpecificModel;
