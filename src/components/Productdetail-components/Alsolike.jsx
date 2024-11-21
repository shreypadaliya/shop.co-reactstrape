import React from "react";
import Slider from "react-slick";
import { Container, Button } from "reactstrap";
import ProductCard from "../common-components/ProductCard";
import product1 from "../../assets/images/png/Frame 32 (2).png";
import product2 from "../../assets/images/png/Frame 33 (2).png";
import product3 from "../../assets/images/png/Frame 34 (2).png";
import product4 from "../../assets/images/png/Frame 38 (2).png";
import { useNavigate } from "react-router-dom";

function Responsive() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/product-details"); 
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <section className="newarrival-section">
        <Container>
          <h2 className="newarrival-heading-section">YOU MIGHT ALSO LIKE</h2>

          <div className="slider-container">
            <Slider {...settings} className="new_arrival_wrap">
              <div>
                <ProductCard
                  image={product1}
                  name="Polo with Contrast Trims"
                  price={212}
                  rating={4}
                  originalPrice={242}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Gradient Graphic T-shirt"
                  price={145}
                  rating={3.5}
                 
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Polo with Tipping Details"
                  price={180}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Black Striped T-shirt"
                  price={120}
                  rating={5}
                  originalPrice={150}
                  discount={30}
                />
              </div>
              <div>
                <ProductCard
                  image={product1}
                  name="Polo with Contrast Trims"
                  price={212}
                  rating={4}
                  originalPrice={242}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Gradient Graphic T-shirt"
                  price={145}
                  rating={3.5}
                 
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Polo with Tipping Details"
                  price={180}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Black Striped T-shirt"
                  price={120}
                  rating={5}
                  originalPrice={150}
                  discount={30}
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
