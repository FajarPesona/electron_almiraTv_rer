import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScriptIqomah = ({ timIqomah, setTimIqomah }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let m = timIqomah.m;
    let s = timIqomah.s;

    const IqomahInterval = setInterval(() => {
      if (--s < 0) {
        s = 59;
        if (--m < 0) {
          s = 0;
          m = 0;
          clearInterval(IqomahInterval);
          console.log("selesai iqomah");
          navigate("/");
        }
      }
      setTimIqomah({ m, s });
      console.log({ m, s });
    }, 1000);
    return () => clearInterval(IqomahInterval);
  }, []);

  return <></>;
};

export default ScriptIqomah;
