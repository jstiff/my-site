const fs = require("fs"),
  http = require("http");

const url = require("url");
const util = require("util");
const path = require("path");

const pathName = path.join(__dirname, "../index.html");

const server = http.createServer(function (req, res) {
  fs.readFile(pathName, (err, html) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      let poop = JSON.stringify(html);
      console.log("poop", html);
      res.end(poop);
    }
  });
  //   let path = url.parse(req.url, true);
  //   console.log("path", path.query);

  //   console.log(`yo...${req.method}...${req.url}`);
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(util.inspect(path.query));
  //   res.write(poop);
  //   let dataObj = { name: "jason", age: 555, ocupation: "yes" };
  //   let data = JSON.stringify(dataObj);

  //   res.end(poop);
});

server.listen(8000);
