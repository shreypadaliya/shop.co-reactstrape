
import React from "react";
import { Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();

  const categoryData = [
    { id: 1, name: "Casual", path: "/categorypage" },
    { id: 2, name: "Formal" },
    { id: 3, name: "Party" },
    { id: 4, name: "Gym" },
    // { id: 5, name: "Travel" }, 
    // { id: 6, name: "Beach" },  
    // { id: 7, name: "Office" }, 
    // { id: 8, name: "Sports" }, 
  ];

  const handleCategoryClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const createGridRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 2) {
      rows.push(items.slice(i, i + 2));
    }
    return rows;
  };

  const gridRows = createGridRows(categoryData);

  return (
    <section className="browse-section animate__animated animate__fadeInUp">
      <Container>
        <div className="browse-section-wrapper">
          <h2 className="browse-heading">BROWSE BY DRESS STYLE</h2>
          <div className="brows-grid">
            {gridRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`brows-grid-${rowIndex % 2 === 0 ? "upper" : "bottom"}`}
              >
                {row.map((item, colIndex) => (
                  <div
                    key={item.id}
                    className={`brows-grid-${
                      rowIndex % 2 === 0 ? "upper" : "bottom"
                    }-${colIndex === 0 ? "left" : "right"}`}
                    onClick={() => handleCategoryClick(item.path)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Browse;





// import React from "react";
// import { Container } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Browse = () => {
//   const navigate = useNavigate();

//   // Sample data array - you can modify this to fetch from an API or props
//   const categoryData = [
//     { id: 1, name: "Casual", path: "/categorypage" },
//     { id: 2, name: "Formar" },
//     { id: 3, name: "Party" },
//     { id: 4, name: "Gym" },
//   ];

//   const handleCategoryClick = (path) => {
//     if (path) {
//       navigate(path);
//     }
//   };

//   // Function to split items into rows of two
//   const createGridRows = (items) => {
//     const rows = [];
//     for (let i = 0; i < items.length; i += 2) {
//       rows.push(items.slice(i, i + 2));
//     }
//     return rows;
//   };

//   // Create grid rows
//   const gridRows = createGridRows(categoryData);

//   return (
//     <section className="browse-section animate__animated animate__fadeInUp">
//       <Container>
//         <div className="browse-section-wrapper">
//           <h2 className="browse-heading">BROWSE BY DRESS STYLE</h2>
//           <div className="brows-grid">
//             {gridRows.map((row, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className={`brows-grid-${rowIndex === 0 ? "upper" : "bottom"}`}
//               >
//                 {row.map((item, colIndex) => (
//                   <div
//                     key={item.id}
//                     className={`brows-grid-${
//                       rowIndex === 0 ? "upper" : "bottom"
//                     }-${colIndex === 0 ? "left" : "right"}`}
//                     onClick={() => handleCategoryClick(item.path)}
//                   >
//                     {item.name}
//                   </div>
//                 ))}
//                 {/* If row has only one item, add empty div to maintain grid structure */}
//                 {row.length === 1 && (
//                   <div
//                     className={`brows-grid-${
//                       rowIndex === 0 ? "upper" : "bottom"
//                     }-right`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Browse;

// import React from "react";
// import { Container } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Browse = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = () => {
//     navigate("/categorypage");
//   };

//   return (
//     <section className="browse-section animate__animated animate__fadeInUp">
//       <Container>
//         <div className="browse-section-wrapper">
//           <h2 className="browse-heading">BROWSE BY DRESS STYLE</h2>
//           <div className="brows-grid">
//             <div className="brows-grid-upper">
//               <div
//                 className="brows-grid-upper-left"
//                 onClick={handleCategoryClick}
//               >
//                 Casual
//               </div>
//               <div className="brows-grid-upper-right">Formar</div>
//             </div>
//             <div className="brows-grid-bottom">
//               <div className="brows-grid-bottom-left">Party</div>
//               <div className="brows-grid-bottom-right">Gym</div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Browse;


