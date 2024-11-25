import React, { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "../common-components/Svgicon";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import Reviewcardwithdate from "./Reviewcardwithdate";

const Reviewtab = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <section className="review-tab-section">
      <Container>
        <div>
          {/* Tab Navigation */}
          <Nav tabs className="justify-content-center">
            <NavItem className="review-tab-wrap">
              <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => toggleTab("1")}
                style={{ cursor: "pointer" }}
              >
                Product Details
              </NavLink>
            </NavItem>
            <NavItem className="review-tab-wrap">
              <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => toggleTab("2")}
                style={{ cursor: "pointer" }}
              >
                Rating & Reviews
              </NavLink>
            </NavItem>
            <NavItem className="review-tab-wrap">
              <NavLink
                className={activeTab === "3" ? "active" : ""}
                onClick={() => toggleTab("3")}
                style={{ cursor: "pointer" }}
              >
                FAQs
              </NavLink>
            </NavItem>
          </Nav>

          <div className="d-flex align-items-center justify-content-between review-button-holder">
            {/* Left Side */}
            <div className="d-flex align-items-baseline">
              <div className="review-button-holder-title">All Reviews</div>
              <span className="review-button-holder-title-span">(451)</span>
            </div>

            {/* Right Side */}
            <div className="d-flex align-items-center review-button-holder-right">
              {/* Filter Icon */}
              <Button className="d-flex align-items-center justify-content-center review-button1-right">
                <Icon name="icon7" />
              </Button>

              {/* Dropdown */}
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                className="dropdown-menu-container d-none d-sm-block review-drop-main"
              >
                <DropdownToggle className="review-dropdown2-right">
                  Latest
                  {/* Custom Icon */}
                  <Icon name="icon8" />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>Oldest</DropdownItem>
                  <DropdownItem>Highest Rated</DropdownItem>
                  <DropdownItem>Lowest Rated</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* Write a Review Button */}
              <Button className="review-tab-button">Write a Review</Button>
            </div>
          </div>

          {/* Tab Content */}
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <p>Here are the product details...</p>
            </TabPane>
            <TabPane tabId="2">
              <div className="review-grid">
                <Row>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="Samantha D.."
                      review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                      date="Posted on August 14, 2023"
                      rating={4.5}
                    />
                  </Col>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="Alex M."
                      review="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
                      date="Posted on August 15, 2023"
                      rating={4}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="Ethan R."
                      review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
                      date="Posted on August 16, 2023"
                      rating={3.5}
                    />
                  </Col>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="Olivia P."
                      review="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
                      date="Posted on August 17, 2023"
                      rating={4}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="John M."
                      review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                      date="September 3, 2023"
                      rating={4}
                    />
                  </Col>
                  <Col sm="12" md="6" lg="6" className="p-2">
                    <Reviewcardwithdate
                      name="John M."
                      review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                      date="September 3, 2023"
                      rating={4}
                    />
                  </Col>
                </Row>
                <div className="load-more-review-wrap">
                  <Button className="load-more-review-wrap-button">
                    Load More Review
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <p>Here are the FAQs...</p>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </section>
  );
};

export default Reviewtab;
