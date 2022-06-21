var numSquare=6;
var color=[];
var pickedColor;
var h1=document.querySelector("h1");
var square=document.querySelectorAll(".square");
var result=document.getElementById("result");
var colorDisplay=document.getElementById("colorDisplay");
var resetButton=document.getElementById("reset");
var mode=document.querySelectorAll(".mode");
init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupSquares(){
for(var i=0; i<square.length; i++){
	square[i].addEventListener("click", function(){
		var clickedColor=this.style.background;
		if(clickedColor==pickedColor){
			colorChange(clickedColor);
			result.textContent="correct";
			h1.style.background=clickedColor;
			reset.textContent="Play again";
		}
		else{
			this.style.background="#232323";
			result.textContent="try again";
		}
	});
}
reset(); 
}
resetButton.addEventListener("click",function(){
	reset();
});
function colorChange(colors){
	for(var i=0;i<color.length;i++){
		square[i].style.background=colors;
	}
}
function pickColor(){
	return color[Math.floor(Math.random()*color.length)];

}
function generateColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*266);
	var g=Math.floor(Math.random()*266);
	var b=Math.floor(Math.random()*266);
	return("rgb("+r+", "+g+", "+b+")");

}
function setupModeButtons(){
for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="EASY" ? numSquare=3 : numSquare=6;
		reset();
	});
}
}
function reset(){
	color=generateColor(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="NEW COLOR";
	result.textContent="";
	for(var i=0;i<square.length;i++){
		if(color[i]){
		square[i].style.display="block";
		square[i].style.background=color[i];
	}
	else{
		square[i].style.display="none";

	}


	}
		h1.style.background="steelblue";
}