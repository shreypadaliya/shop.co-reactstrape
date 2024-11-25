import React, { useState } from "react";
import { Container } from "reactstrap";
import { Icon } from "../common-components/Svgicon";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); 

  const handleClose = () => {
    setIsVisible(false); 
  };

  return (
    <>
      {isVisible && ( 
        <section className="header-section">
          <Container>
            <div className="header-container-wraper animate__animated animate__fadeInUp">
              <div className="header-content">
                Sign up and get 20% off to your first order. &nbsp;
                <span className="header-content">
                  <a href="" className="header-content-link">
                    Sign Up Now
                  </a>
                </span>
              </div>
              <div className="header-icon-wraper" onClick={handleClose}>
                <Icon name="icon1" />
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Header;

// import React from "react";
// import { Container } from "reactstrap";
// import { Icon } from "../common-components/Svgicon"

// const Header = () => {
//   return (
//     <>
//       <section className="header-section">
//         <Container>
//           <div className="header-container-wraper">
//             <div className="header-content">
//               Sign up and get 20% off to your first order. &nbsp;
//               <span className="header-content"><a href="" className="header-content-link">Sign Up Now</a></span>
//             </div>
//             <div className="header-icon-wraper"><Icon name="icon1"/></div>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Header;
