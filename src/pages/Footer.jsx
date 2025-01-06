import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer-section" className="footer-container">
      <div className="contact-info">
        <div>
          <p
            style={{
              display: "inline-block",
              fontSize: "1.1rem",
              borderBottom: "1px solid #503076",
            }}
          >
            Contact Us
          </p>
          <p>
            Email:
            <strong style={{ fontWeight: "500" }}> business@gmail.com</strong>
          </p>
          <p>
            Phone:
            <strong style={{ fontWeight: "500" }}> 123-123-1234</strong>
          </p>
        </div>
        <div>
          <p
            style={{
              display: "inline-block",
              fontSize: "1.1rem",
              borderBottom: "1px solid #503076",
            }}
          >
            Visit Us
          </p>
          <p>
            <strong style={{ fontWeight: "500" }}>
              1234 Road Brooklyn NY, 11209
            </strong>
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="socials">
        <p style={{ fontSize: "1.1rem" }}>Follow us</p>
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
