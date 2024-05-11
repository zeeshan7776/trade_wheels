import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Root from "./routes/Root";
import { AlertProvider } from "./components/Alert/AlertContext";

function App() {
  useEffect(() => {
    new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  const customBackgroundStyle = {
    backgroundColor: "#282828",
    opacity: 0.9,
    backgroundImage:
      "repeating-radial-gradient( circle at 0 0, transparent 0, #282828 9px ), repeating-linear-gradient( #2c2c2c55, #2c2c2c )",
  };

  return (
    <>
      <AlertProvider>
        <div style={customBackgroundStyle}>
          <Navbar />
          <Root />
          <Footer />
        </div>
      </AlertProvider>
    </>
  );
}

export default App;
