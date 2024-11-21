import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Reviewcard = ({ name, review, rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? "#FFD700" : "#E0E0E0"} />
    ));
  };

  return (
    <Card
      className="testimonial-card"
    >
      <CardBody>
        {/* Render star ratings */}
        <div className="rating-stars">
          {renderStars(rating)}
        </div>

        {/* User name */}
        <CardTitle
          className="card-title"
        >
          {name} <FaCheckCircle color="#01AB31" style={{ marginLeft: "6.25px" }} />
        </CardTitle>
        {/* Review text */}
        <CardText
          className="card-review"
          style={{ marginTop: "12px", color: "#555" }}
        >
          "{review}"
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Reviewcard;
