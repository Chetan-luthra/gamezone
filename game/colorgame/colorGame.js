var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetDisplay = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;


init();
function init(){
	modeButtonSetup();
	setupSquares();
	reset1();
}
function reset1(){
	colors = generateRandomColor(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetDisplay.textContent="Change Color "
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	displayScreen();
}
function modeButtonSetup(){
	for(var i=0 ;i<modeButton.length;i++)
	{
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numsquares=3;
			}
			else{
				numsquares=6;
			}
			reset1();
		});
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "correct";
				change(clickedColor);
				heading.style.background= clickedColor;
				resetDisplay.textContent = "Play Again";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}	
}



resetDisplay.addEventListener("click", function() {
	reset1();
});

function change(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
	arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}
function displayScreen(){
	heading.style.background = "steelblue";
	messageDisplay.textContent="";
}
