import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import LocationLogo from "../../../images/LocationLogo.png";
import GenericCar from "../../../images/GenericCar.png";

const Ads = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/allusedcars?limit=5"
        );
        console.log(response.data);
        setAds(response.data.ads);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);
  return (
    <div className="text-dark-text px-1 sm:px-8 flex justify-center">
      <div className="flex-col">
        {ads.map((ad, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              delay: 0.2 + index * 0.1,
              duration: 0.5,
              x: { type: "spring", stiffness: 60 },
            }}
          >
            <Link
              to={`/eachusedcar/${ad._id}`}
              className="mb-2 flex flex-col items-center border rounded-lg shadow sm:flex-row sm:max-w-xl border-dark-700 bg-dark-bkg hover:bg-dark-700"
            >
              <div className="w-full overflow-hidden">
                <img
                  alt=""
                  className="object-cover w-full rounded-t-lg h-full sm:h-auto sm:w-48 md:rounded-none md:rounded-s-lg"
                  src={`http://localhost:7000/${
                    ad.images && ad.images.length > 0
                      ? ad.images[0]
                      : GenericCar
                  }`}
                />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-white">
                  {ad.make} {ad.model}
                </h5>
                <div className="mb-3 font-normal text-sm text-dark-text">
                  {ad.year} | {ad.mileage} km | {ad.engineCapacity}cc |{" "}
                  {ad.fuelType}
                </div>
                <div className="mb-3 font-normal text-dark-text flex-col items-center justify-between">
                  <div className="text-red-700">PKR {ad.price}</div>
                  <div className="text-sm flex items-center">
                    <img alt="" src={LocationLogo} />
                    {ad.city}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
