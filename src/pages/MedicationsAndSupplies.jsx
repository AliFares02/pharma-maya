import React, { useState } from "react";
import vitaminsAndMinerals from "/vitamins_minerals.jpg";
import vaccine from "/vaccine.jpg";
import medicalEquipment from "/medical_equipment.jpg";
import organicBeautySupps from "/organic_beauty_products.JPG?url";

function MedicationsAndSupplies() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const cardsData = [
    {
      id: 1,
      imgSrc: vitaminsAndMinerals,
      content:
        "A wide range of essential vitamins, minerals, OTC/prescription medicine, and much more.",
      healthTip:
        "Vitamin D helps boost your immune system, while magnesium supports muscle function and bone health.",
    },
    {
      id: 2,
      imgSrc: vaccine,
      content:
        "Vaccine services for flu, COVID-19, and many other preventable diseases.",
      healthTip:
        "Vaccines protect against serious diseases and help your body build immunity without the illness.",
    },
    {
      id: 3,
      imgSrc: organicBeautySupps,
      content:
        "Organic and personalized beauty solutions for skincare, haircare, and wellness, free of harsh chemicals.",
      healthTip:
        "Switching to organic beauty products can nourish your skin and hair naturally while reducing exposure to synthetic ingredients.",
    },
    {
      id: 4,
      imgSrc: medicalEquipment,
      content:
        "A large selection of medical-grade PPE such as gloves, masks, hand sanitizers, etc.",
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

      <p style={{ fontWeight: "600" }}>(Flip a card to reveal a health tip)</p>

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
      <p
        style={{
          fontSize: "clamp(1.3rem, 1vw, 1.6rem)",
          fontStyle: "italic",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Delivery across all 5 boroughs!
      </p>
      <div className="coming-soon-div">
        <h2>Coming Soon...</h2>
        <p>
          Our pharmacy will soon offer services such as a
          <strong> state-of-the-art skin analyzer</strong> which will evaluate
          hydration levels, texture, sun damage, and more, helping you achieve
          radiant and healthier skin.
        </p>
        <p>
          Essential health self-services like
          <strong> blood pressure monitoring.</strong>
        </p>
        <p>
          All conducted by our licensed and board certified pharmacist
          specializing in <strong>cosmetic skincare </strong>and
          <strong> analysis.</strong>
        </p>
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

export default MedicationsAndSupplies;
