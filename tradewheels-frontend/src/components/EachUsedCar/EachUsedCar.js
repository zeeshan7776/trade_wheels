import React, { useEffect, useState } from "react";
import Content from "./Content/Content";
import { useParams } from "react-router-dom";
import axios from "axios";

const EachUsedCar = () => {
  const [carAdData, setCarAdData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCarAdData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/cars/${id}`
        );
        setCarAdData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setLoading(false);
      }
    };
    fetchCarAdData();
  }, [id]);

  if (!carAdData)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <p className="text-dark-100 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="mx-10 md:mx-24 py-20">
      <div className="text-dark-text mb-20 w-full h-full">
        <Content carAdData={carAdData} />
      </div>
    </div>
  );
};

export default EachUsedCar;
