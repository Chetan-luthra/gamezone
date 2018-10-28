


var score, roundScore, activePlayer, dice,gamePlaying;
function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
}

init();

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".dice").style.display = "none";
var rollButton = document.querySelector(".btn-roll");
rollButton.addEventListener("click" , function(){
   if(gamePlaying){
    dice = Math.floor((Math.random() *6) + 1);
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";

    diceDOM.src = "dice-" + dice + ".png";
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer()
    }
   }
});
var holdButton = document.querySelector(".btn-hold");
holdButton.addEventListener("click", function(){
   if(gamePlaying){
        score[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent  = score[activePlayer];
        if(score[activePlayer] >= 100){
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }
        else{
            nextPlayer();
        }
   }
    
});
var newButton = document.querySelector(".btn-new");
newButton.addEventListener("click", init);

