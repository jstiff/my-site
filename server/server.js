const fs = require("fs"),
  http = require("http");

const url = require("url");
const util = require("util");
const path = require("path");
let htmlFile;
let cssFile;
let jsFile;
let pastTxtArray;
let futureTxtArray;
let presentTxtArray;

const htmlPath = path.join(__dirname, "../public/index.html");
const cssPath = path.join(__dirname, "../public/index.css");
const jsPath = path.join(__dirname, "../public/index.js");
const pastTxt = path.join(__dirname, "../public/past.txt");
const presentTxt = path.join(__dirname, "../public/present.txt");
const futureTxt = path.join(__dirname, "../public/future.txt");

fs.readFile(futureTxt, "utf-8", (err, data) => {
  if (err) {
    console.log("pastTxt file read ERROR", err);
  }
  futureTxtArray = data.toString().split("");
  console.log("PASTtxt,,,,", JSON.stringify(futureTxtArray));
  fs.appendFile(
    jsPath,
    `FUTURE_DATA = ${JSON.stringify(futureTxtArray)};`,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("WORKED");
    }
  );
});

fs.readFile(presentTxt, "utf-8", (err, data) => {
  if (err) {
    console.log("pastTxt file read ERROR", err);
  }
  presentTxtArray = data.toString().split("");
  console.log("PASTtxt,,,,", JSON.stringify(pastTxtArray));
  fs.appendFile(
    jsPath,
    `PRESENT_DATA = ${JSON.stringify(presentTxtArray)};`,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("WORKED");
    }
  );
});

fs.readFile(pastTxt, "utf-8", (err, data) => {
  if (err) {
    console.log("pastTxt file read ERROR", err);
  }
  pastTxtArray = data.toString().split("");
  console.log("PASTtxt,,,,", JSON.stringify(pastTxtArray));
  fs.appendFile(
    jsPath,
    `PAST_DATA = ${JSON.stringify(pastTxtArray)};`,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("WORKED");
    }
  );
});

fs.readFile(cssPath, function (err, data) {
  if (err) {
    throw err;
  }
  cssFile = data;

  console.log("css", cssFile);
});
fs.readFile(htmlPath, (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    htmlFile = data;
  }
});

fs.readFile(jsPath, (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    jsFile = data;
  }
});
const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/index.css":
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(cssFile);
      break;
    case "/index.js":
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(jsFile);
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(htmlFile);
  }
  res.end();
});

server.listen(8000);
