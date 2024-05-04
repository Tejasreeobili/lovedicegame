var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDice="dice"+randomNumber1+".png";
var randomImageSource="./images/"+randomDice;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="./images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2🚩 won";
}else{
    document.querySelector("h1").innerHTML="draw";
}




