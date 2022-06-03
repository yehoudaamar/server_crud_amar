const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data/students.json");
function read() {
  const students = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  return students;
}
module.exports = read;
