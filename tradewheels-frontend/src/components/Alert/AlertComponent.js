import React, { useState, useEffect } from "react";
import "./AlertComponent.css";

const AlertComponent = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div
      className={`alert alert-${type} ${
        visible ? "alert-visible" : "alert-hidden"
      }`}
      role="alert"
    >
      {message}
      <button type="button" className="close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default AlertComponent;
