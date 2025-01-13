import React, { useState } from "react";
import vitaminsAndMinerals from "/vitamins_minerals.jpg";
import vaccine from "/vaccine.jpg";
import medicalEquipment from "/medical_equipment.jpg";

function MedicationsAndSupplies() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const cardsData = [
    {
      id: 1,
      imgSrc: vitaminsAndMinerals,
      content: "A wide range of essential vitamins and minerals",
      healthTip:
        "Vitamin D helps boost your immune system, while magnesium supports muscle function and bone health.",
    },
    {
      id: 2,
      imgSrc: vaccine,
      content: "Vaccine shots such as flu and COVID-19",
      healthTip:
        "Vaccines protect against serious diseases and help your body build immunity without the illness.",
    },
    {
      id: 3,
      imgSrc: medicalEquipment,
      content:
        "A large selection of medical equipment such as gloves, masks, hand sanitizers, etc.",
      healthTip:
        "Wearing gloves and masks can prevent the spread of germs, and hand sanitizers are essential for quick disinfection.",
    },
  ];

  const handleFlip = (idx) => {
    setFlippedCardIndex((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div
      id="medications-and-supplies-section"
      className="medications-and-supplies-container"
    >
      <h1>We Offer</h1>

      <h3>(Flip a card to reveal a health tip)</h3>

      <div className="meds-and-supplies-content">
        {cardsData.map((card, idx) => (
          <div
            key={card.id}
            className={`info-cards ${
              flippedCardIndex === idx ? "flipped" : ""
            }`}
            onClick={() => handleFlip(idx)}
          >
            <div className="card-front">
              <img src={card.imgSrc} alt={`card-${card.id}`} />
              <div className="card-content">
                <p>{card.content}</p>
              </div>
            </div>
            <div className="card-back">
              <p>{card.healthTip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicationsAndSupplies;
