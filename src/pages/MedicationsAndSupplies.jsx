import React from "react";

function MedicationsAndSupplies() {
  return (
    <div
      id="medications-and-supplies-section"
      className="medications-and-supplies-container"
    >
      <h1>We Offer</h1>
      <div className="meds-and-supplies-content">
        <div className="info-cards card1">
          <img src="src\images\vitamins&minerals.jpg" alt="vitamins&minerals" />
          <div className="card-content">
            <p>A wide range of essential vitamins and minerals</p>
          </div>
        </div>
        <div className="info-cards card2">
          <img src="src\images\vaccine.jpg" alt="vaccine" />
          <div className="card-content">
            <p>Vaccine shots such as flu and covid-19</p>
          </div>
        </div>
        <div className="info-cards card3">
          <img
            className="card-img"
            src="src\images\medical_equipment.jpg"
            alt="medical_equipment"
          />
          <div className="card-content">
            <p>
              A large selection of medical equipment such as gloves, masks, hand
              sanitizers, etc.
            </p>
          </div>
        </div>
      </div>
      {/* <hr className="divider" /> */}
    </div>
  );
}

export default MedicationsAndSupplies;
