function printDate(){
	var d = new Date();
	var p = document.getElementById("date");
	p.innerHTML='<b>Fecha del análisis</b>	: '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+' a las '+d.getHours()+':'+d.getMinutes();
}

function score(){
	var section = document.getElementById("passed");
	var win = section.getElementsByTagName("div").length;
	
	section = document.getElementById("failed");
	var fail = section.getElementsByTagName("div").length;
	
	section = document.getElementById("manual");
	var manual = section.getElementsByTagName("div").length;
	
	document.getElementById("numpruebas").innerHTML = win+fail+manual;
	if(win - (fail*0.75) <= 10){
		document.getElementById("finalscore").innerHTML = win - (fail*0.6);
	}else{
		document.getElementById("finalscore").innerHTML = 10;
	}
	

}
function paintScore(){
	var p = document.getElementById("finalscore");
	var score = p.innerHTML;

	if(score < 2.5){
		p.style.background = "black";
	}else if(score >= 2.5 && score < 5){
		p.style.background = "#e62e00";
	}else if(score >= 5 && score < 6){
		p.style.background = "##ff9933";
	}else if(score >= 6 && score < 7){
		p.style.background = "#e6e600";
	}else if(score >= 7 && score < 8){
		p.style.background = "#99ff66";
	}else if(score >= 8 && score < 9){
		p.style.background = "#00ff00";
	}else if(score >= 9 && score < 10.1){
		p.style.background = "#339933";
	}
}

function showPassed(){
	document.getElementById("passed").style.display = "inherit";
	document.getElementById("failed").style.display = "none";
	document.getElementById("manual").style.display = "none";
	document.getElementById("noapply").style.display = "none";
	document.getElementById("link1").style.backgroundColor = "#dbe1e8";
	document.getElementById("link2").style.backgroundColor = "transparent";
	document.getElementById("link3").style.backgroundColor = "transparent";
	document.getElementById("link4").style.backgroundColor = "transparent";
}
function showFailed(){
	document.getElementById("passed").style.display = "none";
	document.getElementById("failed").style.display = "inherit";
	document.getElementById("manual").style.display = "none";
	document.getElementById("noapply").style.display = "none";
	document.getElementById("link1").style.backgroundColor = "transparent";
	document.getElementById("link2").style.backgroundColor = "#dbe1e8";
	document.getElementById("link3").style.backgroundColor = "transparent";
	document.getElementById("link4").style.backgroundColor = "transparent";
}
function showManual(){
	document.getElementById("passed").style.display = "none";
	document.getElementById("failed").style.display = "none";
	document.getElementById("manual").style.display = "inherit";
	document.getElementById("noapply").style.display = "none";
	document.getElementById("link1").style.backgroundColor = "transparent";
	document.getElementById("link2").style.backgroundColor = "transparent";
	document.getElementById("link3").style.backgroundColor = "#dbe1e8";
	document.getElementById("link4").style.backgroundColor = "transparent";
}
function showNoapply(){
	document.getElementById("passed").style.display = "none";
	document.getElementById("failed").style.display = "none";
	document.getElementById("manual").style.display = "none";
	document.getElementById("noapply").style.display = "inherit";
	document.getElementById("link1").style.backgroundColor = "transparent";
	document.getElementById("link2").style.backgroundColor = "transparent";
	document.getElementById("link3").style.backgroundColor = "transparent";
	document.getElementById("link4").style.backgroundColor = "#dbe1e8";
	
}