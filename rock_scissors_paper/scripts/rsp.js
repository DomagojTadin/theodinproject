function computerTurn() {
	let turnResult, randomNumber = Math.floor(Math.random() * 100);
	switch (true) {
		case randomNumber >= 0 && randomNumber < 33:
			turnResult = 'rock';
			break;
		case randomNumber >= 33 && randomNumber < 66:
			turnResult = 'scissors';
			break;
		default:
			turnResult = 'paper';
	}
	return turnResult;
}

function playRound(playerInput, computerInput) {
	let outcome, result;
	switch (true) {
		case playerInput.toLowerCase() == computerInput.toLowerCase():
			outcome = `Tie game! Your ${playerInput} equals their ${computerInput}`;
			result = 'tie';
			break;
		case playerInput.toLowerCase() == 'rock' && computerInput.toLowerCase() == 'scissors':
		case playerInput.toLowerCase() == 'scissors' && computerInput.toLowerCase() == 'paper':
		case playerInput.toLowerCase() == 'paper' && computerInput.toLowerCase() == 'rock':
			outcome = `You win! Your ${playerInput} beats their ${computerInput}`;
			result = 'player win';
			break;
		case playerInput.toLowerCase() == 'scissors' && computerInput.toLowerCase() == 'rock':
		case playerInput.toLowerCase() == 'paper' && computerInput.toLowerCase() == 'scissors':
		case playerInput.toLowerCase() == 'rock' && computerInput.toLowerCase() == 'paper':
			outcome = `You lose! Their ${computerInput} beats your ${playerInput}`;
			result = 'computer win';
			break;
		default:
			outcome = `You CHEAT! Lizard always beats your ${playerInput}`;
			result = 'computer win';
	}
	return { outcome, result };
}

function game() {
	let result = [];
	while (result.length < 5) {
		playerTurn = window.prompt("Enter 'rock', 'scissors', or 'paper'");
		let roundresult = playRound(playerTurn, computerTurn());
		console.log(roundresult.outcome);
		result.push(roundresult.result);
	}
}