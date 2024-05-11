import React, { useState, useEffect } from "react";
import ToyotaLogo from "../../../../images/ToyotaLogo.png";
import HondaLogo from "../../../../images/HondaLogo.png";
import SuzukiLogo from "../../../../images/SuzukiLogo.png";
import KiaLogo from "../../../../images/KiaLogo-Old.png";
import AudiLogo from "../../../../images/AudiLogo.png";
import DaihatsuLogo from "../../../../images/DaihatsuLogo.png";
import HyundaiLogo from "../../../../images/HyundaiLogo.png";
import LexusLogo from "../../../../images/LexusLogo.png";
import MercedesLogo from "../../../../images/MercedesLogo.png";
import NissanLogo from "../../../../images/NissanLogo.png";
import PeugeotLogo from "../../../../images/PeugeotLogo.png";
import ChanganLogo from "../../../../images/ChanganLogo.png";
import PrinceLogo from "../../../../images/PrinceLogo.png";
import ProtonLogo from "../../../../images/ProtonLogo.png";
import HavalLogo from "../../../../images/HavalLogo.png";
import FawLogo from "../../../../images/FawLogo.png";
import MGLogo from "../../../../images/MGLogo.png";
import DFSKLogo from "../../../../images/DFSKLogo.png";
import CheryLogo from "../../../../images/CheryLogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NextPrevButton from "../../../NextPrevButton";

const manufacturers = [
  { name: "Toyota", logo: ToyotaLogo },
  { name: "Honda", logo: HondaLogo },
  { name: "Suzuki", logo: SuzukiLogo },
  { name: "Kia", logo: KiaLogo },
  { name: "Hyundai", logo: HyundaiLogo },
  { name: "Cherry", logo: CheryLogo },
  { name: "Changan", logo: ChanganLogo },
  { name: "Peugeot", logo: PeugeotLogo },
  { name: "DFSK", logo: DFSKLogo },
  { name: "Prince", logo: PrinceLogo },
  { name: "Daihatsu", logo: DaihatsuLogo },
  { name: "Nissan", logo: NissanLogo },
  { name: "Mercedes", logo: MercedesLogo },
  { name: "Audi", logo: AudiLogo },
  { name: "MG", logo: MGLogo },
  { name: "Proton", logo: ProtonLogo },
  { name: "Haval", logo: HavalLogo },
  { name: "Faw", logo: FawLogo },
  { name: "Lexus", logo: LexusLogo },
];

const Make = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? manufacturers.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === manufacturers.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full px-4 md:px-8 text-dark-text">
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
        Car by Make
      </motion.div>
      <div className="w-full my-14">
        <div>
          <motion.div
            className="flex items-center justify-between p-5 gap-x-10 overflow-hidden"
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
            {manufacturers.map((manufacturer, index) => (
              <Link
                to={`/allusedcars?make=${manufacturer.name.toLowerCase()}`}
                key={manufacturer.name}
              >
                <div
                  className="hover:text-dark-white hover:border-none  flex items-center transition-transform ease-out duration-500
                   bg-dark-bkg border border-dark-700 min-w-24 min-h-28 flex-col justify-center rounded-full"
                  style={{ transform: `translateX(-${curr * 141.1}%)` }}
                  key={index}
                >
                  <div className="w-full h-14 flex items-center justify-center">
                    <img src={manufacturer.logo} alt=""></img>
                  </div>
                  <div>{manufacturer.name}</div>
                </div>
              </Link>
            ))}
          </motion.div>
          {/* Next and Prev Buttons */}
          <div>
            <NextPrevButton prev={prev} next={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Make;
