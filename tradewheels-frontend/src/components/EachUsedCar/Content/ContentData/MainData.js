import React from "react";
import Transmission from "../../../../images/TransmissionIcon.png";
import Mileage from "../../../../images/MileageIcon.png";
import Fuel from "../../../../images/FuelIcon.png";
import Engine from "../../../../images/EngineIcon.png";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

const detail = [
  "Assembly",
  "Body Type",
  "Registration",
  "Exterior Color",
  "Mileage",
  "Model Year",
];

const icons = [Engine, Mileage, Fuel, Transmission];
const iconTitle = ["Engine", "Mileage (Km / L)", "Fuel", "Transmission"];

const MainData = ({ carAdData }) => {
  const iconDescription = [
    carAdData.carAd.engineCapacity + "cc",
    carAdData.carAd.averageMin + "-" + carAdData.carAd.averageMax,
    carAdData.carAd.fuelType,
    carAdData.carAd.transmission,
  ];
  const detailText = [
    carAdData.carAd.assembly,
    carAdData.carAd.bodyType,
    carAdData.carAd.registeredIn,
    carAdData.carAd.exteriorColor,
    carAdData.carAd.mileage + " km",
    carAdData.carAd.year,
  ];

  return (
    <motion.div
      className="w-full bg-dark-900 mb-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
        x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
      }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 md:h-1/2 md:p-10">
          <ImageCarousel carAdData={carAdData} />
        </div>
        <div className="py-4 md:py-12">
          <div className="flex-col items-center px-12">
            {icons.map((icon, index) => (
              <div className="flex mb-4 md:mb-24" key={index}>
                <img
                  src={icon}
                  alt="icon"
                  className="w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-4"
                />
                <div>
                  <div className="text-xs font-thin">{iconTitle[index]}</div>
                  <div className="text-dark-200">{iconDescription[index]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 md:px-10">
        <div className="text-dark-white font-semibold">
          <div>Detail</div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-dark-text">
              <tbody>
                {detail.map((each, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark-200 dark:border-zinc-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-zinc-800"
                    >
                      {each}
                    </th>
                    <td className="px-6 py-4 text-dark-200">
                      {detailText[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-3 md:px-10">
        <div className="text-dark-white font-semibold">
          <div>Seller's Comments</div>
        </div>
        <div className="text-dark-text mt-4">{carAdData.carAd.description}</div>
      </div>
    </motion.div>
  );
};

export default MainData;
