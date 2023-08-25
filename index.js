const { Body } = require("node-fetch");

// Add your code here
const getBody = document.getElementsByTagName("body");


function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(newUser => {
        const h1 = document.createElement("h1");
        const getBody = document.querySelector("body");

        h1.innerHTML = newUser.id;
        getBody.appendChild(h1);
    })
    .catch(error => {
        const h2 = document.createElement("h2")
        const getBody = document.querySelector("body")
        
        h2.innerHTML = error.message;
        getBody.appendChild(h2);
    })

}