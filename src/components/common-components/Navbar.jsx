import React, { useState } from "react";
import { Container } from "reactstrap";
import { Icon } from "../common-components/Svgicon";
import navlogo from "../../assets/images/png/SHOP.CO.png";
import navhamburgur from "../../assets/images/png/Frame (2).png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const handleCategorynav = () => {
    navigate("/cart");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="navbar-section animate__animated animate__fadeInUp">
      <Container>
        <div className="navbar-navigation">
          <div className="nav-left">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <img src={navhamburgur} alt="" />
            </div>
            {isMenuOpen && (
              <div className="mobile-menu">
                <div>
                  <a href="" className="navlink">
                    Shop
                  </a>
                </div>
                <div>
                  <a href="" className="navlink">
                    On Sale
                  </a>
                </div>
                <div>
                  <a href="" className="navlink">
                    New Arrivals
                  </a>
                </div>
                <div>
                  <a href="" className="navlink">
                    Brands
                  </a>
                </div>
              </div>
            )}

            <div className="logo">
              <h4 className="navhead">SHOP.CO</h4>
            </div>
          </div>

          <div className="navlink-wrapper">
            <div>
              <a href="" className="navlink">
                Shop
              </a>
            </div>
            <div>
              <a href="" className="navlink">
                On Sale
              </a>
            </div>
            <div>
              <a href="" className="navlink">
                New Arrivals
              </a>
            </div>
            <div>
              <a href="" className="navlink">
                Brands
              </a>
            </div>
          </div>

          <div className="nav-search-input">
            <div className="nav-search-input-icon">
              <Icon name="icon4" />
            </div>
            <input
              type="text"
              className="navsearchinput"
              placeholder="Search for product.."
            />
          </div>

          <div className="nav-right">
            <div className="search-icon-mobile" >
              <Icon name="icon5" />
            </div>
            <div className="nav-shop-profile">
              <div onClick={handleCategorynav}>
                <Icon name="icon2" />
              </div>
              <div>
                <Icon name="icon3" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
