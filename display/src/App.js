import { useContext, useState } from "react";
import { useEffect } from "react";
import JSONPretty from "react-json-pretty";
import { Route, Routes } from "react-router-dom";
import { AppContext, AppContextProvider } from "./context/AppProvider";
import Adzan1 from "./pages/adzan/adzan1/Adzan1";
import Home1 from "./pages/home/home1/Home1";
import Iqomah1 from "./pages/iqomah/iqomah1/Iqomah1";

function App() {
  // const { context } = useContext(AppContext);
  // const { kota, setKota } = useContext(AppContext);

  // useEffect(() => {
  //   const source = new EventSource("http://192.168.1.4:5000/events");
  //   source.onmessage = (e) => {
  //     // console.log(e.data);
  //     console.log(JSON.parse(e.data).val);
  //     setKota(JSON.parse(e.data).val);
  //   };
  //   return () => {
  //     source.close();
  //   };
  // }, []);

  return (
    // <div className="full-height">
    //   I am a DIV that will stretch to fit the whole width and height of the
    //   browser window!.......
    // </div>
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/adzan" element={<Adzan1 />} />
        <Route path="/iqomah" element={<Iqomah1 />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;

// source.addEventListener("message", (message) => {
//   console.log("Got", message);

//   // Display the event data in the `content` div
//   document.querySelector("#content").innerHTML = message.data;
// });
