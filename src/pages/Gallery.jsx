import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import storeImgOne from "/pharma_maya.jpg";
import storeImgTwo from "/vaccine.jpg";

function Gallery() {
  const images = [
    storeImgOne,
    storeImgTwo,
    storeImgOne,
    storeImgTwo,
    storeImgOne,
    storeImgTwo,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
  };
  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="store-image-container">
            <img src={img} alt={`Store Image-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
