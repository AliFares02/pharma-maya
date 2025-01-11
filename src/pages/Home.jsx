import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/P X (20).png";
import backgroundImg from "/pharma_maya.jpg";

function Home() {
  return (
    <div id="home-section" className="home-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
        }}
      >
        <div className="home-content">
          <img className="logo" src={logo} alt="pharma_maya_logo" />
          <h1>Pharma Maya</h1>
          <h2>Pharmacy</h2>
          <h3>
            Affordable Care, Compassionate Service – Here for All Your Health
            Needs.
          </h3>
        </div>
        <a href="#about-section" className="scroll-down-indicator">
          <IoIosArrowDown />
        </a>
      </div>
    </div>
  );
}

export default Home;
