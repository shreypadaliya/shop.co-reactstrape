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
} from "reactstrap";

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
              {/* <Dropdown
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                className="dropdown-menu-container d-none d-sm-block"
              >
                <DropdownToggle
                  caret
                  style={{
                    backgroundColor: "#F5F5F5",
                    color: "#000",
                    border: "none",
                    fontWeight: "400",
                  }}
                >
                  Latest
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Oldest</DropdownItem>
                  <DropdownItem>Highest Rated</DropdownItem>
                  <DropdownItem>Lowest Rated</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
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
              <p>Here are the ratings and reviews...</p>
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
