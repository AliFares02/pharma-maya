import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import storeImgOne from "/store_front-min.jpg";
import storeImgTwo from "/store_img_one-min.jpg";
import storeImgThree from "/store_img_two-min (2).jpg";
import storeImgFour from "/store_img_four-min.jpg";
import storeImgFive from "/store_img_five-min.jpg";
import storeImgSix from "/store_img_six-min.jpg";
import storeImgSeven from "/store_img_seven-min.jpg";
import storeImgEight from "/store_img_eight-min.jpg";

function Gallery() {
  const images = [
    storeImgOne,
    storeImgTwo,
    storeImgThree,
    storeImgFour,
    storeImgFive,
    storeImgSix,
    storeImgSeven,
    storeImgEight,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
    fade: true,
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
