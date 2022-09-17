const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { SerialPort } = require("serialport");

const settingRouter = require("./routes/settingRoutes");
const displayRouter = require("./routes/displayRoutes");

const { displayPath, settingPath, passFile } = require("../paths");
const { eventsHandler } = require("./controllers/settingController");

// const x = "081.mp3";
// console.log(("00" + (parseInt(x.substring(0, 3)) + 1)).slice(-3) + ".mp3");
// console.log(parseInt(x.substring(0, 3)) + 1);

// Create a port
// const port = new SerialPort({
//   path: "/dev/tty-usbserial1",
//   baudRate: 57600,
// });

const result = require(passFile);
if (result.pass === "123abc567") {
  console.log("pass");
  const server = express();

  server.use(cors());
  server.use(morgan("tiny"));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(express.static(displayPath));
  server.use(express.static(settingPath));

  server.get("/home", (req, res) => {
    // res.send("ljfd");
    res.sendFile("index.html", { root: settingPath });
  });
  server.use("/setting", settingRouter);
  server.use("/display", displayRouter);
  server.get("/events", eventsHandler);

  server.listen(5000, () => {
    console.log("server running");
  });

  module.exports = server;
}
// const path = require("path");
// const { eventsHandler } = require("./see/see");

// server.post("/set", (req, res) => {
//   msg = req.body;
//   res.send("ok");
//   console.log(msg);
//   if (response) {
//     response.write(`data: ${JSON.stringify(msg)}\n\n`);
//   }
// });
// server.get("/display", (req, res) => {
//   res.sendFile("index.html", { root: displayPath });
// });

// server.get("/setting", (req, res) => {
//   res.sendFile("index.html", { root: settingPath });
// });
// const server = express();

// server.use(cors());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// server.use("/display", express.static("public/display"));
// server.use("/setting", express.static("public/setting"));
// console.log(__dirname);
// console.log(path.join(__dirname, "../../display/build"));

// run().catch((err) => console.log(err));

// async function run() {
//   const server = express();

//   server.use(cors());
//   server.use(express.json());
//   server.use(express.urlencoded({ extended: true }));

//   server.use(express.static(displayPath));
//   server.use(express.static(settingPath));

//   server.get("/display", (req, res) => {
//     res.sendFile("index.html", { root: displayPath });
//   });

//   server.get("/setting", (req, res) => {
//     res.sendFile("index.html", { root: settingPath });
//   });

//   server.post("/set", (req, res) => {
//     msg = req.body;
//     // res.send("oke");
//     res.status(200);
//     // setTimeout(() => {
//     //   //   console.log("World!");
//     //   console.log(msg);
//     //   eventPresent = true;
//     // }, 1000);
//     console.log(msg);
//     eventPresent = true;
//   });

//   let clients = [];

// server.get("/events", eventsHandler);

// function eventsHandler(request, response, next) {
//       const headers = {
//         "Content-Type": "text/event-stream",
//         Connection: "keep-alive",
//         "Cache-Control": "no-cache",
//       };
//       response.writeHead(200, headers);

//       const data = `data: ${JSON.stringify(msg)}\n\n`;

//       response.write(data);
// }

//   server.get("/events", function (req, res) {
//     console.log("Got /events");
//     res.set({
//       "Cache-Control": "no-cache",
//       "Content-Type": "text/event-stream",
//       Connection: "keep-alive",
//     });
//     res.flushHeaders();

//     // Tell the client to retry every 10 seconds if connectivity is lost
//     res.write("retry: 10000\n\n");

//     // while (true) {
//     //   if (eventPresent) {
//     //     eventPresent = false;
//     //     console.log("Emit", ++count);
//     //     // res.write("data: " + JSON.stringify(msg) + "\n\n");
//     //     // console.log("Emit", ++count);
//     //     // res.write(`data: ${count}\n\n`);
//     //   }
//     // }

//     setInterval((res) => {
//       //   console.log(++count);
//       if (eventPresent) {
//         eventPresent = false;
//         console.log("Emit", ++count);
//         // res.write("data: " + JSON.stringify(msg) + "\n\n");
//         // console.log("Emit", ++count);
//         // res.write(`data: ${count}\n\n`);
//       }
//     }, 1000);

//     // res.write(`data: ${count}\n\n`);

//     // while (true) {
//     //   await new Promise((resolve) => setTimeout(resolve, 2000));
//     // console.log("Emit", ++count);
//     // res.write(`data: ${count}\n\n`);

//     // if (eventPresent == true) {
//     //   eventPresent = false;
//     //   console.log("Emit", ++count);
//     //   // res.write(JSON.stringify(msg));
//     //   res.write("data: " + JSON.stringify(msg) + "\n\n");
//     //   // console.log("Emit", ++count);
//     //   // res.write(`data: ${count}\n\n`);
//     // }
//     // }
//   });

//   server.listen(5000, () => {
//     console.log("server running");
//   });
// }
