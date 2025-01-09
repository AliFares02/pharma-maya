import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function About() {
  const reviews = [
    {
      owner: "Mesh",
      reviewText:
        "One of the best people I have ever dealt with reminds me of the timing of medication. All the staff are good, led by Dr. Maya.",
      stars: "★★★★★",
    },
    {
      owner: "BAKIL- M- ALGUMAI",
      reviewText:
        "Thank you very much for reminding me of the medication appointments and the treatment is more than wonderful. Thank you to all its employees Pharma Maya, good luck. Thank you from the bottom of my heart.",
      stars: "★★★★★",
    },
    {
      owner: "Hasan C",
      reviewText: "Fast, easy, very convenient.",
      stars: "★★★★★",
    },
    {
      owner: "Mirsada Mimidinovski",
      reviewText:
        "If I could put 10 stars I would! Always very helpful and the best service, thank you!!",
      stars: "★★★★★",
    },
    {
      owner: "Dana Ayach",
      reviewText:
        "Great pharmacy and pharmacist! They care for their customers and addressed all my concerns :)",
      stars: "★★★★★",
    },
    {
      owner: "Sean Mimidinovski",
      reviewText:
        "What an excellent service and very helpful and knowledgeable staff. Definitely will move all my prescriptions here.",
      stars: "★★★★★",
    },
    {
      owner: "Majidac Faraj",
      reviewText:
        "This pharmacy has great customer service. Staff treat patients with utmost respect and care. Always receive medicine in a timely manner.",
      stars: "★★★★★",
    },
    {
      owner: "Houyada Widdi",
      reviewText:
        "This is a wonderful pharmacy!! Great informative and kind staff, very helpful with all my needs!!! Carries all the items a normal pharmacy would plus more. I love it, Highly recommend and very thankful!!",
      stars: "★★★★★",
    },
    {
      owner: "Rim Rabah",
      reviewText:
        "Best pharmacy around! The customer service is incredible and everyone is super friendly! Outstanding customer service. Maya (the pharmacist) is sooo kind, knowledgeable and willing to answer any question. Totally recommend!!!",
      stars: "★★★★★",
    },
    {
      owner: "Rudina Ajdari",
      reviewText:
        "These guys are the best! They call you to remind you to pick up your medications and they are very helpful with any questions. They also give you a lot of attention and the prices are cheaper than other pharmacies. 10/10.",
      stars: "★★★★★",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div id="about-section" className="about-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Established in 2020, Pharma Maya Pharmacy has been committed to
          delivering personalized and reliable healthcare solutions to our
          community.
        </p>
        <p>
          Our mission is to provide high-quality pharmaceutical services, expert
          advice, and accessible medications to help our customers lead
          healthier lives. We pride ourselves on our friendly customer service,
          quick prescription fulfillment, and a wide range of wellness products
          to meet your needs.
        </p>
        <p>
          At Pharma Maya, your health is our priority. We go the extra mile to
          ensure you receive the care and attention you deserve, catering to all
          demographics.
        </p>
      </div>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h2>{review.owner}</h2>
            <p>{review.reviewText}</p>
            <div className="stars">{review.stars}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default About;
