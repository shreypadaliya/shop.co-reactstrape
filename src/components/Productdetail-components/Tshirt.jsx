import React, { useState } from "react";
import tshirt1 from "../../assets/images/png/image 2.png";
import tshirt2 from "../../assets/images/png/image 5.png";
import tshirt3 from "../../assets/images/png/image 6.png";
import tshirt4 from "../../assets/images/png/image 1.png";
import { Container } from "reactstrap";

const Tshirt = () => {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section>
      <Container>
        <div className="product-detail">
          <div className="product-detail__images">
            <div className="product-detail__thumbnails">
              <img src={tshirt1} alt="Thumbnail 1" />
              <img src={tshirt2} alt="Thumbnail 2" />
              <img src={tshirt3} alt="Thumbnail 3" />
            </div>
            <div className="product-detail__main-image">
              <img src={tshirt4} alt="Main Product" className="Main_Product_img"/>
            </div>
          </div>
          <div className="product-detail__info">
            <h3 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h3>
            <div className="product-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.5/5</span>
            </div>
            <div className="product-pricing">
              <span className="current-price">$260</span>
              <span className="original-price">$300</span>
              <span className="discount">-40%</span>
            </div>
            <p className="product-description">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>
            <hr />
            <div className="product-colors">
              <div className="product-colors-head">Select Colors</div>
              <div className="product-color-options">
                <div
                  className={`color brown ${
                    selectedColor === "brown" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("brown")}
                ></div>
                <div
                  className={`color green ${
                    selectedColor === "green" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("green")}
                ></div>
                <div
                  className={`color navy ${
                    selectedColor === "navy" ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor("navy")}
                ></div>
              </div>
              <hr />
            </div>
            <div className="product-sizes">
              <div className="product-colors-head">Choose Size</div>
              <div className="size-options">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button
                    key={size}
                    className={`size ${selectedSize === size && "active"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="product-actions">
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange("decrement")}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange("increment")}>
                  +
                </button>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tshirt;
