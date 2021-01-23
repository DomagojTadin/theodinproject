function computerPlay() {
  let turn;
  var turnval = Math.floor(Math.random() * 100);
  switch (true) {
    case turnval >= 0 && turnval < 33:
      turn = "rock";
      break;
    case turnval >= 33 && turnval < 66:
      turn = "scissors";
      break;
    case turnval >= 66 && turnval < 99:
      turn = "paper";
      break;
    default:
      turn = "lizard";
      break;
  }
  return turn;
}

function playRound(playerInput, computerInput) {
  let outcome;
  let result;
  switch (true) {
    case playerInput.toLowerCase() == computerInput.toLowerCase():
      outcome = `Tie game! ${playerInput} equals ${computerInput}`;
      result = "tie";
      break;
    case playerInput.toLowerCase() == "rock" && computerInput.toLowerCase() == "scissors":
    case playerInput.toLowerCase() == "scissors" && computerInput.toLowerCase() == "paper":
    case playerInput.toLowerCase() == "paper" && computerInput.toLowerCase() == "rock":
      outcome = `You win! ${playerInput} beats ${computerInput}`;
      result = "player win"
      break;
    case playerInput.toLowerCase() == "scissors" && computerInput.toLowerCase() == "rock":
    case playerInput.toLowerCase() == "paper" && computerInput.toLowerCase() == "scissors":
    case playerInput.toLowerCase() == "rock" && computerInput.toLowerCase() == "paper":
      outcome = `You lose! ${computerInput} beats ${playerInput}`;
      result = "computer win"
      break;
    default:
      outcome = `You CHEAT! Lizard always beats ${playerInput}`;
      result = "computer win"
  };
  return {outcome, result};
}

function game(){
    let result = [];
    console.log(result.length)
    while(result.length<5){
        playerTurn = window.prompt("Enter 'rock', 'scissors', or 'paper'")
        let roundresult = playRound(playerTurn,computerPlay())
        console.log(roundresult.outcome)
        result.push(roundresult.result)
    }
    result.forEach(element => {
        console.log(element+'\n')   
    });  
}