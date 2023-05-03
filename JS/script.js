//Let's create a simple Whack-A-Mole clone.
//Feel free to create a repository for this exercice.
//The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. 
//Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. 
//The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. 
//Everytime you click on a mole, your score increases.
//If you'd like to spice things up, you can create an increasing difficulty by reducing the timeframe in which the mole appears, 
//and by introducing random delay time between the mole apparition.

let ufoBoxes;
let jacksonboxes;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}
//set up 9 div tags to create the game Board in HTML

function setGame() {
    for (let i = 0; i <9; i++) {
        let boxes = document.createElement("div");
        boxes.id = i.toString ();
        boxes.addEventListener("click", selectbox);
        document.getElementById("gameBoard").appendChild(boxes);
    }
    setInterval(setUfo, 1000);
    setInterval(setJackson , 2000);
}

function getRandomBox() {
    let num = Math.floor(Math.random()* 9);
    return num.toString();
}

function setUfo() {

    if  (gameOver) {
        return;
    }
    if(ufoBoxes) {
        ufoBoxes.innerHTML = "";
    }
     
    let ufo = document.createElement ("img");
    ufo.src = "./Assets/alien.png"

    let num = getRandomBox();
    if (ufoBoxes && jacksonboxes.id == num) {
        return;
    }
    ufoBoxes = document.getElementById(num);
    ufoBoxes.appendChild (ufo);
}

function setJackson() {

    if  (gameOver) {
        return;
    }
     if(jacksonboxes){
        jacksonboxes.innerHTML="";
     }

     let jackson = document.createElement ("img");
     jackson.src ="./Assets/jack.png";

     let num = getRandomBox();
     if (ufoBoxes && ufoBoxes.id == num) {
        return;
    }
     jacksonboxes = document.getElementById(num);
     jacksonboxes.append (jackson);

}

function selectbox () {
if (gameOver) {
    return;
}

    if (this == ufoBoxes) {
        score += 10;
        document.getElementById("score").innerText= score.toString ();
    }
    else if (this == jacksonboxes) {
        document.getElementById("score").innerText= "GAME OVER:" + score.toString ();
        gameOver = true;
    }
}