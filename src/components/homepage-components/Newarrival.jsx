import React from "react";
import Slider from "react-slick";
import { Container,Button } from "reactstrap";
import ProductCard from "../common-components/ProductCard";
import product1 from "../../assets/images/png/Frame 32.png";
import product2 from "../../assets/images/png/Frame 33.png";
import product3 from "../../assets/images/png/Frame 34.png";
import product4 from "../../assets/images/png/Frame 38.png";

function Responsive() {
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
          <h2 className="newarrival-heading-section">NEW ARRIVALS</h2>

          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <ProductCard
                  image={product1}
                  name="Tshirt with tape detail"
                  price={120}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Skinny Fit Jeans"
                  price={240}
                  rating={3.5}
                  originalPrice={260}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Checkred Shirt"
                  price={180}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Sleev striped T-shirt"
                  price={130}
                  rating={4.5}
                  originalPrice={160}
                  discount={30}
                />
              </div>
              <div>
                <ProductCard
                  image={product1}
                  name="Tshirt with tape detail"
                  price={120}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Skinny Fit Jeans"
                  price={240}
                  rating={3.5}
                  originalPrice={260}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Checkred Shirt"
                  price={180}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Sleev striped T-shirt"
                  price={130}
                  rating={4.5}
                  originalPrice={160}
                  discount={30}
                />
              </div>
            </Slider>
          </div>

          <div className="button-holder">
          <Button color="secondry">View all</Button>
          </div>
          <hr />
        </Container>
      </section>
    </>
  );
}

export default Responsive;

