const form = document.getElementById("delete");
document.addEventListener("submit", (e) => {
    e.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (let [key, value] of data.entries()) {
        jsonData[key] = value;
     
    }
    fetch("http://localhost:3253/api/students", {
        method: "DELETE",
        body: JSON.stringify(   jsonData),
    
        
    
});
});


//     fetch(serverAddress, {
//         method: "DELETE",
//         body: JSON.stringify(jsonData),

//     });
//     alert("Student Deleted");
// });


