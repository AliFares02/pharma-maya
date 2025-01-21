import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "/P X (21).png";

function NavHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <a href="#home-section" style={{ display: "flex", alignItems: "center" }}>
        <img className="logo" src={logo} alt="pharma_maya_logo" />
      </a>
      {!menu && (
        <div className="hamburger-icon" onClick={() => setMenu(true)}>
          <IoMdMenu className="hamburger-icon-open" />
        </div>
      )}
      <div className={`header-section ${menu ? "show" : ""}`}>
        {menu && (
          <IoMdClose
            className="hamburger-icon-close"
            onClick={() => setMenu(false)}
          />
        )}
        <a href="#home-section" onClick={() => setMenu(false)}>
          Home
        </a>
        <a href="#about-section" onClick={() => setMenu(false)}>
          About Us
        </a>
        <a
          href="#medications-and-supplies-section"
          onClick={() => setMenu(false)}
        >
          We Offer
        </a>
        <a href="#accepted-insurances-section" onClick={() => setMenu(false)}>
          We Accept
        </a>
        <a href="#footer-section" onClick={() => setMenu(false)}>
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default NavHeader;
