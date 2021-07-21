let fahRef = document.getElementById("fahrenheit");
let celRef = document.getElementById("celsius");
let fahButton = document.getElementById("fahButton")
let celButton = document.getElementById("celButton")

celRef.style.display = "none";
fahRef.style.display = "none";

function showFah(){
    event.preventDefault();
    fahRef.style.display = "";
    fahButton.style.display = "none";
    celButton.style.display = "none";
}

function showCel(){
    event.preventDefault();
    celRef.style.display = "";
    fahButton.style.display = "none";
    celButton.style.display = "none";
}

function fahCalc(){
    event.preventDefault();
    var userInput = document.getElementById("fahInput").value;
    var product = (userInput - 32) * 5/9;
    document.getElementById("fahToCel").innerHTML = product;
}

function celCalc(){
    event.preventDefault();
    var userInput = document.getElementById("celInput").value;
    var product = userInput * 9/5 + 32;
    document.getElementById("celToFah").innerHTML = product;
}

function reset(){
    celRef.style.display = "none";
    fahRef.style.display = "none";
    fahButton.style.display = "none";
    celButton.style.display = "none";
}

