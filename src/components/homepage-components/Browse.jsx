import React from "react";
import { Container } from "reactstrap";

const Browse = () => {
  return (
    <section className="browse-section">
      <Container>
        <div className="browse-section-wrapper">
          <h2 className="browse-heading">BROWSE BY DRESS STYLE</h2>
          <div className="brows-grid">
            <div className="brows-grid-upper">
              <div className="brows-grid-upper-left">Casual</div>
              <div className="brows-grid-upper-right">Formar</div>

            </div>
            <div className="brows-grid-bottom">
              <div className="brows-grid-bottom-left">Party</div>
              <div className="brows-grid-bottom-right">Gym</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Browse;
