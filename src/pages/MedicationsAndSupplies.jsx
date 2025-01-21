import React, { useState } from "react";
import vitaminsAndMinerals from "/vitamins_minerals-min.jpg";
import vaccine from "/vaccine-min.jpg";
import medicalEquipment from "/medical_equipment-min.jpg";
import organicBeautySupps from "/organic_beauty_products-min.JPG?url";
import { SiWesternunion } from "react-icons/si";

function MedicationsAndSupplies() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const cardsData = [
    {
      id: 1,
      imgSrc: vitaminsAndMinerals,
      content:
        "A wide range of essential vitamins, minerals, OTC/prescription medicine, and much more.",
      healthTip:
        "Vitamin D enhances immune function and helps your body absorb calcium for stronger bones. Magnesium supports muscle function and maintains heart health.",
    },
    {
      id: 2,
      imgSrc: vaccine,
      content:
        "Vaccine services for flu, shingles, pneumonia, RSV, and COVID-19 – no appointment necessary!",
      healthTip:
        "Vaccines provide immunity by helping your body recognize harmful pathogens, reducing your risk of serious diseases like flu, shingles, and COVID-19 without causing illness.",
    },
    {
      id: 3,
      imgSrc: organicBeautySupps,
      content:
        "Exclusive organic and personalized beauty solutions for skincare, haircare, and wellness, free of harsh chemicals.",
      healthTip:
        "Switching to organic beauty solutions nourishes your skin and hair with natural ingredients minus the irritation, while personalized solutions go a step further by tailoring care to your unique skin needs—something most pharmacies don’t offer.",
    },
    {
      id: 4,
      imgSrc: medicalEquipment,
      content:
        "A large selection of medical-grade PPE such as gloves, masks, hand sanitizers, etc.",
      healthTip:
        "When it comes to viruses and harmful bacteria, being both proactive and reactive is crucial. With the right protective equipment, you can optimize your safety and reduce exposure.",
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
          fontSize: "clamp(1.4rem, 1vw, 1.8rem)",
          fontStyle: "italic",
          marginBottom: "1.5rem",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Free delivery across all 5 boroughs!
      </p>
      <div className="money-transfer-div">
        <SiWesternunion />
        <p>
          Western Union Money Transfer – Send and Receive Money with Ease at Our
          Pharmacy.
        </p>
      </div>
      <div className="section-divider-container">
        <hr className="divider" />
      </div>
      <div className="coming-soon-div">
        <h2>Coming Soon...</h2>
        <p style={{ marginBottom: "1.15rem" }}>
          Our pharmacy will soon offer services such as a
          <strong> state-of-the-art skin analyzer</strong> which will evaluate
          hydration levels, texture, sun damage, and more, helping you achieve
          radiant and healthier skin.
        </p>
        <p style={{ marginBottom: "1.15rem" }}>
          Essential health self-services like
          <strong> blood pressure monitoring.</strong>
        </p>
        <p>
          All conducted by our licensed and board certified pharmacist
          specializing in <strong>cosmetic skincare </strong>and
          <strong> analysis.</strong>
        </p>
      </div>
    </div>
  );
}

export default MedicationsAndSupplies;
