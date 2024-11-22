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


import React, { useState } from "react";
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
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <section className="casual-section">
      <Container>
        <div className="casual-section-wraper">
          {/* Sidebar */}
          {sidebarVisible && (
            <div className="casual-section-left">
              <Sidebarfilter />
              {/* Close button */}
              <Button className="close-sidebar-btn" onClick={closeSidebar}>
                Close Sidebar
              </Button>
            </div>
          )}

          {/* Main content */}
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
                  {/* Sidebar toggle button */}
                  <Button className="cas-button1-right" onClick={toggleSidebar}>
                    <Icon name="icon7" />
                  </Button>
                </div>
              </div>
            </div>
            <Paginateproduct />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Casualmain;
