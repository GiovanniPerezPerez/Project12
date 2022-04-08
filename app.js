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
    return ran;   
}


function userNumber() {
    let user = document.getElementById("getnumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "orange";
    y.style.padding = "20px"
    y.style.textAlign = "center"
    return user;
}


function compareNumbers() {
    let a  = userNumber()
    let b = randomNum()

    if (a != b) {
        document.getElementById("compare").innerhtml "Numbers are not the same. Computer got " + b + ", and user got " + a;
    
    } else if (a == b) {
        document.getElementById("compare").innerhtml "Numbers are the same. Computer got " + b + ", and user got " + a;
    }

}