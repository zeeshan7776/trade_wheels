import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/HomePage/Home";
import UsedCars from "../components/UsedCarsPage/UsedCars";
import NewCars from "../components/NewCarsPage/NewCars";
import PostAnAdd from "../components/PostAnAdd/PostAnAdd";
import CompanyAllNewCars from "../components/CompanyAllCars/CompanyAllNewCars";
import NewCarSpecificModel from "../components/NewCarModel/NewCarSpecificModel";
import NewCarSpecificVariant from "../components/NewCarVariant/NewCarSpecificVariant";
import AllUsedCars from "../components/AllUsedCars/AllUsedCars";
import EachUsedCar from "../components/EachUsedCar/EachUsedCar";
import SignUp from "../components/Navbar/SignUp";
import LogIn from "../components/Navbar/LogIn";
import ForgotPassword from "../components/Navbar/ForgotPassword";
import ResetPassword from "../components/Navbar/ResetPassword";
import Profile from "../components/ProfilePage/profile";
import UserSearchingUsedCars from "../components/UserSearchingUsedCars/UserSearchingUsedCars";

function Root() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="usedcars" element={<UsedCars />} />
        <Route path="newcars" element={<NewCars />} />
        <Route path="postanadd" element={<PostAnAdd />} />
        <Route path="companyallnewcars" element={<CompanyAllNewCars />} />
        <Route path="allusedcars" element={<AllUsedCars />} />
        <Route path="searchusedcars" element={<UserSearchingUsedCars />} />
        <Route path="eachusedcar/:id" element={<EachUsedCar />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetpassword/:token" element={<ResetPassword />} />
        <Route
          path="newcarspecificmodel/:id"
          element={<NewCarSpecificModel />}
        />
        <Route
          path="newcarspecificvariant/:variantModel"
          element={<NewCarSpecificVariant />}
        />

        {/* Below route is for Incorrect URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default Root;
