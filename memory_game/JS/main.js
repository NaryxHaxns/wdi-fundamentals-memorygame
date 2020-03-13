const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function createBoard(){
	for(let i=0; i<cards.length; i++){
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		}else{
			alert("Sorry, try again");
		}
	}
}

function flipCard(){
	const cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage)
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

function colorChange(){
	this.style.backgroundColor = "#00A6B3";
	this.style.color = "rgba(200,0,200,1)";
}

function colorBack(){
	this.style.backgroundColor = "rgba(200,0,200,1)";
	this.style.color = "#00A6B3";
}

document.querySelector('.reset').addEventListener('mouseover', colorChange);
document.querySelector('.reset').addEventListener('mouseout', colorBack);

document.querySelector('.reset').onclick = function(){
	location.reload(true);
}

createBoard();
