import React from "react";
import Header from "../components/common-components/Header";
import Navbar from "../components/common-components/Navbar";
import Herosection from "../components/homepage-components/Herosection";
import Brandslider from "../components/homepage-components/Brandslider";
import Newarrival from "../components/homepage-components/Newarrival";
import Topselling from "../components/homepage-components/Topselling";
import Browse from "../components/homepage-components/Browse";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection/>
      <Brandslider/>
      <Newarrival/>
      <Topselling/>
      <Browse/>
    </div>
  );
};

export default Homepage;
