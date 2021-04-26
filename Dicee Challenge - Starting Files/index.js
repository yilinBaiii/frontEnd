var randomNumber1;
randomNumber1=Math.floor(Math.random()*6+1);
document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2;
randomNumber2=Math.floor(Math.random()*6+1);
document.getElementById("img2").setAttribute("src","images/dice"+randomNumber2+".png");

// function getWinner(){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    }
    if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    }
    if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="Draw!";
    }
// }

// getWinner();