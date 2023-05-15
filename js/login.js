
 "use strict";

let usuario = "";
let senha = "";

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{
    const inputUser = document.querySelector("input[name = 'nmUser']");
    const inputPass = document.querySelector("input[name = 'pass']");

    if (inputUser.value.length > 3 && inputPass.value.length > 3) {

        inputUser.setAttribute("style", "outline-color: #00ff00;");
        inputPass.setAttribute("style", "outline-color: #00ff00;");
        
    } else{
        inputUser.setAttribute("style", "outline-color: #ff0000;");
        inputPass.setAttribute("style", "outline-color: #ff0000;");
    }

});