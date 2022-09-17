import { Route, Routes } from "react-router-dom";
import { getAllData, test } from "./api/api";
import { AppContextProvider } from "./context/AppProvider";
import Adzan from "./pages/adzan/Adzan";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import Iqomah from "./pages/iqomah/Iqomah";
import Koreksi from "./pages/koreksi/Koreksi";
import SetKota from "./pages/kota/SetKota";
import Runtext from "./pages/runtext/Runtext";
import Tarhim from "./pages/tarhim/Tarhim";
import SetTime from "./pages/time/SetTime";
import Test from "./Test";
import { play, stop } from "./utils/playMp3";

function App() {
  // const click = () => {
  //   console.log("click");
  //   getAllData();
  // };

  return (
    // <div>
    //   <h1>Setting</h1>
    //   {/* <button type="" onClick={click}>
    //     event
    //   </button> */}
    //   <button type="" onClick={() => play()}>
    //     play
    //   </button>
    //   <button type="" onClick={() => stop()}>
    //     stop
    //   </button>
    // </div>
    // <AppContextProvider>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/kota" element={<SetKota />} />
      <Route path="/tarhim" element={<Tarhim />} />
      <Route path="/iqomah" element={<Iqomah />} />
      <Route path="/adzan" element={<Adzan />} />
      <Route path="/runtext" element={<Runtext />} />
      <Route path="/koreksi" element={<Koreksi />} />
      <Route path="/info" element={<Info />} />
      <Route path="/time" element={<SetTime />} />
    </Routes>
    // <Test />

    // </AppContextProvider>
  );
}

export default App;

// "homepage": "./"

// <div>
//   <h1>Setting</h1>
//   <button type="" onClick={click}>
//     event
//   </button>
//   <button type="" onClick={() => play()}>
//     play
//   </button>
//   <button type="" onClick={() => stop()}>
//     stop
//   </button>
// </div>
