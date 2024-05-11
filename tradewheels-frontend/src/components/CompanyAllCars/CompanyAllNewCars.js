import React, { useState, useEffect } from "react";
import axios from "axios";
import Modals from "./Modals/Modals";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CompanyAllNewCars = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const manufacturer = capitalizeFirstLetter(query.get("make"));

  const fetchAds = async () => {
    const urlParams = new URLSearchParams();
    if (manufacturer) urlParams.append("make", manufacturer.toLowerCase());

    try {
      const response = await axios.get(
        `http://localhost:7000/companyallnewcars?${urlParams.toString()}`
      );
      setAds(response.data.ads);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, [manufacturer]);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <p className="text-dark-100 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="mx-10 md:mx-24 py-20">
      <div className="text-dark-text w-full h-full mb-10">
        {manufacturer && (
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
            {manufacturer} Car Models Price in Pakistan
          </motion.div>
        )}
      </div>

      <div className="mb-24">
        {ads.length > 0 ? (
          ads.map((ad) => <Modals key={ad._id} adId={ad._id} ad={ad} />)
        ) : (
          <div className="w-full text-center mt-5 p-12">
            <h2>No listings available. Please check back soon.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyAllNewCars;
