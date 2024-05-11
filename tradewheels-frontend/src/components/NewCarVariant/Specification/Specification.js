import { motion } from "framer-motion";
import React from "react";

const dimensions = [
  "Length",
  "Width",
  "Height",
  "Boot Space",
  "Number of Doors",
  "Weight",
  "Wheel Base",
  "Ground Clearence",
  "Seating Capacity",
];
const engine = [
  "Turbo Charger",
  "Engine Type",
  "Horse Power",
  "Valves Per Cylinder",
  "Fuel System",
  "Valve Mechanism",
  "Compression Ratio",
  "Max Speed",
  "Torque",
  "Cylinder Configuration",
  "Drive Train",
  "Number of Cylinders",
  "Displacement",
];
const transmission = ["Transmission Type", "GearBox"];
const suspension = ["Front Suspension", "Rear Suspension"];
const brakes = ["Front Brakes", "Rear Brakes"];
const wheels = ["Wheel Type", "Wheel Size"];
const tyres = ["Tyre Size", "Spare Tyre", "Spare Tyre Size"];
const fueleconomy = ["Fuel Tank Capacity", "City Mileage", "Highway Mileage"];
const steering = ["Steering Type", "Minimum Turning Radius", "Power Assisted"];

const Specification = ({ carVariant }) => {
  const dimensionsText = [
    `${carVariant.length} mm`,
    `${carVariant.width} mm`,
    `${carVariant.height} mm`,
    `${carVariant.bootSpace} L`,
    `${carVariant.numberOfDoors} Doors`,
    `${carVariant.weight} kg`,
    `${carVariant.wheelBase} mm`,
    `${carVariant.groundClearence} mm`,
    `${carVariant.seatingCapacity} Persons`,
  ];
  const engineText = [
    `${carVariant.turboCharger}`,
    `${carVariant.engineType}`,
    `${carVariant.horsePower} HP @ ${carVariant.horsePowerRpm} RPM`,
    `${carVariant.valvesPerCylinder}`,
    `${carVariant.fuelSystem}`,
    `${carVariant.valveMechanism}`,
    `${carVariant.compressionRatio}`,
    `${carVariant.maxSpeed} Km / h`,
    `${carVariant.torque} Nm @ ${carVariant.torqueRpm} RPM`,
    `${carVariant.cylinderConfiguration}`,
    `${carVariant.driveTrain}`,
    `${carVariant.numberOfCylinders}`,
    `${carVariant.displacement} cc`,
  ];
  const transmissionText = [
    `${carVariant.transmissionType}`,
    `${carVariant.gearBox}-Speed`,
  ];
  const steeringText = [
    `${carVariant.steeringType}`,
    `${carVariant.minimumTurningRadius} m`,
    `${carVariant.powerAssisted}`,
  ];
  const suspensionText = [
    `${carVariant.frontSuspension}`,
    `${carVariant.rearSuspension}`,
  ];
  const brakesText = [`${carVariant.frontBrakes}`, `${carVariant.rearBrakes}`];
  const wheelsText = [
    `${carVariant.wheelType}`,
    `${carVariant.wheelSize} inch`,
  ];
  const tyresText = [
    `${carVariant.tyreSize}`,
    `${carVariant.spareTyre}`,
    `${carVariant.spareTyreSize} inch`,
  ];
  const fueleconomyText = [
    `${carVariant.fuelTankCapacity} L`,
    `${carVariant.cityMileage} Km / L`,
    `${carVariant.highwayMileage} Km / L`,
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
        Specifications
      </motion.div>

      {/* Dimensions */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs  uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Dimensions
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {dimensions.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{dimensionsText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Engine */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Engine
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {engine.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{engineText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transmission */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Transmission
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {transmission.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{transmissionText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Steering */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Steering
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {steering.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{steeringText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Suspension */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Suspension
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {suspension.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{suspensionText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Brakes */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Brakes
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {brakes.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{brakesText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wheels */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Wheels
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {wheels.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{wheelsText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tyres */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Tyres
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {tyres.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{tyresText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fuel Economy */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Fuel Economy
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {fueleconomy.map((each, index) => (
              <tr key={index} className="border-b border-dark-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-dark-white bg-dark-900"
                >
                  {each}
                </th>
                <td className="px-6 py-4">{fueleconomyText[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specification;
