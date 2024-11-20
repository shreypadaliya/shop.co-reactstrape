import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import { Container } from "reactstrap";
import brand1 from "../../assets/images/png/Group (1).png";
import brand2 from "../../assets/images/png/zara-logo-1 1.png";
import brand3 from "../../assets/images/png/gucci-logo-1 1.png";
import brand4 from "../../assets/images/png/prada-logo-1 1.png";
import brand5 from "../../assets/images/png/Group.png";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="brand-section">
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="sliderimgwrapper">
              <img src={brand1} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand2} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand3} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand4} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand5} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand1} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand2} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand3} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand4} alt="" className="slider1img"/>
            </div>
            <div className="sliderimgwrapper">
              <img src={brand5} alt="" className="slider1img"/>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default Responsive;
