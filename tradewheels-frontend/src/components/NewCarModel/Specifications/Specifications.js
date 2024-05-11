import { motion } from "framer-motion";
import React from "react";

const Specifications = ({ car }) => {
  const title = [
    "Price",
    "Transmission",
    "Mileage",
    "Body Type",
    "Displacement",
    "Horse Power",
    "Torque",
    "Dimensions",
    "Weight",
    "Ground Clearence",
    "Seating Capacity",
    "Fuel Tank",
    "Top Speed",
    "Fuel Type",
    "Boot Space",
  ];
  const description = [
    `PKR ${car.price.min} - ${car.price.max}`,
    `${car.transmission}`,
    `${car.mileage.min} - ${car.mileage.max} Km/L`,
    `${car.bodyType}`,
    `${car.engineCapacity.min}cc - ${car.engineCapacity.max}cc`,
    `${car.horsePower.min} - ${car.horsePower.max} hp`,
    `${car.torque.min} - ${car.torque.max} Nm`,
    `${car.dimensions.length} * ${car.dimensions.width} * ${car.dimensions.height} mm`,
    `${car.weight} kg`,
    `${car.groundClearence} mm`,
    `${car.seatingCapacity}-Persons`,
    `${car.fuelTank} L`,
    `${car.topSpeed.min} - ${car.topSpeed.max} km/h`,
    `${car.fuelType}`,
    `${car.bootSpace} L`,
  ];

  return (
    <div className="text-dark-text px-2 w-full my-14">
      <motion.div
        className="text-lg md:text-xl font-semibold text-red-50"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
          x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
        }}
      >
        {car.make} {car.model} 2024 Specifications
      </motion.div>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-dark-text">
            <thead className="text-xs uppercase bg-dark-700 text-dark-text">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Specifications
                </th>

                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {title.map((each, index) => (
                <tr
                  key={index}
                  className="odd:bg-dark-white odd:dark:bg-dark-900 even:bg-dark-white even:dark:bg-dark-bkg 
                  border-b dark:border-dark-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-dark-white"
                  >
                    {each}
                  </th>

                  <td className="px-6 py-4 font-thin text-dark-500 flex items-center">
                    {description[index]}
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

export default Specifications;
