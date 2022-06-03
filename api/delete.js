const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data/students.json");
const readFn = require("./read");

function deletes(student) {
    const myStudents = readFn();
    const name = student.name;
    if (!(name in myStudents)) {
        console.log(`student ${name} is not in to delete!`);
        return;
    }


    delete myStudents[name];
    fs.writeFileSync(dataPath, JSON.stringify(myStudents));
    return;


}
module.exports = deletes;
