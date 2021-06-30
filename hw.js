let submit = document.getElementById("input");
let btn = document.querySelector("button");
let text = document.querySelector("h2")
submit.addEventListener("input", ()=>{
    text.innerText = submit.value;
})