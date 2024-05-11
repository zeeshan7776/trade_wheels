import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../Alert/AlertContext";

const Profile = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    userDetails: {},
    userAds: [], // This will store the ads
  });
  const [editFormData, setEditFormData] = useState({
    userId: "",
    name: "",
    email: "",
    contactnumber: "",
    country: "",
    city: "",
  });
  const [isEditingAd, setIsEditingAd] = useState(false);
  const [editAdFormData, setEditAdFormData] = useState({
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
    averageMin: "",
    averageMax: "",
    fuelType: "",
    transmission: "",
    images: [],
  });

  ///////////////////////////////////////// Auto SignIn //////////////////////////////
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
      // alert("Persist-Login not working! Please check the console for details.");
      // navigate("/login");
    }
  };
  useEffect(() => {
    callHomePage();
  }, []);

  /////////////////////////////////////// Fetch User Details /////////////////////////
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:7000/profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || "Could not fetch Profile-User details."
          );
        }
        const { user, ads } = data;
        setProfileData({
          userDetails: {
            userId: user._id,
            name: user.name,
            email: user.email,
            contactnumber: user.contactnumber,
            country: user.country,
            city: user.city,
          },
          userAds: ads,
        });
      } catch (error) {
        console.error("Profile: ", error);
      }
    };
    fetchUserDetails();
  }, []);

  useEffect(() => {
    setEditFormData({
      userId: profileData.userDetails.userId,
      name: profileData.userDetails.name,
      email: profileData.userDetails.email,
      contactnumber: profileData.userDetails.contactnumber,
      country: profileData.userDetails.country,
      city: profileData.userDetails.city,
    });
  }, [profileData]);

  /////////////////////// Functions of Profile or Updating Profile ////////////////////////

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
  };

  const handleSaveProfile = async (event) => {
    event.preventDefault();

    console.log(editFormData);
    try {
      const response = await fetch("http://localhost:7000/updateProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(editFormData),
      });

      if (!response.ok) {
        throw new Error("Could not update profile.");
      }
      const updatedProfileData = await response.json();

      setProfileData((prevState) => ({
        ...prevState,
        userDetails: {
          ...updatedProfileData,
          userId: prevState.userDetails.userId,
        },
      }));

      setIsEditingProfile(false);
      showAlert("Profile Updated Successfully.", "info");
    } catch (error) {
      console.error("Failed to update profile: ", error);
      showAlert("Failed to update profile.", "error");
    }
  };

  /////////////////////// Functions of Ads or Updating Ads /////////////////////////////

  const handleDeleteAd = async (adId) => {
    try {
      const response = await fetch(`http://localhost:7000/ads/${adId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the ad.");
      }
      setProfileData((prevData) => ({
        ...prevData,
        userAds: prevData.userAds.filter((ad) => ad._id !== adId),
      }));
      showAlert("Ad Deleted Successfully.", "success");
    } catch (error) {
      console.error("Delete Ad: ", error);
      showAlert("Failed to delete an ad!", "error");
    }
  };

  const handleAdEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditAdFormData({
      ...editAdFormData,
      [name]: value,
    });
  };

  const handleEditAd = (ad) => {
    setIsEditingAd(true);
    setEditAdFormData({
      ...ad,
      adID: ad._id,
    });
  };

  const handleCancelAdEdit = () => {
    setIsEditingAd(false);
  };

  const handleSaveAd = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const [key, value] of Object.entries(editAdFormData)) {
      if (key !== "images") {
        formData.append(key, value);
      }
    }

    // Append files separately
    if (editAdFormData.images) {
      // Ensure images is actually a FileList or array of files
      Array.from(editAdFormData.images).forEach((file) => {
        formData.append("images", file);
      });
    }

    try {
      const response = await fetch("http://localhost:7000/updateAd", {
        method: "POST",
        credentials: "include",
        body: formData, // Send as FormData
        // Important: Do NOT set 'Content-Type' header. Let the browser set it when using FormData
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse JSON only if response is not ok to get error message
        throw new Error(errorData.message || "Could not update the ad.");
      }

      const updatedAd = await response.json(); // Assuming your server sends back the updated ad data
      setProfileData((prevState) => ({
        ...prevState,
        userAds: prevState.userAds.map((ad) =>
          ad._id === updatedAd._id ? updatedAd : ad
        ),
      }));

      setIsEditingAd(false); // Reset editing state
      showAlert("Ad Updated Successfully.", "info");
    } catch (error) {
      console.error("Failed to update ad: ", error.message);
      showAlert("Failed to Update ad.", "info");
    }
  };

  const handleFileChange = (event) => {
    setEditAdFormData({
      ...editAdFormData,
      images: event.target.files,
    });
  };

  //////////////////////// Constants ///////////////////////////

  const editibleProfileHtmlForAndInputNameAndInputId = [
    "name",
    "email",
    "contactnumber",
    "country",
    "city",
  ];
  const editibleProfileHeadings = [
    "Name",
    "Email",
    "Contact Number",
    "Country",
    "City",
  ];
  const editibleProfileInputType = ["text", "text", "number", "text", "text"];
  const editibleProfileInputValue = [
    editFormData.name,
    editFormData.email,
    editFormData.contactnumber,
    editFormData.country,
    editFormData.city,
  ];
  const profileUserDetails = [
    profileData.userDetails.name,
    profileData.userDetails.email,
    profileData.userDetails.contactnumber,
    profileData.userDetails.country,
    profileData.userDetails.city,
  ];

  const icons = [
    <FiUser className="text-xl text-dark-white" />,
    <FiMail className="text-xl text-dark-white" />,
    <FiPhone className="text-xl text-dark-white" />,
    <FiGlobe className="text-xl text-dark-white" />,
    <FiMapPin className="text-xl text-dark-white" />,
  ];
  const tableHeaders = ["Make", "Model", "Mileage", "Price"];

  const editibleAdHtmlForAndInputId = [
    "city",
    "year",
    "make",
    "model",
    "assembly",
    "bodyType",
    "engineCapacity",
    "registeredIn",
    "exteriorColor",
    "mileage",
    "price",
    "description",
    "averageMin",
    "averageMax",
    "fuelType",
    "transmission",
  ];
  const editibleAdInputName = [
    "city",
    "year",
    "make",
    "model",
    "assembly",
    "bodyType",
    "engineCapacity",
    "registeredIn",
    "exteriorColor",
    "mileage",
    "price",
    "description",
    "averageMin",
    "averageMax",
    "fuelType",
    "transmission",
  ];
  const editibleAdHeadings = [
    "City",
    "Year",
    "Make",
    "Model",
    "Assembly",
    "Body Type",
    "Engine Capacity",
    "Registered In",
    "Exterior Color",
    "Mileage",
    "Price",
    "Description",
    "Minimum Average",
    "Maximum Average",
    "Fuel Type",
    "Transmission",
  ];
  const editibleAdInputType = [
    "text",
    "number",
    "text",
    "text",
    "text",
    "text",
    "number",
    "text",
    "text",
    "number",
    "number",
    "text",
    "number",
    "number",
    "text",
    "text",
  ];
  const editibleAdInputValue = [
    editAdFormData.city,
    editAdFormData.year,
    editAdFormData.make,
    editAdFormData.model,
    editAdFormData.assembly,
    editAdFormData.bodyType,
    editAdFormData.engineCapacity,
    editAdFormData.registeredIn,
    editAdFormData.exteriorColor,
    editAdFormData.mileage,
    editAdFormData.price,
    editAdFormData.description,
    editAdFormData.averageMin,
    editAdFormData.averageMax,
    editAdFormData.fuelType,
    editAdFormData.transmission,
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {isEditingProfile ? (
            ///////////////////////////////////////////////////////////////// Edit Profile Form ///////////////////////////////////////////////////////////////
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-dark-700 shadow-lg rounded-lg overflow-hidden my-10"
            >
              <form onSubmit={handleSaveProfile} className="space-y-4 p-6">
                {editibleProfileHeadings.map((heading, index) => (
                  <div key={index}>
                    <label
                      htmlFor={
                        editibleProfileHtmlForAndInputNameAndInputId[index]
                      }
                      className="block text-sm font-medium text-dark-white"
                    >
                      {heading}
                    </label>
                    <input
                      type={editibleProfileInputType[index]}
                      name={editibleProfileHtmlForAndInputNameAndInputId[index]}
                      id={editibleProfileHtmlForAndInputNameAndInputId[index]}
                      className="mt-1 block w-full bg-dark-600 font-thin h-7 p-2 focus:outline-none border focus:border-dark-100"
                      value={editibleProfileInputValue[index] || ""}
                      onChange={handleEditFormChange}
                    />
                  </div>
                ))}

                {/*//////////////////////////////////// Edit Form "Cancel" and "Save" Button //////////////////////////////////////*/}
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-dark-white py-2 px-4 rounded-full text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-dark-white py-2 px-4 rounded-full text-sm"
                  >
                    Save
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            ////////////////////////////////////////////////////////////// Profile Display ////////////////////////////////////////////////////////////

            <motion.div
              className="bg-dark-700 shadow-lg rounded-lg overflow-hidden w-full my-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                x: {
                  type: "spring",
                  stiffness: 60,
                  duration: 1,
                  delay: 0.2,
                },
              }}
            >
              {/* //////////////// Profile View Box ////////////////// */}
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-block bg-dark-600 rounded-full px-4 py-2 font-semibold text-sm tracking-wide uppercase">
                    Profile
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap justify-center">
                  {icons.map((icon, index) => (
                    <div
                      key={index}
                      className="w-full px-4 flex items-center justify-between mt-4"
                    >
                      {icon}
                      <p className="text-lg text-dark-white">
                        {profileUserDetails[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* /////////////// Actions Buttons /////////////// */}
              <div className="bg-dark-600 px-6 py-4">
                <div className="uppercase text-xs text-dark-white font-bold">
                  Actions
                </div>
                <div className="flex items-center mt-2">
                  <button
                    onClick={handleEditProfile}
                    className="bg-blue-500 text-dark-white py-2 px-4 rounded-full text-sm mr-2"
                  >
                    Edit Profile
                  </button>
                  <Link to="/postanadd">
                    <button className="bg-green-500 text-dark-white py-2 px-4 rounded-full text-sm">
                      Post An Ad
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          {/*////////////////////////////////////////////////////////// Edit Ad Form //////////////////////////////////////////////////////*/}
          {isEditingAd ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-dark-700 shadow-lg rounded-lg overflow-hidden my-10"
            >
              <form onSubmit={handleSaveAd} className="space-y-4 p-6">
                {editibleAdHeadings.map((heading, index) => (
                  <div key={index}>
                    <label
                      htmlFor={editibleAdHtmlForAndInputId[index]}
                      className="block text-sm font-medium text-dark-white"
                    >
                      {heading}
                    </label>
                    <input
                      type={editibleAdInputType[index]}
                      name={editibleAdInputName[index]}
                      id={editibleAdHtmlForAndInputId[index]}
                      className="mt-1 block w-full bg-dark-600 font-thin h-7 p-2 focus:outline-none border focus:border-dark-100"
                      value={editibleAdInputValue[index] || ""}
                      onChange={handleAdEditFormChange}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="images"
                    className="block text-sm font-medium text-dark-white"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    className="mt-1 block w-full bg-dark-600 font-thin h-12 p-2 focus:outline-none border focus:border-dark-100"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>

                <button
                  onClick={handleCancelAdEdit}
                  className="bg-gray-500 text-dark-white py-2 px-4 rounded-full text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-dark-white py-2 px-4 rounded-full text-sm"
                >
                  Save Ad
                </button>
              </form>
            </motion.div>
          ) : (
            ////////////////////////////////////////////////////////// Ads Display Table /////////////////////////////////////////////////////////////

            <motion.div
              className="mt-10 bg-dark-700 shadow-lg rounded-lg overflow-hidden w-full my-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                x: {
                  type: "spring",
                  stiffness: 60,
                  duration: 1,
                  delay: 0.2,
                },
              }}
            >
              <div className="px-6 py-5">
                <h3 className="text-lg leading-6 font-medium text-dark-white">
                  Ads Posted
                </h3>
              </div>

              {profileData.userAds.length > 0 ? (
                <div className="border-t">
                  <table className="min-w-full divide-y divide-dark-200">
                    <thead className="bg-dark-700">
                      <tr>
                        {tableHeaders.map((tableHeader, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-dark-white uppercase tracking-wider"
                          >
                            {tableHeader}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-dark-600 divide-y divide-dark-200">
                      {profileData.userAds.map((ad) => (
                        <tr key={ad._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark-white hover:underline hover:text-SunsetRed-50">
                            <Link to={`/eachusedcar/${ad._id}`}>{ad.make}</Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-white">
                            {ad.model}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-white">
                            {ad.mileage}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-white">
                            {ad.price}
                          </td>
                          <td>
                            <button
                              onClick={() => handleEditAd(ad)}
                              className="bg-blue-500 hover:bg-blue-700 text-dark-white py-2 px-4 rounded-full text-sm mr-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => {
                                handleDeleteAd(ad._id);
                              }}
                              className="bg-red-800 hover:bg-red-700 text-dark-white py-2 px-4 rounded-full text-sm mr-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10">
                  <span className="text-lg text-dark-white">No Ads Posted</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
