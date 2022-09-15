import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// const source = new EventSource("http://192.168.1.4:5000/events");

// source.onmessage = (e) => {
//   console.log(1);
//   // console.log(JSON.parse(e.data));
// };

// source.addEventListener("message", (message) => {
//   console.log("Got", message);
//   // Display the event data in the `content` div
//   // document.querySelector("#content").innerHTML = message.data;
// });
