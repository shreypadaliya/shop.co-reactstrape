import React from "react";
import { Button, Container } from "reactstrap";
import heroimg from "../../assets/images/png/Rectangle 2.png";
import herostar1 from "../../assets/images/png/Vector.png";
import herostart2 from "../../assets/images/png//Vector (1).png";

const Herosection = () => {
  return (
    <section>
      <div className="hero-section">
        <Container>
          <div className="hero-section-wraper">
            <div className="hero-leftsection">
              <h1 className="hero-header">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="hero-subtitle">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button color="primary">Shop Now</Button>

              <div className="hero-counter-section">
                <div className="hero-counter-wrap">
                  <div className="hero-counter-number">200+</div>
                  <div className="hero-counter-info">International Brands</div>
                </div>
                <div className="hero-separter"></div>
                <div className="hero-counter-wrap">
                  <div className="hero-counter-number">2,000+</div>
                  <div className="hero-counter-info">High-Quality Products</div>
                </div>
                <div  className="hero-separter"></div>
                <div className="hero-counter-wrap">
                  <div className="hero-counter-number">30,000+</div>
                  <div className="hero-counter-info">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="hero-rightsection">
              <img src={heroimg} alt="" className="heromainimg" />
              <img src={herostar1} alt="" className="herostar1" />
              <img src={herostart2} alt="" className="herostar2" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Herosection;
