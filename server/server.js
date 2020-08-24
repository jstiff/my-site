const fs = require("fs"),
  http = require("http");

const url = require("url");
const util = require("util");
const path = require("path");
let htmlFile;
let cssFile;
let jsFile;
let pastTxtArray;
let loaded = 0;

const htmlPath = path.join(__dirname, "../public/index.html");
const cssPath = path.join(__dirname, "../public/index.css");
const jsPath = path.join(__dirname, "../public/index.js");
const pastTxt = path.join(__dirname, "../public/past.txt");
const presentTxt = path.join(__dirname, "../public/present.txt");

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
  //   let cssToSend = JSON.stringify(cssFile);
  //   let cssBuffer = Buffer.from(JSON.parse(cssToSend).data);
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
//   let path = url.parse(req.url, true);
//   console.log("path", path.query);

//   console.log(`yo...${req.method}...${req.url}`);

//   res.write(poop);
//   let dataObj = { name: "jason", age: 555, ocupation: "yes" };
//   let data = JSON.stringify(dataObj);

//   res.end(poop);

server.listen(8000);

// try {
// 	fs.readFile(pastTxt, "utf-8", (err, data) => {
// 	  if (err) {
// 		console.log("pastTxt file read ERROR", err);
// 	  }
// 	  pastTxtArray = data.toString().split("");
// 	  console.log("PASTtxt,,,,", JSON.stringify(pastTxtArray));
// 	  fs.appendFile(
// 		jsPath,
// 		`let past = ${JSON.stringify(pastTxtArray)};`,
// 		(err) => {
// 		  if (err) {
// 			console.log(err);
// 		  }
// 		  console.log("WORKED");
// 		}
// 	  );
// 	});

// // 	  fs.appendFileSync("./public/index.js", pastArray, "utf8");
// //	  console.log("poop yo", pastArray);
//   } catch (err) {
// 	console.log("REadFile Error", err);
//   }
