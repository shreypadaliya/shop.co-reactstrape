import React from "react";
import Header from "../components/common-components/Header";
import Navbar from "../components/common-components/Navbar";
import Herosection from "../components/homepage-components/Herosection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection/>
    </div>
  );
};

export default Homepage;
