import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InfoSaldo1 from "../infoSaldo1/InfoSaldo1";
import "./dynamicDiv.css";

const DynamicDiv = ({ divClass }) => {
  const [index, setIndex] = useState(0);
  let i = 0;

  useEffect(() => {
    let cnt = 0;

    const dynamicDivInterval = setInterval(() => {
      // console.log("DynamicDiv", index);
      // i++;
      // setIndex(i);

      if (++cnt == 5) {
        cnt = 0;
        i = i + 1 > 2 ? 0 : i + 1;
        // i++;
        // if (i == 2) {
        //   i = 0;
        // }
        //   // console.log("i:", index);
        setIndex(i);
      }
    }, 1000);
    return () => clearInterval(dynamicDivInterval);
  }, []);

  return (
    // <div className={divClass}>
    <div className="dynamicDiv">
      {console.log(index)}
      {index == 0 && <img src="assets/images/mosque3.jpg" alt="" />}
      {index == 1 && <img src="assets/images/mosque1.jpg" alt="" />}
      {index == 2 && <InfoSaldo1 />}
      {/* <InfoSaldo1 /> */}
      {/* <img src="assets/images/mosque3.jpg" alt="" /> */}
    </div>
  );
};

export default DynamicDiv;
