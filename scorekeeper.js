var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var p1score=0;
var sc1=document.querySelector("#we1");
var winscore=document.querySelector("p span");
var gameOver = false;
var winsc= 5;
var reset=document.getElementById("reset");
var num = document.querySelector("input");
num.addEventListener("change",function(){
r1eset();winsc=Number(num.value);
winscore.textContent=winsc;})

reset.addEventListener("click",function(){
r1eset();
})
function r1eset(){

	p1score=0;
	p2score=0;
	sc1.textContent = p1score;
	sc2.textContent = p2score;
		sc1.classList.remove("winner");
		sc2.classList.remove("winner");
		gameOver=false;
}
p1.addEventListener("click",function(){
	if(!gameOver){
	p1score++;
	sc1.textContent = p1score;
	if(p1score === winsc)
	{
		sc1.classList.add("winner");
		gameOver=true;
	}}
});

var p2score=0;
var sc2=document.querySelector("#we2");
p2.addEventListener("click",function(){
	if(!gameOver){
	p2score++;
sc2.textContent = p2score;
	if(p2score === winsc)
	{
		sc2.classList.add("winner");
		gameOver=true;
	}
}});