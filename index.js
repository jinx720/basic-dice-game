var randomNumber1 = Math.random()*6;
var randNumb1 = Math.floor(randomNumber1)+1;
var randDice1 = ("./images/" + "dice"+ randNumb1 + ".png");
document.querySelectorAll("img")[0].setAttribute("src", randDice1);

var randNumb2 = Math.floor(Math.random()*6 + 1);
var randDice2 = ("./images/" + "dice"+ randNumb2 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", randDice2);

if (randDice1 == randDice2){
    document.querySelector("h1").innerHTML = "Draw";
}else if (randDice1 > randDice2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
}else {
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
