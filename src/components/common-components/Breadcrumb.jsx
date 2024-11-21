import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Breadcrumb = () => {
  return (
    <section>
      <Container>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-item">
            Home
          </Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/shop" className="breadcrumb-item">
            Shop
          </Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/shop/men" className="breadcrumb-item">
            Men
          </Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">T-shirts</span>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
