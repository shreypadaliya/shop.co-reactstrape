import React from 'react'
import Header from '../components/common-components/Header'
import Navbar from '../components/common-components/Navbar'
import Alsolike from '../components/Productdetail-components/Alsolike'
import Latestoffer from "../components/common-components/Latestoffer";
import Footer from "../components/common-components/Footer";
import Breadcrumb from "../components/common-components/Breadcrumb";


const Productdetailpage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Breadcrumb/>
      <Alsolike/>
      <Latestoffer/>
      <Footer/>
    </div>
  )
}

export default Productdetailpage
