import React from "react";
import { Card, CardBody } from "reactstrap";
import { FaStar, FaEllipsisH, FaCheckCircle } from "react-icons/fa";

const Reviewcardwithdate = ({ name, review, date, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= rating ? "#FFC107" : "#E4E5E9"}
          style={{ marginRight: "4px" }}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="review-card">
      <CardBody className="review-card-body-date">
        {/* Rating */}
        <div className="rating">
          {renderStars(rating)}
          <FaEllipsisH style={{ marginLeft: "auto", cursor: "pointer" }} />
        </div>

        {/* Name and Verified Badge */}
        <div
          className="user-info"
        >
          <div className="review-card-body-date-name">
            {name}
          </div>
          <FaCheckCircle color="#28A745" />
        </div>

        {/* Review Text */}
        <div className="review-card-body-date-para">
          {review}
        </div>

        {/* Date */}
        <p style={{ fontSize: "12px", color: "#888" }} className="review-card-body-date-simple">Posted on {date}</p>
      </CardBody>
    </Card>
  );
};

export default Reviewcardwithdate;
