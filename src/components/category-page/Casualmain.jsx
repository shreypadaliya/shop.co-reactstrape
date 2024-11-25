import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import Sidebarfilter from "../../components/category-page/Sidebarfilter";
import Paginateproduct from "./Paginateproduct";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Icon } from "../../components/common-components/Svgicon";

const Casualmain = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const toggleSidebar = () => {
    setShowMobileSidebar((prev) => !prev);
    // Toggle body scroll
    if (!showMobileSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Handle screen resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setShowMobileSidebar(false);
        document.body.style.overflow = "auto";
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="casual-section">
      <Container>
        <div className="casual-section-wrapper">
          <div
            className={`casual-section-left ${
              isMobile
                ? showMobileSidebar
                  ? "mobile-visible"
                  : "mobile-hidden"
                : ""
            }`}
          >
            {isMobile && (
              <Button onClick={toggleSidebar} className="close-sidebar-button">
                ✕
              </Button>
            )}
            <Sidebarfilter />
          </div>
          <div className="casual-section-right">
            <div className="cas-product-header">
              <div className="cas-product-header-name">Casual</div>
              <div className="cas-product-header-right">
                <div className="cas-product-header-right-info">
                  Showing 1-10 of 100 Products
                </div>
                <div className="cas-product-header-drop">
                  <div className="cas-product-header-right-info2">Sortby:</div>
                  <div className="mostpopular-container">
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                      <DropdownToggle caret className="mostpopular-toggle">
                        <span className="spam-cas-info">Most Popular</span>
                        <Icon name="icon10" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Select an Option</DropdownItem>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem>Option 3</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Button className="cas-button1-right" onClick={toggleSidebar}>
                    <Icon name="icon7" />
                  </Button>
                </div>
              </div>
            </div>
            <Paginateproduct />
          </div>
          {isMobile && showMobileSidebar && (
            <div onClick={toggleSidebar} className="mobile-backdrop" />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Casualmain;

// import React, { useState, useEffect } from "react";
// import { Container, Button } from "reactstrap";
// import Sidebarfilter from "../../components/category-page/Sidebarfilter";
// import Paginateproduct from "./Paginateproduct";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import { Icon } from "../../components/common-components/Svgicon";

// const Casualmain = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [showMobileSidebar, setShowMobileSidebar] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
//   const toggleSidebar = () => {
//     setShowMobileSidebar((prev) => !prev);
//     // Toggle body scroll
//     if (!showMobileSidebar) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   // Handle screen resize
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 991);
//       if (window.innerWidth > 991) {
//         setShowMobileSidebar(false);
//         document.body.style.overflow = "auto";
//       }
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => {
//       window.removeEventListener("resize", checkMobile);
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <section className="casual-section">
//       <Container>
//         <div className="casual-section-wraper">
//           <div
//             className="casual-section-left"
//             style={{
//               display: isMobile
//                 ? showMobileSidebar
//                   ? "block"
//                   : "none"
//                 : "block",
//               position: isMobile ? "fixed" : "static",
//               top: isMobile ? "0" : "auto",
//               left: isMobile ? "0" : "auto",
//               height: isMobile ? "100%" : "auto",
//               width: isMobile ? "295px" : "390px",
//               backgroundColor: "white",
//               zIndex: isMobile ? 1000 : "auto",
//               overflowY: "auto",
//               overflowX: "hidden",
//               maxHeight: isMobile ? "100vh" : "none",
//               paddingBottom: isMobile ? "80px" : "0", // Add padding at bottom for mobile
//             }}
//           >
//             {isMobile && (
//               <Button
//                 onClick={toggleSidebar}
//                 style={{
//                   position: "sticky",
//                   right: "40%",
//                   top: "15px",
//                   zIndex: 1001,
//                   float: "right",
//                 }}
//               >
//                 ✕
//               </Button>
//             )}
//             <Sidebarfilter />
//           </div>
//           <div className="casual-section-right">
//             <div className="cas-product-header">
//               <div className="cas-product-header-name">Casual</div>
//               <div className="cas-product-header-right">
//                 <div className="cas-product-header-right-info">
//                   Showing 1-10 of 100 Products
//                 </div>
//                 <div className="cas-product-header-drop">
//                   <div className="cas-product-header-right-info2">Sortby:</div>
//                   <div className="mostpopular-container">
//                     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                       <DropdownToggle caret className="mostpopular-toggle">
//                         <span className="spam-cas-info">Most Popular</span>
//                         <Icon name="icon10" />
//                       </DropdownToggle>
//                       <DropdownMenu>
//                         <DropdownItem header>Select an Option</DropdownItem>
//                         <DropdownItem>Option 1</DropdownItem>
//                         <DropdownItem>Option 2</DropdownItem>
//                         <DropdownItem>Option 3</DropdownItem>
//                       </DropdownMenu>
//                     </Dropdown>
//                   </div>
//                   <Button
//                     className="cas-button1-right"
//                     onClick={toggleSidebar}
//                     style={{ display: isMobile ? "block" : "none" }}
//                   >
//                     <Icon name="icon7" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <Paginateproduct />
//           </div>
//           {isMobile && showMobileSidebar && (
//             <div
//               onClick={toggleSidebar}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 zIndex: 999,
//               }}
//             />
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Casualmain;

// import React from "react";
// import { Container, Button } from "reactstrap";
// import Sidebarfilter from "../../components/category-page/Sidebarfilter";
// import Paginateproduct from "./Paginateproduct";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import { useState } from "react";
// import { Icon } from "../../components/common-components/Svgicon";

// const Casualmain = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <section className="casual-section">
//       <Container>
//         <div className="casual-section-wraper">
//           <div className="casual-section-left">
//             <Sidebarfilter />
//           </div>
//           <div className="casual-section-right">
//             <div className="cas-product-header">
//               <div className="cas-product-header-name">Casual</div>
//               <div className="cas-product-header-right">
//                 <div className="cas-product-header-right-info">
//                   Showing 1-10 of 100 Products
//                 </div>
//                 <div className="cas-product-header-drop">
//                   <div className="cas-product-header-right-info2">Sortby:</div>
//                   <div className="mostpopular-container">
//                     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                       <DropdownToggle caret className="mostpopular-toggle">
//                         <span className="spam-cas-info">Most Popular</span>
//                         <Icon name="icon10" />
//                         {/* Custom Icon */}
//                       </DropdownToggle>
//                       <DropdownMenu>
//                         <DropdownItem header>Select an Option</DropdownItem>
//                         <DropdownItem>Option 1</DropdownItem>
//                         <DropdownItem>Option 2</DropdownItem>
//                         <DropdownItem>Option 3</DropdownItem>
//                       </DropdownMenu>
//                     </Dropdown>
//                   </div>
//                   <Button className="cas-button1-right ">
//                     <Icon name="icon7" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <Paginateproduct />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Casualmain;
