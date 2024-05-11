import React from "react";
import { Link } from "react-router-dom";
import Person from "../../images/Person.png";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:7000/signout", {
        method: "POST",
        credentials: "include", // Necessary to include cookies in the request
      });
      if (response.ok) {
        // Handle successful logout (e.g., redirecting to login page)
        console.log("Signout successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signout failed", error);
    }
  };

  return (
    <div className="relative group">
      <img
        src={Person}
        className="w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
        alt=""
      />

      <div className="absolute right-0 z-10 hidden group-hover:block">
        <div className="px-2 pt-2 pb-2 text-xs bg-dark-700 rounded-md shadow-lg">
          <div className="dropdown-menu">
            <ul className="divide-y-2">
              <li className="p-1">
                <Link to="/profile" className=" dropdown-item">
                  Profile
                </Link>
              </li>
              <li className="p-1">
                <Link onClick={handleSignOut} to="/" className=" dropdown-item">
                  SignOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
