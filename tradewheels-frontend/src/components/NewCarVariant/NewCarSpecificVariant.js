import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import HeroSectionBox from "./HeroSection/HeroSectionBox";
import Price from "./Price/Price";
import Specification from "./Specification/Specification";
import Feature from "./Feature/Feature";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewCarSpecificVariant = () => {
  const { variantModel } = useParams();
  const [carVariant, setCarVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:7000/newcarspecificvariant/${variantModel}`)
      .then((response) => {
        setCarVariant(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch car Variant details");
        setLoading(false);
      });
  }, [variantModel]);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <p className="text-dark-100 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!carVariant) return <div>No car data available</div>;

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
          {carVariant.make} {carVariant.model} 2024 Price in Pakistan, Specs &
          Features
        </motion.div>
        <div className="w-full h-full mt-6">
          <HeroSectionBox carVariant={carVariant} />
        </div>
      </div>
      <div>
        <Price carVariant={carVariant} />
      </div>
      <div>
        <Specification carVariant={carVariant} />
      </div>
      <div>
        <Feature carVariant={carVariant} />
      </div>
    </div>
  );
};

export default NewCarSpecificVariant;
