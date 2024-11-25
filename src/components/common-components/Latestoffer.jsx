import React from "react";
import { Button, Container } from "reactstrap";
import { Icon } from "../common-components/Svgicon";

const latestoffer = () => {
  return (
    <section>
      <Container>
        <div className="latestoffer-section">
          <div className="latestoffer-info-section">
            <h3 className="latestoffer-info-section-header">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h3>
          </div>
          <div>
            <div className="offer-search-input">
              <div className="offer-search-input-icon">
                <Icon name="icon6" />
              </div>
              <input
                type="text"
                className="offersearchinput"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Button className="offer-button">Subscribe to Newsletter</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default latestoffer;
