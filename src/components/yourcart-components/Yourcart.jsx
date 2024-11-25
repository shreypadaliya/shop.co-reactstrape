import React, { useState } from "react";
import { Container } from "reactstrap";
import { Icon } from "../../components/common-components/Svgicon";
import cartimg1 from "../../assets/images/png/Frame 33 (2).png";
import cartimg2 from "../../assets/images/png/Frame 33 (1).png";
import cartimg3 from "../../assets/images/png/Frame 32 (1).png";

const Yourcart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: cartimg1,
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      image: cartimg2,
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 3,
      image: cartimg3,
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
  ]);

  // Function to handle quantity changes
  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1), // Prevent quantity < 1
            }
          : item
      )
    );
  };

  // Calculate subtotal, discount, and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <section>
      <Container>
        <h4 className="card-section-top-heading">YOUR CART</h4>
        <div className="cart-page-container">
          {/* Cart Items */}
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="cart-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <p className="cart-item-details">
                      Size: {item.size} <br />
                      Color: {item.color}
                    </p>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                  <div className="cart-item-quantity-delete">
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, false)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, true)}
                      >
                        +
                      </button>
                    </div>
                    <button className="cart-item-delete">
                      <Icon name="icon11" />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>

          {/* Right Section: Order Summary */}
          <div className="order-summary-container">
            <div className="order-summary-title">Order Summary</div>
            <div className="order-summary-row">
              <span className="order-summary-label">Subtotal</span>
              <span className="order-summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="order-summary-row">
              <span className="order-summary-label">Discount (-20%)</span>
              <span className="order-summary-value discountprize">
                -${discount.toFixed(2)}
              </span>
            </div>
            <div className="order-summary-row">
              <span className="order-summary-label">Delivery Fee</span>
              <span className="order-summary-value">${deliveryFee.toFixed(2)}</span>
            </div>
            <hr />
            <div className="order-summary-total">
              <span className="order-summary-label">Total</span>
              <span className="order-summary-value total">
                ${total.toFixed(2)}
              </span>
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
  


// import React from "react";
// import { Container } from "reactstrap";
// import { Icon } from "../../components/common-components/Svgicon";
// import cartimg1 from "../../assets/images/png/Frame 33 (2).png"
// import cartimg2 from "../../assets/images/png/Frame 33 (1).png"
// import cartimg3 from "../../assets/images/png/Frame 32 (1).png"

// const Yourcart = () => {
//   return (
//     <section>
//       <Container>
//         <h4 className="card-section-top-heading">YOUR CART</h4>
//         <div className="cart-page-container">
//           <div className="cart-items-container">
//             {/* Cart Item */}
//             <div className="cart-item">
//               <img
//                 src={cartimg1}
//                 alt="Gradient Graphic T-shirt"
//                 className="cart-item-image"
//               />
//               <div className="cart-item-info">
//                 <div className="cart-item-title">Gradient Graphic T-shirt</div>
//                 <p className="cart-item-details">
//                   Size: Large <br />
//                   Color: White
//                 </p>
//                 <div className="cart-item-price">$145</div>
//               </div>
//               <div className="cart-item-quantity-delete">
//                 <div className="cart-item-quantity">
//                   <button className="quantity-btn">-</button>
//                   <span className="quantity">1</span>
//                   <button className="quantity-btn">+</button>
//                 </div>

//                 <button className="cart-item-delete">
//                   <Icon name="icon11" />
//                 </button>
//               </div>
//             </div>
//             <hr />

//             {/* Repeat for other items */}
//             <div className="cart-item">
//               <img
//                 src={cartimg2}
//                 alt="Gradient Graphic T-shirt"
//                 className="cart-item-image"
//               />
//               <div className="cart-item-info">
//                 <div className="cart-item-title">Gradient Graphic T-shirt</div>
//                 <p className="cart-item-details">
//                   Size: Large <br />
//                   Color: White
//                 </p>
//                 <div className="cart-item-price">$145</div>
//               </div>
//               <div className="cart-item-quantity-delete">
//                 <div className="cart-item-quantity">
//                   <button className="quantity-btn">-</button>
//                   <span className="quantity">1</span>
//                   <button className="quantity-btn">+</button>
//                 </div>

//                 <button className="cart-item-delete">
//                   <Icon name="icon11" />
//                 </button>
//               </div>
//             </div>
//             <hr />

//             <div className="cart-item">
//               <img
//                 src={cartimg3}
//                 alt="Gradient Graphic T-shirt"
//                 className="cart-item-image"
//               />
//               <div className="cart-item-info">
//                 <div className="cart-item-title">Gradient Graphic T-shirt</div>
//                 <p className="cart-item-details">
//                   Size: Large <br />
//                   Color: White
//                 </p>
//                 <div className="cart-item-price">$145</div>
//               </div>
//               <div className="cart-item-quantity-delete">
//                 <div className="cart-item-quantity">
//                   <button className="quantity-btn">-</button>
//                   <span className="quantity">1</span>
//                   <button className="quantity-btn">+</button>
//                 </div>

//                 <button className="cart-item-delete">
//                   <Icon name="icon11" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Order Summary */}
//           <div className="order-summary-container">
//             <div className="order-summary-title">Order Summary</div>
//             <div className="order-summary-row">
//               <span className="order-summary-label">Subtotal</span>
//               <span className="order-summary-value">$565</span>
//             </div>
//             <div className="order-summary-row">
//               <span className="order-summary-label">Discount (-20%)</span>
//               <span className="order-summary-value discountprize">-$113</span>
//             </div>
//             <div className="order-summary-row">
//               <span className="order-summary-label">Delivery Fee</span>
//               <span className="order-summary-value">$15</span>
//             </div>
//             <hr />
//             <div className="order-summary-total">
//               <span className="order-summary-label">Total</span>
//               <span className="order-summary-value total">$467</span>
//             </div>

//             <div className="promo-code-container">
//               <div className="nav-search-input">
//                 <div className="nav-search-input-icon">
//                   <Icon name="icon12" />
//                 </div>
//                 <input
//                   type="text"
//                   className="navsearchinput"
//                   placeholder="Add promo code"
//                 />
//               </div>
//               <button className="promo-code-btn">Apply</button>
//             </div>

//             <button className="checkout-btn">
//               Go to Checkout <span className="checkout-arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Yourcart;



