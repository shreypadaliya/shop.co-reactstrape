import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/scss/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Productdetailpage from "./pages/Productdetailpage";
import Categorypage from "./pages/Categorypage";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-details" element={<Productdetailpage/>} />
        <Route path="/categorypage" element={<Categorypage/>} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
