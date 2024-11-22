import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../common-components/ProductCard";
import pimg1 from "../../assets/images/png/Frame 32 (1).png";

const PaginateProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: pimg1,
      price: 145,
      originalPrice: null,
      rating: 3.5,
      discount: null,
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      image: pimg1,
      price: 180,
      originalPrice: null,
      rating: 4.5,
      discount: null,
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      image: pimg1,
      price: 120,
      originalPrice: 150,
      rating: 5,
      discount: 20,
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      image: pimg1,
      price: 240,
      originalPrice: 260,
      rating: 4,
      discount: 20,
    },
    {
      id: 5,
      name: "Checkered Shirt",
      image: pimg1,
      price: 180,
      originalPrice: null,
      rating: 4.5,
      discount: null,
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      image: pimg1,
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      image: pimg1,
      price: 212,
      originalPrice: 232,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      image: pimg1,
      price: 145,
      originalPrice: null,
      rating: 4,
      discount: null,
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      image: pimg1,
      price: 80,
      originalPrice: null,
      rating: 3,
      discount: null,
    },
    {
      id: 10,
      name: "Additional Product",
      image: pimg1,
      price: 100,
      originalPrice: null,
      rating: 4,
      discount: null,
    },
    // Additional items start here
    {
      id: 11,
      name: "Casual Crewneck Sweater",
      image: pimg1,
      price: 200,
      originalPrice: 250,
      rating: 4.2,
      discount: 20,
    },
    {
      id: 12,
      name: "Leather Jacket",
      image: pimg1,
      price: 450,
      originalPrice: 500,
      rating: 4.8,
      discount: 10,
    },
    {
      id: 13,
      name: "Classic Denim Jacket",
      image: pimg1,
      price: 300,
      originalPrice: 350,
      rating: 4.3,
      discount: 15,
    },
    {
      id: 14,
      name: "Relaxed Fit Hoodie",
      image: pimg1,
      price: 220,
      originalPrice: null,
      rating: 4,
      discount: null,
    },
    {
      id: 15,
      name: "Graphic Pullover Hoodie",
      image: pimg1,
      price: 250,
      originalPrice: null,
      rating: 4.6,
      discount: null,
    },
    {
      id: 16,
      name: "Cotton Cargo Pants",
      image: pimg1,
      price: 270,
      originalPrice: 300,
      rating: 4.7,
      discount: 10,
    },
    {
      id: 17,
      name: "Regular Fit Chinos",
      image: pimg1,
      price: 200,
      originalPrice: null,
      rating: 4.3,
      discount: null,
    },
    {
      id: 18,
      name: "Summer Sandals",
      image: pimg1,
      price: 90,
      originalPrice: null,
      rating: 3.8,
      discount: null,
    },
    {
      id: 19,
      name: "Slip-On Sneakers",
      image: pimg1,
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 20,
      name: "Wool Blend Overcoat",
      image: pimg1,
      price: 400,
      originalPrice: 450,
      rating: 4.9,
      discount: 10,
    },
    {
      id: 21,
      name: "Formal Oxford Shoes",
      image: pimg1,
      price: 350,
      originalPrice: 400,
      rating: 4.7,
      discount: 12,
    },
    {
      id: 22,
      name: "Sportswear Tracksuit",
      image: pimg1,
      price: 300,
      originalPrice: 320,
      rating: 4.5,
      discount: 5,
    },
    {
      id: 23,
      name: "Lightweight Windbreaker",
      image: pimg1,
      price: 220,
      originalPrice: 250,
      rating: 4.4,
      discount: 12,
    },
    {
      id: 24,
      name: "Everyday Baseball Cap",
      image: pimg1,
      price: 50,
      originalPrice: null,
      rating: 3.9,
      discount: null,
    },
    {
      id: 25,
      name: "Crew Socks (Pack of 3)",
      image: pimg1,
      price: 40,
      originalPrice: 60,
      rating: 4.2,
      discount: 20,
    },
    {
      id: 26,
      name: "Modern Belt Bag",
      image: pimg1,
      price: 120,
      originalPrice: 140,
      rating: 4.6,
      discount: 15,
    },
    {
      id: 27,
      name: "Ribbed Beanie",
      image: pimg1,
      price: 60,
      originalPrice: null,
      rating: 4.3,
      discount: null,
    },
  ];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <section className="paginate-products-section">
      <div className="paginate-products-grid">
        {currentItems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="paginate-pagination">
        <button
          className="paginate-page-button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} /> Previous
        </button>

        <div className="paginate-page-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`paginate-page-number ${
                currentPage === num ? "paginate-active" : ""
              }`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          className="paginate-page-button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PaginateProduct;
