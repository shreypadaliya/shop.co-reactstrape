import React from 'react'
import Header from '../components/common-components/Header'
import Navbar from '../components/common-components/Navbar'
import Latestoffer from "../components/common-components/Latestoffer";
import Footer from "../components/common-components/Footer";
import Categorybreadcrumb from '../components/category-page/Categorybreadcrumb';

import Casualmain from '../components/category-page/Casualmain';

const Categorypage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Categorybreadcrumb/>
      <Casualmain/>
      <Latestoffer/>
      <Footer/>
      
    </div>
  )
}

export default Categorypage
