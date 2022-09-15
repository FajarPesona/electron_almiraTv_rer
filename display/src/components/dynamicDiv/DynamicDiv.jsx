import React from "react";
import "./dynamicDiv.css";

const DynamicDiv = ({ divClass }) => {
  return (
    // <div className={divClass}>
    <div className="dynamicDiv">
      <img src="assets/images/mosque1.jpg" alt="" />
    </div>
  );
};

export default DynamicDiv;
