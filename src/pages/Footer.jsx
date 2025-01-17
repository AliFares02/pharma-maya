import React from "react";

function Footer() {
  return (
    <div id="footer-section" className="footer-container">
      <div className="contact-info">
        <div>
          <p
            style={{
              fontSize: "clamp(.9rem, 1vw, 1.2rem)",
              borderBottom: "1px solid #503076",

              display: "inline",
            }}
          >
            Contact Us
          </p>
          <p style={{ fontSize: "clamp(.8rem, 1vw, 1rem)" }}>
            Email:&nbsp;
            <a
              style={{
                fontWeight: "500",
                color: "#503076",
              }}
              href="mailto:pharmamia310@gmail.com"
            >
              pharmamia310@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "clamp(.8rem, 1vw, 1rem)" }}>
            Telephone:&nbsp;
            <a
              style={{
                fontWeight: "500",

                color: "#503076",
              }}
              href="tel:+17183335588"
            >
              (718) 333-5588
            </a>
          </p>
          <p style={{ fontSize: "clamp(.8rem, 1vw, 1rem)" }}>
            Fax:&nbsp;
            <a
              style={{
                fontWeight: "500",

                color: "#503076",
              }}
              href="tel:+17183335330"
            >
              (718) 333-5330
            </a>
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "clamp(.9rem, 1vw, 1.2rem)",
              borderBottom: "1px solid #503076",

              display: "inline",
            }}
          >
            Visit Us
          </p>
          <p style={{ fontSize: "clamp(.8rem, 1vw, 1rem)" }}>
            <strong style={{ fontWeight: "500" }}>
              310 86th Street, Brooklyn, NY 11209
            </strong>
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "clamp(.9rem, 1vw, 1.2rem)",
              borderBottom: "1px solid #503076",

              display: "inline",
            }}
          >
            We're Open
          </p>
          <p style={{ fontSize: "clamp(.8rem, 1vw, 1rem)", fontWeight: "500" }}>
            Mon–Fri: 9:00 AM – 6:00 PM
            <br />
            Sat: 10:00 AM – 3:00 PM
            <br />
            Sun: Closed
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "clamp(.9rem, 1vw, 1.2rem)",
              borderBottom: "1px solid #503076",

              display: "inline",
            }}
          >
            We Speak
          </p>

          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              fontWeight: "500",
              fontSize: "clamp(.8rem, 1vw, 1rem)",
            }}
          >
            <li>English</li>
            <li>Arabic</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48445.05820795061!2d-74.05309578051384!3d40.63393657951822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ff18a917999%3A0x111ec928ea3d12bf!2sPharmaMaya%20LLC!5e0!3m2!1sen!2sus!4v1736375254388!5m2!1sen!2sus&gestureHandling=greedy&zoom=14"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <hr className="divider" /> */}
    </div>
  );
}

export default Footer;
