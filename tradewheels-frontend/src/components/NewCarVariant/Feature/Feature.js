import { motion } from "framer-motion";
import React from "react";

const safety = [
  "No. of Airbags",
  "Speed Sensing Auto Door Lock",
  "No. of Seatbelts",
  "Anti-Theft Alarm System",
  "Driver Seat Belt Warning",
  "Down Hill Assist Control",
  "Passenger Seat Belt Warning",
  "Hill Start Assist Control",
  "Immobilizer",
  "Traction Control",
  "Door Opening Warning",
  "Vehicle Stability Control",
  "Child Lock",
  "Rear Fog Lamp",
  "ISOFIX Child Seat Anchors",
  "Autonomous Emergency Braking (AEB)",
  "High Mount Stop Lamp",
  "BlindSpot Detection (BSD)",
  "Anti-Lock Braking System (ABS)",
  "Lane Departure Warning System (LDWS)",
  "Electronic Brake-Force Distribution (EBD)",
  "Lane Keep Assist System (LKAS)",
  "Brake Assist (BA)",
];

const convenience = [
  "Air Conditioner",
  "Rain Sensing Wipers",
  "Climate Control",
  "Heads Up Display (HUD)",
  "Air Purifier",
  "Cruise Control",
  " Rear AC Vents",
  "Driving Modes",
  "3rd Row AC Vents",
  "Paddle Shifter",
  "Heater",
  "Key Type",
  "Heated Seats",
  "Keyless Entry",
  "Defogger",
  "Push Start",
  "CoolBox",
  "Remote Engine Start",
  "Navigation",
  "Central Locking",
  "Optional Navigation",
  "Power Door Locks",
  "Front Camera",
  "Rear Camera",
  "Power Steering",
  "Power Windows",
  "360 Camera",
  "Power Mirrors",
  "Front Parking Sensors",
  "Auto Retractable Side Mirrors",
  "Rear Parking Sensors",
  "Power Boot",
  "Auto-Dimming Rear View Mirror",
  "Cup Holders",
  "Rear Central Control",
  "Arm Rest",
  "Rear Folding Seat",
  "Handbrake",
  "Rear Headrest",
  "Auto Brake Hold",
  "Rear Wiper",
  "Auto Parking System",
  "Seat Material Type",
  "Interior Lighting",
  "Driver Seat Electric Adjustment",
  " Glove Box Lamp",
  " Driver Seat Lumbar Support",
  "Cargo Light",
  " Driver Seat Memory Function",
  " Front Power Outlet",
  " Passenger Seat Electric Adjustment",
  " Rear Power Outlet",
  " Steering Adjustment",
  " Tyre Pressure Monitoring System (TPMS)",
  "Steering Switches",
  "Wireless Charger",
  "Headlight On Reminder",
  " Boss Seat Switch",
  "Automatic Head Lamps",
];

const infotainment = [
  "CD Player",
  " DVD Player",
  "Number of Speakers",
  "USB and Auxillary Cable",
  "Front Speakers",
  " Bluetooth Connectivity",
  "Rear Speakers",
  "Display Size",
  "Rear Seat Entertainment",
  "Voice Control",
  " Android Auto",
  "Apple Car Play",
];

const exterior = [
  "Alloy Wheels",
  "Adjustable Headlights",
  "Colored Outside Door Handles",
  "Rear Spoiler",
  "Side Mirrors with Indicators",
  " Sun Roof",
  "Moon Roof",
  "Fog Lights",
  "DRLs",
  " Roof Rails",
  "Side Steps",
  "Dual Exhaust",
];

const instrumentation = ["Tachometer", "Multi Info", "Information Cluster"];

const Feature = ({ carVariant }) => {
  const safetyText = [
    `${carVariant.numberOfAirbags}`,
    `${carVariant.speedSensingAutoDoorLock}`,
    `${carVariant.numberOfSeatbelts}`,
    `${carVariant.antiTheftAlarmSystem}`,
    `${carVariant.driverSeatBeltWarning}`,
    `${carVariant.downHillAssistControl}`,
    `${carVariant.passengerSeatBeltWarning}`,
    `${carVariant.hillStartAssistControl}`,
    `${carVariant.immobilizer}`,
    `${carVariant.tractionControl}`,
    `${carVariant.doorOpeningWarning}`,
    `${carVariant.vehicleStabilityControl}`,
    `${carVariant.childLock}`,
    `${carVariant.rearFogLamp}`,
    `${carVariant.isofixChildSeatAnchors}`,
    `${carVariant.autonomousEmergencyBraking}`,
    `${carVariant.highMountStopLamp}`,
    `${carVariant.blindspotDetection}`,
    `${carVariant.antilockBrakingSystem}`,
    `${carVariant.laneDepartureWarningSystem}`,
    `${carVariant.electronicBrakeforceDistribution}`,
    `${carVariant.laneKeepAssistSystem}`,
    `${carVariant.brakeAssist}`,
  ];

  const convenienceText = [
    `${carVariant.airConditioner}`,
    `${carVariant.rainSensingWipers}`,
    `${carVariant.climateControl}`,
    `${carVariant.headsUpDisplay}`,
    `${carVariant.airPurifier}`,
    `${carVariant.cruiseControl}`,
    `${carVariant.rearAcVents}`,
    `${carVariant.drivingModes}`,
    `${carVariant.thirdRowAcVents}`,
    `${carVariant.paddleShifter}`,
    `${carVariant.heater}`,
    `${carVariant.keyType}`,
    `${carVariant.heatedSeats}`,
    `${carVariant.keylessEntry}`,
    `${carVariant.defogger}`,
    `${carVariant.pushStart}`,
    `${carVariant.coolBox}`,
    `${carVariant.remoteEngineStart}`,
    `${carVariant.navigation}`,
    `${carVariant.centralLocking}`,
    `${carVariant.optionalNavigation}`,
    `${carVariant.powerDoorLocks}`,
    `${carVariant.frontCamera}`,
    `${carVariant.rearCamera}`,
    `${carVariant.powerSteering}`,
    `${carVariant.powerWindows}`,
    `${carVariant.threeSixtyCamera}`,
    `${carVariant.powerMirrors}`,
    `${carVariant.frontParkingSensors}`,
    `${carVariant.autoRetractableSideMirrors}`,
    `${carVariant.rearParkingSensors}`,
    `${carVariant.powerBoot}`,
    `${carVariant.autodimmingRearViewMirror}`,
    `${carVariant.cupHolders}`,
    `${carVariant.rearCentralControl}`,
    `${carVariant.armRest}`,
    `${carVariant.rearFoldingSeat}`,
    `${carVariant.handbrake}`,
    `${carVariant.rearHeadrest}`,
    `${carVariant.autoBrakeHold}`,
    `${carVariant.rearWiper}`,
    `${carVariant.autoParkingSystem}`,
    `${carVariant.seatMaterialType}`,
    `${carVariant.interiorLighting}`,
    `${carVariant.driverSeatElectricAdjustment}`,
    `${carVariant.gloveBoxLamp}`,
    `${carVariant.driverSeatLumbarSupport}`,
    `${carVariant.cargoLight}`,
    `${carVariant.driverSeatMemoryFunction}`,
    `${carVariant.frontPowerOutlet}`,
    `${carVariant.passengerSeatElectricAdjustment}`,
    `${carVariant.rearPowerOutlet}`,
    `${carVariant.steeringAdjustment}`,
    `${carVariant.tyrePressureMonitoringSystem}`,
    `${carVariant.steeringSwitches}`,
    `${carVariant.wirelessCharger}`,
    `${carVariant.headlightOnReminder}`,
    `${carVariant.bossSeatSwitch}`,
    `${carVariant.automaticHeadLamps}`,
  ];

  const infotainmentText = [
    `${carVariant.cdPlayer}`,
    `${carVariant.dvdPlayer}`,
    `${carVariant.numberOfSpeakers}`,
    `${carVariant.usbAndAuxillaryCable}`,
    `${carVariant.frontSpeakers}`,
    `${carVariant.bluetoothConnectivity}`,
    `${carVariant.rearSpeakers}`,
    `${carVariant.displaySize}`,
    `${carVariant.rearSeatEntertainment}`,
    `${carVariant.voiceControl}`,
    `${carVariant.androidAuto}`,
    `${carVariant.appleCarPlay}`,
  ];

  const exteriorText = [
    `${carVariant.alloyWheels}`,
    `${carVariant.adjustableHeadlights}`,
    `${carVariant.coloredOutsideDoorHandles}`,
    `${carVariant.rearSpoiler}`,
    `${carVariant.sideMirrorsWithIndicators}`,
    `${carVariant.sunRoof}`,
    `${carVariant.moonRoof}`,
    `${carVariant.fogLights}`,
    `${carVariant.drls}`,
    `${carVariant.roofRails}`,
    `${carVariant.sideSteps}`,
    `${carVariant.dualExhaust}`,
  ];
  const instrumentationText = [
    `${carVariant.tachometer}`,
    `${carVariant.multiInfo}`,
    `${carVariant.informationCluster}`,
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
        Features
      </motion.div>

      {/* Safety */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase bg-dark-700 text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Safety
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {safety.map((each, index) => (
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
                <td className="px-6 py-4 font-medium text-dark-500 flex items-center">
                  {safetyText[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Convenience & Comfort */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase bg-dark-700 text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Convenience & Comfort
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {convenience.map((each, index) => (
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
                <td className="px-6 py-4 font-medium text-dark-500 flex items-center">
                  {convenienceText[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Infotainment */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase bg-dark-700 text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Infotainment
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {infotainment.map((each, index) => (
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
                <td className="px-6 py-4 font-medium text-dark-500 flex items-center">
                  {infotainmentText[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Exterior */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase bg-dark-700 text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Exterior
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {exterior.map((each, index) => (
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
                <td className="px-6 py-4 font-medium text-dark-500 flex items-center">
                  {exteriorText[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instrumentation */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-dark-text">
          <thead className="text-xs uppercase bg-dark-700 text-dark-text">
            <tr>
              <th scope="col" className="px-6 py-3 bg-dark-700">
                Instrumentation
              </th>
              <th scope="col" className="px-6 py-3 bg-dark-700"></th>
            </tr>
          </thead>
          <tbody>
            {instrumentation.map((each, index) => (
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
                <td className="px-6 py-4 font-medium text-dark-500 flex items-center">
                  {instrumentationText[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feature;
