import React from "react";

function AcceptedInsurance() {
  return (
    <div
      id="accepted-insurances-section"
      className="accepted-insurances-container"
    >
      <h1>We Accept</h1>
      <div className="accepted-insurance-content">
        <p>
          We accept most major insurance plans. If you have questions about your
          specific plan, feel free to contact us!
        </p>
      </div>
      <div className="section-divider-container">
        <hr className="divider" />
      </div>
      <div className="more-info-div">
        <h2>Not Covered by Insurance?</h2>
        <p>
          Don’t worry! We guarantee<strong> transparent </strong> and
          <strong> competitive </strong>pricing options designed for
          <strong> self-pay patients</strong>, ensuring
          <strong> exceptional value </strong>and
          <strong> affordability </strong>
          for your healthcare needs.
        </p>
      </div>
    </div>
  );
}

export default AcceptedInsurance;
