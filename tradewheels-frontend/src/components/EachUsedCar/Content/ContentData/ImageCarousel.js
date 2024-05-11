import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import GenericCarImage from "../../../../images/GenericCar.png";

export default function ImageCarousel({ carAdData }) {
  const images = carAdData.carAd?.images || [];

  return (
    <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-dark-text h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-dark-text h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-dark-text bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full h-96 overflow-hidden after:clear-both after:block after:content-['']">
          {images.map((image, index) => (
            <TECarouselItem
              key={index}
              itemID={index + 1}
              className="relative float-left -mr-[100%] hidden w-full h-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src={
                  images.length > 0
                    ? `http://localhost:7000/${image}`
                    : GenericCarImage
                }
                className={`block w-full h-full object-cover ${
                  images.length === 0 ? "max-h-64" : ""
                }`}
                alt={`Car image ${index + 1}`}
              />
              {/* Optional: Display car make and model for each image */}
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-dark-text md:block">
                <h5 className="text-xl">{carAdData.carAd?.make}</h5>
                <p>{carAdData.carAd?.model}</p>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
}
