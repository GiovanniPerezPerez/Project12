function run() {
    document.getElementById("paragragh").innerHTML = "Hello World";
    document.getElementById("paragragh").style.backgroundColor = "green";
    document.getElementById("paragragh").style.color = "black";
    document.getElementById("paragragh").style.padding = "20px"
    randomNum();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "black";
    x.style.color = "white";
    x.style.padding = "20px"
    x.style.textAlign = "center"
    
}