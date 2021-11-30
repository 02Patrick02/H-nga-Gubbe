// JavaScript
let wordList; // Array med ett antal ord, där man sedan väljer ett slummässigt.
let selectedWord; // Det ord som valts slummässigt och som användaren ska gissa på.
let letterBoxes; // Array med referens till de span-taggar som utgör rutor för bokstäverna i ordet.
let hangmanImg; // Referens till img-elementet med bilden för galgen och gubben.
let hangmanImgNr; // Nummer för aktuell bild (0-6), för den bildfil som som visas (så man sedan kan veta vilket som blir nästa bild).
let msgElem; // Referens till div-elementet för medelandet.
let startGameBtn; // Referens till startknappen
let letterButtons; // Array med referenser till bokstavsknapparna 
let startTime;
// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	let i; // Loopvariabel

	startGameBtn = document.getElementById("startGameBtn");
	startGameBtn.addEventListener("click", startGame);
	

	letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");
	for(i = 0; i < letterButtons.length; i++){
		letterButtons[i].addEventListener("click", guessLetter);

	}


	hangmanImg = document.getElementById("hangman");
	msgElem = document.getElementById("message");

	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];

	changeButtonActivation(true);
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function startGame(){
	let now;
	randomWord();
	showLetterBoxes();

	hangmanImg.src = "pics/h0.png"
	hangmanImgNr = 0;

	changeButtonActivation(false);

	msgElem.innerHTML = "";

	now = new Date();
	startTime = now.getTime();
} 

function randomWord(){
	let oldWord;
	let wordIndex = Math.floor(Math.random() * wordList.length) + 1;
	
	while(oldWord == selectedWord){
		selectedWord = wordList[wordIndex];
		selectedWord[oldWord];
	}
	
}

function showLetterBoxes(){
	let newCode = "";
	let i;
	for(i = 0; i < selectedWord.length; i++){
		newCode += "<span>&nbsp;</span>";
	}
	document.getElementById("letterBoxes").innerHTML = newCode;
	letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");

}

function guessLetter(){
	let letter; //bokstaven för knapen
	let i; // loopvariabel
	let letterFound = false; //true eller false när man gissat
	let correctLettersCount = 0; //räknare
	
	letter = this.value;
	this.disabled = true;

	for(i = 0; i < selectedWord.length; i++){
		if(letter == selectedWord.charAt(i)){
			letterBoxes[i].innerHTML = letter;
			letterFound = true;
		}
		if(letterBoxes[i].innerHTML != "&nbsp;"){
			correctLettersCount++;
		}
	}
	
	if(letterFound == false){
		hangmanImgNr++;
		hangmanImg.src = "pics/h" + hangmanImgNr + ".png";

		if(hangmanImgNr == 6){
			endGame(true);
		}
	}
	else if(correctLettersCount === selectedWord.length){
		endGame(false);
	}
}

function endGame(manHanged){
	let now;
	let runTime;

	now = new Date();
	runTime = (now.getTime() - startTime) / 1000;

	if(manHanged == true){
		msgElem.innerHTML = "Man got hanged " + selectedWord + " was the correct word in\n";
		msgElem.innerHTML += runTime.toFixed(1) + " s";
	}
	else{
		msgElem.innerHTML = "congratulations you won!!!! in\n";
		msgElem.innerHTML += runTime.toFixed(1) + " s";
	}



	changeButtonActivation(true);

}

function changeButtonActivation(status){
	console.log(status);
	if(status == true){
		startGameBtn.disabled = false;
		for(i = 0; i < letterButtons.length; i++){
			letterButtons[i].disabled = true;
		}
			
	}
	else if(status == false){
		startGameBtn.disabled = true;
		for(i = 0; i < letterButtons.length; i++){
			letterButtons[i].disabled = false;
		}
			
	}
}