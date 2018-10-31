

var scores, roundScore, activePlayer, gamePlaying, inputScore, winningScore;
scores = [0,0]; //contains scores of the two players
roundScore = 0; //when a player gets "1" we loese all his score
activePlayer = 0; 
gamePlaying = true;
previousValue = 0;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Getter:
var x = document.querySelector('#score-0').textContent; //store the value of score-0 in the variable x

document.getElementById('dice-1').style.display = 'none'; //has the same fn as a CSS function to hide
document.getElementById('dice-2').style.display = 'none';
//operation.style.css_property = css_value; 


document.querySelector('.btn-roll').addEventListener('click', function(){
if(gamePlaying){

	var dice1 = Math.floor(Math.random() * 6) + 1; //select a random number between 1 and 6 (dice value)
	var dice2 = Math.floor(Math.random() * 6) + 1;
	//document.querySelector('.dice').style.display = 'block';
	document.getElementById('dice-1').style.display = 'block';
	document.getElementById('dice-2').style.display = 'block';
	document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
	document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

	//document.getElementById('score-' + activePlayer).textContent = dice;
	if(dice1 !== 1 && dice2 !=1)
	{ //add score
		roundScore+= dice1 + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}
	
	else
	{//next player
		document.getElementById('current-' + activePlayer).textContent = '0';
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //change to next player according to active player value
		roundScore = 0;
		//document.querySelector('.player-0-panel').classList.remove('active'); //removes active status from player 0
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		//toggle : if the property exists it erases it, if it doesn't exist toggle adds it
		document.querySelector('.dice').style.display = 'none';


	}	
	
}

})

document.querySelector('.btn-hold').addEventListener('click', function(){
if(gamePlaying){	
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	document.getElementById('current-' + activePlayer).textContent = '0';
	inputScore = document.querySelector('.winning-score').value;
	if(inputScore)
	{
		winningScore = inputScore;
	}
	else
	{
		winningScore = 20;
	}
	

	if(scores[activePlayer] >= winningScore) 
		{
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			gamePlaying = false;
		} 
	else
	{	
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	//toggle : if the property exists it erases it, if it doesn't exist toggle adds it
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
	}
}


})


document.querySelector('.btn-new').addEventListener('click', function(){
	document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
    roundScore = 0;
	scores = [0,0]; //contains scores of the two players
	roundScore = 0; //when a player gets "1" we loese all his score
	activePlayer = 0;
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
})


document.querySelector('.btn-help').addEventListener('click', function(){
	window.confirm("Rules : \
\n*) The game has two players playing in rounds \
\n*) In each turn, a player rolls two dices as many times as he wishes.Each result is added to his round score \
\n*) But, if the pleyer rolls a one (in one of the two dices), all his round score gets lost and it is the turn of the next player \
\n*) The player can choose to 'Hold', which means that his round score gets added to his global score, but he loses his turn \
\n*) The first player to achieve 100 points as golbal score wins the game \
\n*) To start a new game just hit 'new game' button");
})