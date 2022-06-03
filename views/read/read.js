const btn = document.getElementById("readBtn");
const serverAddress = "http://localhost:3253/api/students";
btn.addEventListener("click", () => {
  fetch(serverAddress, { method: "get" })
    .then((res) => res.json())
    .then((res) => {
      console.log("students in server: ", res);

      const toJson = JSON.stringify(res);
      let keys = Object.keys(res.students);

      document.getElementById("readDiv").innerHTML = keys + `<br/>` + toJson;
    });

 

});
