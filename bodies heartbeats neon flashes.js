//Sidebar JS
function openNav() {
  document.getElementById("navsidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navsidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


//Show Next Button
function showNextButton() {
	document.getElementById("NextButton").style.display = "inline";
}

setTimeout("showNextButton()", 4000);


//Save Game

function saveGame() {
  document.getElementById("savegame").innerHTML = "saved"
  document.getElementById("savegame").style.color = "red";
  var savedgame = $(location).attr("href");
  alert(savedgame);
}


//Load Game
function loadGame() {
  if (confirm("Load game?")) {
  $(location).load(savedgame);  
  } else {
    document.getElementById("loadgame").innerHTML = "load";
  }
}

