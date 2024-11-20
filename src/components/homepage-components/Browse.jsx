import React from "react";
import { Container } from "reactstrap";
import browsgridimg1 from "../../assets/images/png/image 11.png";
import browsgridimg2 from "../../assets/images/png/image 13.png";
import browsgridimg3 from "../../assets/images/png/image 12.png";
import browsgridimg4 from "../../assets/images/png/image 14.png";

const Browse = () => {
  return (
    <section className="browse-section">
      <Container>
        <div className="browse-section-wrapper">
          <h2 className="browse-heading">BROWSE BY DRESS STYLE</h2>
          <div className="brows-grid">
          <div className="brows-grid-upper">
            <div className="brows-grid-upper-left"></div>
            <div className="brows-grid-upper-right"></div>
          </div>
          <div className="brows-grid-bottom">
            <div className="brows-grid-bottom-left"></div>
            <div className="brows-grid-bottom-right"></div>
          </div>
        </div>
        </div>
       
      </Container>
    </section>
  );
};

export default Browse;
