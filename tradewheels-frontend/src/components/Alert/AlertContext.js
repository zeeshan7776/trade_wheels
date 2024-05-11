import React, { createContext, useContext, useState } from "react";
import AlertComponent from "./AlertComponent";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert({ message: "", type: "" });
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, closeAlert }}>
      {children}
      {alert.message && (
        <AlertComponent
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
        />
      )}
    </AlertContext.Provider>
  );
};
