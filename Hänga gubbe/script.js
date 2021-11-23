// JavaScript
let wordList; // Array med ett antal ord, där man sedan väljer ett slummässigt.
let selectedWord; // Det ord som valts slummässigt och som användaren ska gissa på.
let letterBoxes; // Array med referens till de span-taggar som utgör rutor för bokstäverna i ordet.
let hangmanImg; // Referens till img-elementet med bilden för galgen och gubben.
let hangmanImgNr; // Nummer för aktuell bild (0-6), för den bildfil som som visas (så man sedan kan veta vilket som blir nästa bild).
let msgElem; // Referens till div-elementet för medelandet.
// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	let i; // Loopvariabel
	let startGameBtn; // Referens till startknappen
	let letterButtons; // Array med referenser till bokstavsknapparna 

	startGameBtn = document.getElementById("startGameBtn").addEventListener("click", startGame);

	letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");
	for(i = 0; i < letterButtons.length; i++) letterButtons[i].onclick = guessLetter;

	hangmanImg = document.getElementById("hangman");
	msgElem = document.getElementById("message");

	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];
	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function startGame(){
	randomWord();
	showLetterBoxes();
	hangmanImg = "pics/h0.png"
	hangmanImgNr = 0;
} 

function randomWord(){
	let wordIndex;
	for(wordIndex = 0; wordIndex < wordlist.length; wordIndex--){
		wordIndex = Math.floor(Math.random())
		return selectedWord[wordIndex];
	}
}

function showLetterBoxes(){
	let newCode;
	let i;

	newCode = "";
}

function guessLetter(){

}

function endGame(manHanged){
	
}