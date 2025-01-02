import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer-section" className="footer-container">
      <div className="socials">
        <h3>Follow us</h3>
        <div className="social-handles">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
