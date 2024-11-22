import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Categorybreadcrumb = () => {
  return (
    <section>
      <Container>
        <div className="breadcrumb">
          <Link to="/shop/home" className="breadcrumb-item">
            Home
          </Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Casual</span>
        </div>
      </Container>
    </section>
  );
};

export default Categorybreadcrumb;
