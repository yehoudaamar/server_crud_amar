const http = require("http");
const fs = require("fs");

const updateFn = require("./api/update");
const deleteFn = require("./api/delete");
const createFn = require("./api/create");
const readFN = require("./api/read");

function logger (url,method) {
    // console.log(` url${url} method ${method} date  ${new Date()}`);
}

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  logger(url,method);

  switch (url) {
    // Loading Pages
    case "/home":
      fs.createReadStream("./views/home/index.html").pipe(res);
      break;
    case "/home/index.js":
      fs.createReadStream("./views/home/index.js").pipe(res);
      break;
    case "/read":
      // load read
      fs.createReadStream("./views/read/read.html").pipe(res);
      break;
    case "/read.js":
      // load read
      fs.createReadStream("./views/read/read.js").pipe(res);

      break;
    case "/update":
      // load update page
      fs.createReadStream("./views/update/update.html").pipe(res);
      break;
    case "/update.js":
      // load update page
      fs.createReadStream("./views/update/update.js").pipe(res);
      break;
    case "/delete":
      fs.createReadStream("./views/delete/delete.html").pipe(res);
      // load update page
      break;
    case "/delete.js":
      fs.createReadStream("./views/delete/delete.js").pipe(res);
      break;
    case "/create":
      console.log("create html");
      fs.createReadStream("./views/create/create.html").pipe(res);
      break;
    case "/create.js":
      fs.createReadStream("./views/create/create.js").pipe(res);
      break;

    // API operations

    case "/api/students":
      let buffers;
      let student;
      let data;

      switch (method) {
        case "GET":
          // read funciton
          const students = readFN();
          res.end(JSON.stringify({ students }));
          break;
        case "POST":
          // create funciton
          buffers = [];
          for await (const chunk of req) {
            buffers.push(chunk);
          }
          data = Buffer.concat(buffers).toString();
          student = JSON.parse(data);
          createFn(student);
          res.end();
          break;
        case "PUT":
          // update function
          buffers = [];
          for await (const chunk of req) {
            buffers.push(chunk);
          }
          data = Buffer.concat(buffers).toString();
          student = JSON.parse(data);
          updateFn(student);
          res.end();
          break;
        case "DELETE":
          // delete function
          buffers = [];
          for await (const chunk of req) {
            buffers.push(chunk);
          }
          data = Buffer.concat(buffers).toString();
          student = JSON.parse(data);
          deleteFn(student);
          res.end();
          break;
        default:
          break;

      }
      break;
    default:
      fs.createReadStream("./views/404/404.html").pipe(res);
      break;
  }
});

server.listen(3253);  // port number  // localhost:3253 //  http://localhost:3253/home
console.log("server listening on 3253");
