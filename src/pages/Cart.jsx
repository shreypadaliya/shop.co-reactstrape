import React from "react";
import Header from "../components/common-components/Header";
import Navbar from "../components/common-components/Navbar";
import Latestoffer from "../components/common-components/Latestoffer";
import Footer from "../components/common-components/Footer";
import Categorybreadcrumb from "../components/category-page/Categorybreadcrumb";
import Yourcart from "../components/yourcart-components/Yourcart";

const Cart = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Categorybreadcrumb />
      <Yourcart/>
      <Latestoffer />
      <Footer />
    </div>
  );
};

export default Cart;
