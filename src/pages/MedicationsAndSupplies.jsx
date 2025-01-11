import React from "react";
import vitaminsAndMinerals from "/vitamins_minerals.jpg";
import vaccine from "/vaccine.jpg";
import medicalEquipment from "/medical_equipment.jpg";

function MedicationsAndSupplies() {
  return (
    <div
      id="medications-and-supplies-section"
      className="medications-and-supplies-container"
    >
      <h1>We Offer</h1>
      <div className="meds-and-supplies-content">
        <div className="info-cards card1">
          <img src={vitaminsAndMinerals} alt="vitamins&minerals" />
          <div className="card-content">
            <p>A wide range of essential vitamins and minerals</p>
          </div>
        </div>
        <div className="info-cards card2">
          <img src={vaccine} alt="vaccine" />
          <div className="card-content">
            <p>Vaccine shots such as flu and covid-19</p>
          </div>
        </div>
        <div className="info-cards card3">
          <img
            className="card-img"
            src={medicalEquipment}
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
