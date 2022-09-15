const { exec } = require("child_process");

const cmdSetTime = `powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/c cd /d %CD% && time `;
const cmdSetDate = `powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/c cd /d %CD% && date `;

function saveTime(val) {
  console.log("time", val);
  let s = `${cmdSetTime}${val.time}'`;
  console.log("cmd", s);

  exec(s, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

function saveDate(val) {
  console.log("date", val);
  let s = `${cmdSetDate}${val.date}'`;
  console.log("cmd", s);

  exec(s, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

function saveDateTime(val) {
  console.log("date", val);
  let s = `${cmdSetDate}${val.date}'`;
  console.log("cmd", s);

  exec(s, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    saveTime(val);
  });
}

module.exports = { saveTime, saveDate, saveDateTime };
