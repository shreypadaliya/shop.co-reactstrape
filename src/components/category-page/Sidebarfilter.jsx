import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "../../components/common-components/Svgicon";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown state
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [priceRange, setPriceRange] = useState([50, 200]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const categories = ["T-shirts", "Shorts", "Hoodies", "Jeans"];
  const colors = [
    { name: "green", code: "#4CAF50" },
    { name: "red", code: "#f44336" },
    { name: "yellow", code: "#FFEB3B" },
    { name: "orange", code: "#FF9800" },
    { name: "lightblue", code: "#03A9F4" },
    { name: "darkblue", code: "#2196F3" },
    { name: "purple", code: "#9C27B0" },
    { name: "black", code: "#000000" },
    { name: "purple", code: "#9C27B0" },
    { name: "white", code: "#fff" },
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  const handlePriceChange = (e) => {
    setPriceRange([50, e.target.value]);
  };

  return (
    <div className="filter-sidebar animate__animated animate__fadeInLeft">
      {/* Categories Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("categories")}
        >
          <div className="filter-title">Filters</div>
          {openSections.categories ? (
            <Icon name="icon7" />
          ) : (
            <Icon name="icon7" />
          )}
        </div>
        <hr />
        <div
          className={`filter-content ${openSections.categories ? "open" : ""}`}
        >
          {categories.map((category) => (
            <Dropdown
              key={category}
              isOpen={dropdownOpen[category] || false}
              toggle={() => toggleDropdown(category)} 
              className="category-dropdown"
            >
              <DropdownToggle caret>
                {category}
                <Icon name="icon9" /> 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{category} Options</DropdownItem>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("price")}>
          <div className="filter-title">Price</div>
          {openSections.price ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div className={`filter-content ${openSections.price ? "open" : ""}`}>
          <input
            type="range"
            min="50"
            max="200"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-range"
          />
          <div className="price-values">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      <hr />

      {/* Colors Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("colors")}>
          <div className="filter-title">Colors</div>
          {openSections.colors ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div className={`filter-content ${openSections.colors ? "open" : ""}`}>
          <div className="colors-grid">
            {colors.map((color) => (
              <div
                key={color.name}
                className="color-option"
                style={{ backgroundColor: color.code }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />

      {/* Sizes Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("size")}>
          <div className="filter-title">Size</div>
          {openSections.size ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        <div className={`filter-content ${openSections.size ? "open" : ""}`}>
          <div className="sizes-grid">
            {sizes.map((size) => (
              <div key={size} className="size-option">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />

      {/* Dress Style Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("style")}>
          <div className="filter-title">Dress Style</div>
          {openSections.style ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </div>
        {/* <div className={`filter-content ${openSections.style ? "open" : ""}`}>
          {styles.map((style) => (
            <div key={style} className="category-item">
              {style}
            </div>
          ))}
        </div> */}
        <div className={`filter-content ${openSections.style ? "open" : ""}`}>
        {styles.map((category) => (
            <Dropdown
              key={styles}
              isOpen={dropdownOpen[category] || false}
              toggle={() => toggleDropdown(category)} 
              className="category-item"
            >
              <DropdownToggle caret>
                {category}
                <Icon name="icon9" /> 
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{category} Options</DropdownItem>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ))}
        </div>
      </div>

      <button className="apply-filter">Apply Filter</button>
    </div>
  );
};

export default FilterSidebar;
