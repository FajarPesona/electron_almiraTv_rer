import React, { useState } from "react";
import { useEffect } from "react";
import { getTime } from "../../utils/time";

const JamDigital = ({ setClock }) => {
  const [time, setTime] = useState({});

  useEffect(() => {
    setInterval(() => {
      let t = getTime({ withSec: true });
      setTime(t);
      // console.log(t);
      setClock(t);
    }, 1000);
  }, []);

  return (
    <div>
      <span>{time.strTime}</span>
    </div>
  );
};

export default JamDigital;

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { getTime } from "../../utils/time";

// const JamDigital = ({ setClock }) => {
//   const [time, setTime] = useState({});

//   useEffect(() => {
//     setInterval(() => {
//       let t = getTime({ withSec: true });
//       setTime(t);
//       // console.log(t);
//       setClock(t);
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <span>{time.strTime}</span>
//     </div>
//   );
// };

// export default JamDigital;
