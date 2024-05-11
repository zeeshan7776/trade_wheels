import React from "react";
import BgImg from "./HeroSection/Bg_img";
import HeroSectionText from "./HeroSection/HeroSectionText";
import SectionA from "./SectionA/SectionA";
import BrowseUsedCars from "./BrowseUsedCars/BrowseUsedCars";
import FeaturedNewCars from "./FeaturedNewCars/FeaturedNewCars";

const Home = () => {
  return (
    <>
      <div>
        <div data-scroll-container>
          <div className="w-full h-screen">
            <div>
              <BgImg />
              <HeroSectionText />
            </div>
          </div>
          <div
            className="bg-dark-700 text-dark-text h-screen w-full flex items-center justify-center"
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="vertical"
          >
            <SectionA autoSlide={true} />
          </div>
        </div>
        <div>
          <BrowseUsedCars />
        </div>
        <div>
          <FeaturedNewCars />
        </div>
      </div>
    </>
  );
};

export default Home;
