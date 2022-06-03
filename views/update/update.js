const form = document.getElementById("f");
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const jsonData = {};
  const data = new FormData(form);
  for (let [key, value] of data.entries()) {
    jsonData[key] = value;
  }
  fetch("http://localhost:3253/api/students", {
    method: "PUT",
    body: JSON.stringify(jsonData),
  });
});
