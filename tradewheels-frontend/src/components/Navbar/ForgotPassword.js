import React, { useState } from "react";
import { useAlert } from "../Alert/AlertContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { showAlert } = useAlert();

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      showAlert(
        "Unable to reset your password at this time. Please try again later.",
        "error"
      );
      console.log("Forget-Password response not ok!!!");
    } else {
      showAlert(
        "A password reset request has been sent to your email. Please check your inbox.",
        "info"
      );
    }
  };

  return (
    <section className="bg-dark-900 py-8">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        {/* Heading */}
        <h1
          className="flex flex-row items-center justify-center text-xl font-bold leading-tight tracking-tight text-dark-900
          md:text-2xl dark:text-white p-4"
        >
          Forgot Password?
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
                    focus:border-primary-600 block w-full p-2.5 dark:bg-dark-700 dark:border-dark-600 dark:placeholder-dark-text
                    dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="name@company.com"
                  required={true}
                  autoComplete="email"
                />
              </div>

              <p className="text-sm font-light text-dark-500 dark:text-dark-400">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in here
                </Link>
              </p>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-text"
              >
                Send Email
              </button>
            </form>
            {/* form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
