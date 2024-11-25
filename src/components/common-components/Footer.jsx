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
      <div className="footer-section animate__animated animate__fadeIn">
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
                      <img src={sicial4} alt="" className="payment-photo"/>
                    </a>
                    <a href="">
                      <img src={sicial1} alt="" className="payment-photo"/>
                    </a>
                    <a href="">
                      <img src={sicial2} alt="" className="payment-photo"/>
                    </a>
                    <a href="">
                      <img src={sicial3} alt="" className="payment-photo"/>
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">COMPANY</div>
                  <div className="footsub-main">
                    <div ><a href="" className="footsub">About</a></div>
                    <div ><a href="" className="footsub">Features</a></div>
                    <div ><a href="" className="footsub">Works</a></div>
                    <div ><a href="" className="footsub">Career</a></div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">HELP</div>
                  <div className="footsub-main">
                    <div>
                      <a href="#" className="footsub" >
                        Customer Support
                      </a>
                    </div>
                    <div>
                      <a href="" className="footsub">
                        Delivery Details
                      </a>
                    </div>
                    <div>
                      <a href="" className="footsub">
                        Terms & Conditions
                      </a>
                    </div>
                    <div>
                      <a href="" className="footsub">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">FAQ</div>
                  <div className="footsub-main">
                    <div ><a href="" className="footsub">Account</a></div>
                    <div ><a href="" className="footsub">Manage Deliveries</a></div>
                    <div ><a href="" className="footsub">Orders</a></div>
                    <div ><a href="" className="footsub">Payments</a></div>
                  </div>
                </div>
              </Col>
              <Col xs="6" sm="6" md="5" lg="2">
                <div className="grid-item-footer bottom-spacing">
                  <div className="foothead">RESOURCES</div>
                  <div className="footsub-main">
                    <div ><a href="" className="footsub">Free eBooks</a></div>
                    <div ><a href="" className="footsub">Development Tutorial</a></div>
                    <div ><a href="" className="footsub">How to - Blog</a></div>
                    <div ><a href="" className="footsub">Youtube Playlist</a></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ width: "100%", border: "1px solid #0000001A" }}></div>
          <div className="bootom-footersection">
            <div><span className="fooy-cname">Shop.co</span> © 2000-2023, All Rights Reserved</div>
            <div className="foot-grid-2-social-wrap">
              <a href="" className="payment-photo">
                <img src={pay1} alt="" />
              </a>
              <a href="" className="payment-photo">
                <img src={pay2} alt="" />
              </a>
              <a href="" className="payment-photo">
                <img src={pay3} alt="" />
              </a>
              <a href="" className="payment-photo">
                <img src={pay4} alt="" />
              </a>
              <a href="" className="payment-photo">
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
