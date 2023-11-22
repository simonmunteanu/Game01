const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COPMUTER_WIN = "COMPUTER_WIN";

const DEFAULT_SELECTION = ROCK;
let gameIsRuning = false;

function getPlayerChoise() {
  const selection = prompt(`${ROCK}, ${SCISSOR}, ${PAPER}`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`Invalide choice! We chose ${DEFAULT_SELECTION} for you`);
    return DEFAULT_SELECTION;
  }

  return selection;
}

function getComputerChoise() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
}

function getWinner(cChoice, pChoise) {
  if (cChoice === pChoise) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoise === PAPER) ||
    (cChoice === PAPER && pChoise === SCISSOR) ||
    (cChoice === SCISSOR && pChoise === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COPMUTER_WIN;
  }
}

function initGame() {
  if (gameIsRuning) {
    return;
  }

  gameIsRuning = true;

  const playerChoise = getPlayerChoise();
  const computerChoise = getComputerChoise();
  const winner = getWinner(computerChoise, playerChoise);

  let message = `You picked ${playerChoise}, computer picked ${computerChoise}, you`;

  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + " won";
  } else if(winner === RESULT_COPMUTER_WIN){
    message = message + " lost";
  }

  alert(message);
  gameIsRuning = false;
}

startGameBtn.addEventListener("click", initGame);
