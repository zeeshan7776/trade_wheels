import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../Alert/AlertContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { showAlert } = useAlert();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        showAlert("Invalid Credentials!", "error");
        return;
      }

      const responseData = await response.json();

      if (responseData.message === "Login successful!") {
        showAlert("Login Successfull!", "success");
        navigate("/");
      }

      console.log("login: ", responseData);
    } catch (error) {
      showAlert("Internal Server Error!", "error");
    }
  };

  return (
    <section className="py-0">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        {/* Heading */}
        <h1
          className="flex flex-row items-center justify-center text-xl font-bold leading-tight tracking-tight text-dark-900
          md:text-2xl dark:text-white p-4"
        >
          Sign in to your account
        </h1>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-dark-bkg dark:border-dark-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* form start */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-dark-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleInput}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-dark-white border border-dark-300 text-dark-900 sm:text-sm rounded-lg focus:ring-primary-600
                    focus:border-dark-100 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text
                    dark:text-white focus:outline-none"
                  placeholder="name@company.com"
                  required={true}
                  autoComplete="email"
                />
              </div>
              {/* Password input */}

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-dark-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleInput}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-dark-white border border-dark-300 text-dark-900 sm:text-sm rounded-lg focus:ring-primary-600
                    focus:border-dark-100 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text
                    dark:text-white focus:outline-none"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-dark-900 dark:text-white" />
                    ) : (
                      <FiEye className="text-dark-900 dark:text-white" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="/forgotpassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-text"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-dark-500 dark:text-dark-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            {/* form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
