const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data/students.json");
const readFn = require("./read");

function create(student) {
  const currentStudents = readFn();
  const name = student.name;
  if (name in currentStudents) {
    console.log(`student: ${name} already exists`);
    return;
  }
  currentStudents[name] = student;
  fs.writeFileSync(dataPath, JSON.stringify(currentStudents));
  return true;
}
module.exports = create;
