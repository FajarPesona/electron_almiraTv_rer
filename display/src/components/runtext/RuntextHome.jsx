import React from "react";
import "./runtextHome.css";

const RuntextHome = ({ runtext, divClass }) => {
  //   console.log(runtext);
  return (
    <div className={divClass}>
      <marquee
        id="marqueeHome"
        className="marqueeHome"
        behavior=""
        direction=""
        scrolldelay="10"
        scrollamount="2"
        truespeed="true"
      >
        <span className="marqtext">{runtext ? runtext[0] : ""}</span>
        <span className="marqtext">{runtext ? runtext[1] : ""}</span>
        <span className="marqtext">{runtext ? runtext[2] : ""}</span>
        <span className="marqtext">{runtext ? runtext[3] : ""}</span>
        <span className="marqtext">{runtext ? runtext[4] : ""}</span>
      </marquee>
    </div>
  );
};

export default RuntextHome;
