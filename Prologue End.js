//Sidebar JS
function openNav() {
  document.getElementById("navsidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navsidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


//Typewriter JS

function showTheVoidDoesNotForget() { 
    document.getElementById("TheVoidDoesNotForget").style.display = "inline"; 
}

var i = 0;
var txt = 'but The Void does not forget.';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thevoiddoesnotforget").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



//NoMemory
function showNoMemory (){
	document.getElementById("NoMemory").style.display = "inline";
	setTimeout("typeWriter()", 2000); 
}


//Show Next Button
function showNextButton() {
	document.getElementById("NextButton").style.display = "inline";
}

setTimeout("showNextButton()", 7000);

