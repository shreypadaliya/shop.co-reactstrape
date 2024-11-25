import React from "react";
import { ReactComponent as Icon1 } from "../../assets/images/svgs/Vector.svg";
import { ReactComponent as Icon2 } from "../../assets/images/svgs/Frame.svg";
import { ReactComponent as Icon3 } from "../../assets/images/svgs//Frame (1).svg";
import { ReactComponent as Icon4 } from "../../assets/images/svgs/Vector (1).svg";
import { ReactComponent as Icon5 } from "../../assets/images/svgs/Frame (2).svg";
import { ReactComponent as Icon6 } from "../../assets/images/svgs/Frame (33).svg";
import { ReactComponent as Icon7 } from "../../assets/images/svgs/Frame (4).svg";
import { ReactComponent as Icon8 } from "../../assets/images/svgs/Frame (5).svg";
import { ReactComponent as Icon9 } from "../../assets/images/svgs/Frame (6).svg";
import { ReactComponent as Icon10 } from "../../assets/images/svgs/Frame (7).svg";
import { ReactComponent as Icon11 } from "../../assets/images/svgs/Frame (8).svg";
import { ReactComponent as Icon12 } from "../../assets/images/svgs/Frame (9).svg";
// import { ReactComponent as Icon13 } from "../../assets/images/svgs/SVG (10).svg";

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "icon1":
      return <Icon1 {...props} />;
    case "icon2":
      return <Icon2 {...props} />;
    case "icon3":
      return <Icon3 {...props} />;
    case "icon4":
      return <Icon4 {...props} />;
    case "icon5":
      return <Icon5 {...props} />;
    case "icon6":
      return <Icon6 {...props} />;
    case "icon7":
      return <Icon7 {...props} />;
    case "icon8":
      return <Icon8 {...props} />;
    case "icon9":
      return <Icon9 {...props} />;
    case "icon10":
      return <Icon10 {...props} />;
    case "icon11":
      return <Icon11 {...props} />;
    case "icon12":
      return <Icon12 {...props} />;
    // case "icon13":
    //   return <Icon13 {...props} />;
    default:
      return null;
  }
};


{/* <Icon name="icon2" /> */}