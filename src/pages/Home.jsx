import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import backgroundImg from "/store_front-min.jpg";

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
          <h1>Welcome to</h1>
          <h2>PharmaMaya</h2>
          <h3>Pharmacy</h3>
        </div>
        <a href="#tagline-container" className="scroll-down-indicator">
          <IoIosArrowDown />
        </a>
      </div>
    </div>
  );
}

export default Home;
