import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getTime } from "../../../utils/time";
import ScriptAdzan from "../ScriptAdzan";

const Adzan1 = () => {
  const { context } = useContext(AppContext);
  const [strAdzan, setStrAdzan] = useState("");
  const [time, setTime] = useState(getTime({ withSec: true }));

  // const [strJam, setStrJam] = useState("");
  const [tik, setTik] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      <ScriptAdzan
        setStrAdzan={setStrAdzan}
        setTime={setTime}
        setTik={setTik}
      />
      <div>
        <span>{`${time.hour < 10 ? "0" : ""}${time.hour}`}</span>
        <span style={{ color: tik ? "black" : "white" }}>{" : "}</span>
        <span>{`${time.minute < 10 ? "0" : ""}${time.minute}`}</span>
      </div>
      <br />
      <span style={{ color: tik ? "black" : "white" }}>{strAdzan}</span>
    </div>
  );
};

export default Adzan1;
