import React, { useContext, useEffect, useState } from "react";
import JSONPretty from "react-json-pretty";
import DynamicDiv from "../../../components/dynamicDiv/DynamicDiv";
import Header1 from "../../../components/header1/Header1";
// import Header1 from "../../../components/header1/Header1";
import JamDigital from "../../../components/jamDigital/JamDigital";
import RuntextHome from "../../../components/runtext/RuntextHome";
import WaktuSholat from "../../../components/waktuSholat/WaktuSholat";
import { AppContext } from "../../../context/AppProvider";
import { runScriptHome } from "../../../core/scriptHome";
import { runSEE } from "../../../utils/see";
import HomeScript from "../HomeScript";
// import runSEE from "../../../utils/see";
import "./home1.css";

const Home1 = () => {
  const { context } = useContext(AppContext);

  useEffect(() => {
    runSEE(context);
    // const homeInterval = setInterval(() => {
    //   // console.log(context.allData.kota);
    // }, 1000);
    // runScriptHome({ context });
    // return () => clearInterval(homeInterval);
  }, []);

  // useEffect(() => {
  //   console.log(1);
  //   runScriptHome({ context });
  // }, [context.allData]);

  const click = () => {
    console.log("click");
    console.log(context);
    context.setPrayerTimes({});
  };
  return (
    <div className="display-flex-column full-height">
      <HomeScript />
      {/* <div className="divHome1"> */}
      <Header1 />
      <div className="contentHome1">
        <DynamicDiv divClass="flex-3 border-red" />
        <div className="content-right">
          {/* <span className="strKota display-flex flex-center">
            {context.allData.kota ? context.allData.kota.nama : ""}
          </span> */}
          <span className="strHari display-flex flex-center">
            {context.allData.kota ? context.allData.kota.nama : ""}, {"  "}
            {context.strHari}
          </span>
          <span className="strTgl display-flex flex-center">
            {context.strTglM} / {context.strTglH}
          </span>

          <WaktuSholat
            prayerTimes={context.prayerTimes}
            divClass="display-flex-column"
            divPtClass="display-flex flex-space-between"
          />
        </div>
      </div>
      <RuntextHome
        // divClass="runtext1"
        runtext={context.allData.runtext}
        divClass="runtext1 display-flex border-green"
      />
      {/* <span>{context.strTglH}</span> */}
      {/* <JamDigital setClock={setClock} /> */}
      {/* <div id="content">
        <JSONPretty id="json-pretty" data={context.allData.kota}></JSONPretty>
      </div>
      <button onClick={click}>click</button>
      <RuntextHome runtext={context.allData.runtext} /> */}
    </div>
  );
};

export default Home1;

// import jsonData from "F:/json/setting.json";
// "jsonFile": "file: F:/json/setting.json"

// const [strJam, setStrJam] = useState("hari");
// const [strHari, setStrHari] = useState("hari");
// const [strTgl, setStrTgl] = useState("tgl");

// let datetime = null;

// const setClock = (t) => {
//   datetime = t;
//   setStrHari(t.strHari);
//   setStrTgl(t.strDateM + " / " + getHijriyah(new Date(), 0).strHijriyah);
//   // console.log(1);
//   // console.log(datetime);
// };
// const getClock = () => datetime;
//datetime ? datetime.strHari : "null"
//   useEffect(() => {
//     const source = new EventSource("http://192.168.1.4:5000/events");
//     source.onmessage = (e) => {
//       // console.log(e.data);
//       console.log(JSON.parse(e.data).val);
//       setKota(JSON.parse(e.data).val);
//     };
//     return () => {
//       source.close();
//     };
//   }, []);
