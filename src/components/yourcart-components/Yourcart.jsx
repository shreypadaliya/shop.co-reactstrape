import React from "react";
import { Container } from "reactstrap";
import { Icon } from "../../components/common-components/Svgicon";

const Yourcart = () => {
  return (
    <section>
      <Container>
        <h4 className="card-section-top-heading">YOUR CART</h4>
        <div className="cart-page-container">
          <div className="cart-items-container">
            {/* Cart Item */}
            <div className="cart-item">
              <img
                src="https://via.placeholder.com/80"
                alt="Gradient Graphic T-shirt"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div className="cart-item-title">Gradient Graphic T-shirt</div>
                <p className="cart-item-details">
                  Size: Large <br />
                  Color: White
                </p>
                <div className="cart-item-price">$145</div>
              </div>
              <div className="cart-item-quantity-delete">
                <div className="cart-item-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>

                <button className="cart-item-delete">
                  <Icon name="icon11" />
                </button>
              </div>
            </div>
            <hr />

            {/* Repeat for other items */}
            <div className="cart-item">
              <img
                src="https://via.placeholder.com/80"
                alt="Gradient Graphic T-shirt"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div className="cart-item-title">Gradient Graphic T-shirt</div>
                <p className="cart-item-details">
                  Size: Large <br />
                  Color: White
                </p>
                <div className="cart-item-price">$145</div>
              </div>
              <div className="cart-item-quantity-delete">
                <div className="cart-item-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>

                <button className="cart-item-delete">
                  <Icon name="icon11" />
                </button>
              </div>
            </div>
            <hr />

            <div className="cart-item">
              <img
                src="https://via.placeholder.com/80"
                alt="Gradient Graphic T-shirt"
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div className="cart-item-title">Gradient Graphic T-shirt</div>
                <p className="cart-item-details">
                  Size: Large <br />
                  Color: White
                </p>
                <div className="cart-item-price">$145</div>
              </div>
              <div className="cart-item-quantity-delete">
                <div className="cart-item-quantity">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>

                <button className="cart-item-delete">
                  <Icon name="icon11" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="order-summary-container">
            <div className="order-summary-title">Order Summary</div>
            <div className="order-summary-row">
              <span className="order-summary-label">Subtotal</span>
              <span className="order-summary-value">$565</span>
            </div>
            <div className="order-summary-row">
              <span className="order-summary-label">Discount (-20%)</span>
              <span className="order-summary-value discountprize">-$113</span>
            </div>
            <div className="order-summary-row">
              <span className="order-summary-label">Delivery Fee</span>
              <span className="order-summary-value">$15</span>
            </div>
            <hr />
            <div className="order-summary-total">
              <span className="order-summary-label">Total</span>
              <span className="order-summary-value total">$467</span>
            </div>

            <div className="promo-code-container">
              <div className="nav-search-input">
                <div className="nav-search-input-icon">
                  <Icon name="icon12" />
                </div>
                <input
                  type="text"
                  className="navsearchinput"
                  placeholder="Add promo code"
                />
              </div>
              <button className="promo-code-btn">Apply</button>
            </div>

            <button className="checkout-btn">
              Go to Checkout <span className="checkout-arrow">→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Yourcart;
