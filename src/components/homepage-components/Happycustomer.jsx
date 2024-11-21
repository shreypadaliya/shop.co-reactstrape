import React from "react";
import Slider from "react-slick";
import Reviewcard from "../common-components/Reviewcard";
import { Container } from "reactstrap";



const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-prev" onClick={onClick}>
      &#8592; 
    </div>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-next" onClick={onClick}>
      &#8594; 
    </div>
  );

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="happy-customer-section">
        <Container>
          <h2 className="happy-customer-heading">OUR HAPPY CUSTOMER</h2>
          <div className="slider-container">
            <Slider {...settings} className="hapy-customer-wrap">
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
              <div>
                <Reviewcard
                  name="Sarah M."
                  review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  rating={5}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Responsive;
