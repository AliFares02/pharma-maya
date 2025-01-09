import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  return (
    <div id="home-section" className="home-container">
      <div className="home-content">
        <img className="logo" src="src/images/P X (20).png" alt="logo" />
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
  );
}

export default Home;
