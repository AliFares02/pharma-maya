import React from "react";

function NavHeader() {
  return (
    <div className="header">
      <a href="#home-section">
        <img className="logo" src="src/images/P X (20).png" alt="logo" />
      </a>
      <div className="hamburger-section">
        <a href="#home-section">Home</a>
        <p> | </p>
        <a href="#teams-section">Teams</a>
        <p> | </p>
        <a href="#about-section">About</a>
        <p> | </p>
        <a href="#footer-section">Contact</a>
      </div>
    </div>
  );
}

export default NavHeader;
