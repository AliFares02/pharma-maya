import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function NavHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <a href="#home-section" style={{ display: "flex", alignItems: "center" }}>
        <img className="logo" src="src/images/P X (20).png" alt="logo" />
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
        <a href="#teams-section" onClick={() => setMenu(false)}>
          Teams
        </a>
        <a href="#about-section" onClick={() => setMenu(false)}>
          About
        </a>
        <a href="#footer-section" onClick={() => setMenu(false)}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavHeader;
