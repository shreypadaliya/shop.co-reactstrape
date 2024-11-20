import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Badge,
} from "reactstrap";
import { FaStar, FaRegStar } from "react-icons/fa";



const ProductCard = ({
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} color="#FFD700" />
        ) : (
          <FaRegStar key={i} color="#FFD700" />
        )
      );
    }
    return stars;
  };

  return (
    <Card className="product-card">
      <CardImg top src={image} alt={name} className="cardsemimain" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <div className="product-card-info">
          {renderStars(rating)}
          <CardText className="card-info-text">{rating}/5</CardText>
        </div>
        <div
          className="card-info-text-2"
        >
          <CardText className="card-info-text-3">${price}</CardText>

          {originalPrice && (
            <CardText className="orignal-prize">${originalPrice}</CardText>
          )}
          {discount && (
            <Badge color="danger" className="discount-prize">
              -{discount}%
            </Badge>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
