import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../Alert/AlertContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  isPassword,
  showPassword,
  togglePassword,
}) => (
  <div className="relative">
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-dark-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={isPassword ? (showPassword ? "text" : "password") : type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      className="bg-dark-white border border-dark-300 text-dark-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-dark-100 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text dark:text-white focus:outline-none"
      required
      autoComplete="new-password"
    />
    {isPassword && (
      <button
        onClick={togglePassword}
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
      >
        {showPassword ? (
          <FiEyeOff className="text-dark-900 dark:text-white" />
        ) : (
          <FiEye className="text-dark-900 dark:text-white" />
        )}
      </button>
    )}
  </div>
);

const SignUp = () => {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/signup", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (!response.ok) {
        showAlert(data.message || "Registration Failed!", "error");
      } else {
        showAlert("Registration Successfull.", "success");
        navigate("/login");
      }
    } catch (error) {
      showAlert("Internal Server Error!", "error");
    }
  };

  return (
    <section className="py-44">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        {/* Heading */}
        <h1
          className="flex flex-row items-center justify-center text-xl font-bold leading-tight tracking-tight text-dark-900
          md:text-2xl dark:text-white p-4"
        >
          Sign Up
        </h1>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-dark-bkg dark:border-dark-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* Form started */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-4 md:space-y-6"
            >
              <InputField
                label="Your Name"
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleInput}
              />
              <InputField
                label="Your Email"
                type="email"
                name="email"
                placeholder="name@company.com"
                onChange={handleInput}
              />
              <InputField
                label="Your Contact Number"
                type="tel"
                name="contactnumber"
                placeholder="03XXXXXXXXX"
                onChange={handleInput}
              />
              <InputField
                label="Your Country"
                type="text"
                name="country"
                placeholder="Country name"
                onChange={handleInput}
              />
              <InputField
                label="Your City"
                type="text"
                name="city"
                placeholder="City name"
                onChange={handleInput}
              />
              <InputField
                label="Password"
                isPassword={true}
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
                name="password"
                placeholder="••••••••"
                onChange={handleInput}
              />
              <InputField
                label="Confirm Password"
                isPassword={true}
                showPassword={showConfirmPassword}
                togglePassword={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                name="confirmpassword"
                placeholder="••••••••"
                onChange={handleInput}
              />
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-text"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-dark-500 dark:text-dark-text">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in here
                </Link>
              </p>
            </form>
            {/* Form ended */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
