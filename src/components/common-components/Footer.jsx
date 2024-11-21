import React from "react";
import { Container, Col, Row } from "reactstrap";
import sicial1 from "../../assets/images/png/2.png";
import sicial2 from "../../assets/images/png/3.png";
import sicial3 from "../../assets/images/png/4.png";
import sicial4 from "../../assets/images/png/1.png";
import pay1 from "../../assets/images/png/Badge.png";
import pay2 from "../../assets/images/png/Badge (1).png";
import pay3 from "../../assets/images/png/Badge (2).png";
import pay4 from "../../assets/images/png/Badge (3).png";
import pay5 from "../../assets/images/png/Badge (4).png";


const Footer = () => {
  return (
    <section>
      <div className="footer-section">
        <Container>
          <div className="footer-sub-section">
            <Row className="justify-content-between">
              <Col xs="12" sm="12" md="12" lg="3">
                <div className="grid-item-footer">
                  <h5 className="foot-grid-1-title">SHOP.CO</h5>
                  <div className="foot-grid-1-para">
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </div>
                  <div className="foot-grid-1-social-wrap">
                    <a href="">
                      <img src={sicial4} alt="" />
                    </a>
                    <a href="">
                      <img src={sicial1} alt="" />
                    </a>
                    <a href="">
                      <img src={sicial2} alt="" />
                    </a>
                    <a href="">
                      <img src={sicial3} alt="" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">COMPANY</div>
                  <div className="footsub-main">
                    <div className="footsub">About</div>
                    <div className="footsub">Features</div>
                    <div className="footsub">Works</div>
                    <div className="footsub">Career</div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">HELP</div>
                  <div className="footsub-main">
                    <div className="footsub">Customer Support</div>
                    <div className="footsub">Delivery Details</div>
                    <div className="footsub">Terms & Conditions</div>
                    <div className="footsub">Privacy Policy</div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2" >
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">FAQ</div>
                  <div className="footsub-main">
                    <div className="footsub">Account</div>
                    <div className="footsub">Manage Deliveries</div>
                    <div className="footsub">Orders</div>
                    <div className="footsub">Payments</div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">RESOURCES</div>
                  <div className="footsub-main">
                    <div className="footsub">Free eBooks</div>
                    <div className="footsub">Development Tutorial</div>
                    <div className="footsub">How to - Blog</div>
                    <div className="footsub">Youtube Playlist</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ width: "100%", border: "1px solid #0000001A" }}></div>
          <div className="bootom-footersection">
            <div >Shop.co © 2000-2023, All Rights Reserved</div>
            <div className="foot-grid-2-social-wrap">
              <a href="">
                <img src={pay1} alt="" />
              </a>
              <a href="">
                <img src={pay2} alt="" />
              </a>
              <a href="">
                <img src={pay3} alt="" />
              </a>
              <a href="">
                <img src={pay4} alt="" />
              </a>
              <a href="">
                <img src={pay5} alt="" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
