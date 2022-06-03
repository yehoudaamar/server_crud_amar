const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data/students.json");
const readFn = require("./read");

function update(student) {
  const currentStudents = readFn();
  const name = student.name;
  if (!(name in currentStudents)) {
    console.log(`student ${name} is not in to update!`);
    return;
  }
  currentStudents[name] = student;
  fs.writeFileSync(dataPath, JSON.stringify(currentStudents));
  return;
}
module.exports = update;
