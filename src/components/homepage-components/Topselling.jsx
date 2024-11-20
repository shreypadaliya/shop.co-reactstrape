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
          <h2 className="newarrival-heading-section">TOP SELLING</h2>

          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <ProductCard
                  image={product1}
                  name="Vertical strip shirt"
                  price={212}
                  rating={5}
                  originalPrice={232}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Courage graphic tshirt" 
                  price={145}
                  rating={4}
                  
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Loose Fit bermuda shorts" 
                  price={80}
                  rating={3}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Feded skiny jeans"
                  price={210}
                  rating={4.5}
                />
              </div>
              <div>
                <ProductCard
                  image={product1}
                  name="Vertical strip shirt"
                  price={212}
                  rating={5}
                  originalPrice={232}
                  discount={20}
                />
              </div>
              <div>
                <ProductCard
                  image={product2}
                  name="Courage graphic tshirt" 
                  price={145}
                  rating={4}
                  
                />
              </div>
              <div>
                <ProductCard
                  image={product3}
                  name="Loose Fit bermuda shorts" 
                  price={80}
                  rating={3}
                />
              </div>
              <div>
                <ProductCard
                  image={product4}
                  name="Feded skiny jeans"
                  price={210}
                  rating={4.5}
                />
              </div>
            </Slider>
          </div>

          <div className="button-holder">
          <Button color="secondry">View all</Button>
          </div>
          
        </Container>
      </section>
    </>
  );
}

export default Responsive;
