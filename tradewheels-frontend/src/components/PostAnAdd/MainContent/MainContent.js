import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GenericCarImage from "../../../images/GenericCar.png";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../Alert/AlertContext";

const title = [
  "City",
  "Car Model Year",
  "Car Make",
  "Car Model",
  "Minimum Average",
  "Maximum Average",
  "Fuel Type",
  "Transmission",
  "Car Assembly",
  "Body Type",
  "Engine Capacity",
  "Registered In",
  "Exterior Color",
  "Mileage (KM)",
  "Price (Rs.)",
];

const inputName = [
  "city",
  "year",
  "make",
  "model",
  "averageMin",
  "averageMax",
  "fuelType",
  "transmission",
  "assembly",
  "bodyType",
  "engineCapacity",
  "registeredIn",
  "exteriorColor",
  "mileage",
  "price",
];

const inputType = [
  "text",
  "number",
  "text",
  "text",
  "number",
  "number",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "number",
  "number",
];

const PlaceHolder = [
  "Your City Name",
  "Car Model Year e.g(2022,2023...)",
  "Car Make e.g(suzuki,honda...)",
  "Car Model",
  "Car Minimum Average",
  "Car Maximum Average",
  "petrol / diesel",
  "manual / automatic",
  "Car Assembly e.g(imported or local)",
  "Car Body Type",
  "Car Engine Capacity e.g(1000cc,1800cc...)",
  "Car Registration City Name",
  "Car Exterior Color",
  "Car Mileage in km",
  "Enter Decent Price for Your Car",
];

const MainContent = ({ initialState }) => {
  const [adData, setAdData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    const filesInput = document.getElementById("dropzone-file");
    filesInput.onchange = (event) => {
      if (event.target.files.length > 5) {
        showAlert("You can only upload a maximum of 5 images!", "error");
        event.target.value = "";
      }
    };
  }, []);

  const handleChange = (e) => {
    setAdData({ ...adData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in adData) {
      if (key !== "images") {
        formData.append(key, adData[key]);
      }
    }

    const filesInput = document.querySelector('input[type="file"]');
    if (filesInput.files.length > 0) {
      for (const file of filesInput.files) {
        formData.append("files", file);
      }
    } else {
      const response = await fetch(GenericCarImage);
      const blob = await response.blob();
      formData.append("files", blob, "GenericCar.png");
    }

    try {
      const response = await fetch("http://localhost:7000/postanadd", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const userAd = await response.json();

      if (response.ok) {
        setAdData(initialState);
        showAlert("Ad Posted Successfully.", "success");
        navigate("/profile");
      } else {
        showAlert("Ad Posting Denied!", "error");
        throw new Error(userAd.message || "Failed to post ad");
      }
    } catch (error) {
      showAlert("Server Error!", "error");
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setError("");
    }
  };

  const handleFileSubmit = (event) => {
    if (!file) {
      event.preventDefault();
      setError("Please upload a photo.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        {/* Car Information Form */}
        <motion.div
          className="w-full bg-dark-900 my-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          <div className="p-4 md:p-8 text-2xl">Car Information</div>

          <div className="relative px-6 pb-6 md:px-12 md:pb-12 ">
            <div>
              {title.map((each, index) => (
                <div key={index} className="mb-6">
                  <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-dark-white"
                  >
                    {each}
                  </label>
                  <input
                    onChange={handleChange}
                    type={inputType[index]}
                    name={inputName[index]}
                    value={adData[inputName[index]]}
                    required
                    id="default-input"
                    placeholder={PlaceHolder[index]}
                    className="bg-dark-white border border-dark-300 text-dark-900 sm:text-sm rounded-lg focus:ring-primary-600
                    focus:border-dark-100 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text
                    dark:text-white focus:outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-dark-white"
              >
                Ad Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                value={adData.description}
                type="text"
                required
                placeholder="Please add your product description"
                id="large-input"
                className="bg-dark-white border border-dark-300 text-dark-900 sm:text-sm rounded-lg focus:ring-primary-600
                focus:border-dark-100 block w-full px-2.5 py-6 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text
                dark:text-white focus:outline-none"
              />
            </div>
          </div>
        </motion.div>{" "}
        {/* Upload Photos  */}
        <motion.div
          className="w-full bg-dark-900 my-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          <div className="p-4 md:p-8 text-2xl">Upload Photos</div>
          <div className="px-6 pb-6 md:px-12 md:pb-12 ">
            <form
              onSubmit={handleFileSubmit}
              className="flex items-center justify-center w-full"
            >
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-dark-700 border-dark-600 hover:border-dark-500 hover:bg-dark-600"
              >
                <div className="flex flex-col items-center justify-center px-2 md:px-0 pt-5 pb-6">
                  SVG, PNG, JPG or GIF
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </motion.div>
        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            x: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
          }}
        >
          {" "}
          <button
            type="submit"
            className="py-2 px-3 mb-14 bg-green-500 text-xs font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-dark-700 border-dark-600 text-dark-white"
          >
            Submit Your Ad
          </button>
        </motion.div>
      </form>
    </>
  );
};

export default MainContent;
