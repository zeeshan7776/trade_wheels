import React, { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import MainContent from "./MainContent/MainContent";
import { useNavigate } from "react-router-dom";

const PostAnAdd = () => {
  const navigate = useNavigate();

  const initialState = {
    city: "",
    year: "",
    make: "",
    model: "",
    assembly: "",
    bodyType: "",
    engineCapacity: "",
    registeredIn: "",
    exteriorColor: "",
    mileage: "",
    price: "",
    description: "",
    average: "",
    fuelType: "",
    transmission: "",
    images: [],
  };

  const callHomePage = async () => {
    try {
      const response = await fetch("http://localhost:7000/autoSignIn", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.status === 401) {
        navigate("/login");
      } else {
        const data = await response.json();
      }

      if (!response) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);

  return (
    <div className="text-dark-text">
      <div>
        <HeroSection />
      </div>
      <div className="mx-10 md:mx-24">
        <MainContent initialState={initialState} />
      </div>
    </div>
  );
};

export default PostAnAdd;
