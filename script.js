const computerSelector = document.getElementById("computer-choice");
const userSelector = document.getElementById("user-choice");
const resultSelector = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let resetButtonSelector = document.getElementById("reset-button");
let scoreSelectorPlayer = document.getElementById("score");
let scoreSelectorComputer = document.getElementById("score-computer");
let roundWinnerSelector = document.getElementById('round-winner')

////////////////////////////////////////
let imagesContainerSelector = document.getElementById('icons-container')

let userChoice;
let computerChoice;
let matchResult;
let counter = 0;
let counterComputer = 0;
let roundResult;

let resetButton = () => {
  document.location.reload();
};

let disabledButtons = []

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userSelector.innerHTML = userChoice;
    e.target.disabled = true;
    computerChoiceGenerator();
    getResult();
    updateScore();

    //check if all buttons are disabled to give the the final result in each round
    disabledButtons.push(e.target.disabled)
    console.log(disabledButtons)
    if(disabledButtons.length === 5) {
      roundWinner()
    }

  })
);


const roundWinner = () => {
  if(counter < counterComputer) {
    roundResult = 'computer won!' 
  } else if(counter > counterComputer){
    roundResult = 'you won!'
  } else {
    roundResult = 'nobody won!'
  }

  roundWinnerSelector.innerHTML = roundResult;
  // roundResult.style.color = "#19ff66"
  if(roundResult.includes('you')) {
    roundWinnerSelector.style.color = "#19ff66"
  } else if(roundResult.includes('computer')) {
    roundWinnerSelector.style.color = "#ff3f3f"
  } else if(roundResult.includes('nobody')){
    roundWinnerSelector.style.color = "#ffffff"
  }
};


resetButtonSelector.addEventListener("click", resetButton);

let computerChoiceGenerator = () => {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNum === 1) {
    computerChoice = "Rock";
  } else if (randomNum === 2) {
    computerChoice = "Paper";
  } else if (randomNum === 3) {
    computerChoice = "Scissors";
  } else if (randomNum === 4) {
    computerChoice = "Lizard";
  } else {
    computerChoice = "Spock";
  }

  computerSelector.innerHTML = computerChoice;
};

let getResult = () => {
  if (computerChoice === userChoice) {
    matchResult = `It's a tie! Let's try again!`;
    //computer choice with rock
  } else if (computerChoice == "Rock" && userChoice == "Paper") {
    matchResult = "Paper covers rock! You win!";
    counter++;
  } else if (computerChoice == "Rock" && userChoice == "Scissors") {
    matchResult = "Rock crushes scissors! You lose!";
    counterComputer++;
  } else if (computerChoice == "Rock" && userChoice == "Lizard") {
    matchResult = "Rock crushes lizard! You lose!";
    counterComputer++;
  } else if (computerChoice == "Rock" && userChoice == "Spock") {
    matchResult = "Spock vaporizes rock! You win";
    counter++;
    //computer choice with paper
  } else if (computerChoice == "Paper" && userChoice == "Rock") {
    matchResult = "Paper covers rock! You lose!";
    counterComputer++;
  } else if (computerChoice == "Paper" && userChoice == "Scissors") {
    matchResult = "Scissors cuts paper! You win!";
    counter++;
  } else if (computerChoice == "Paper" && userChoice == "Lizard") {
    matchResult = "Lizard eats paper! You win!";
    counter++;
  } else if (computerChoice == "Paper" && userChoice == "Spock") {
    matchResult = "Paper disproves Spock! You lose!";
    counterComputer++;
    //computer choice with scissors
  } else if (computerChoice == "Scissors" && userChoice == "Paper") {
    matchResult = "Scissors cuts paper! You lose!";
    counterComputer++;
  } else if (computerChoice == "Scissors" && userChoice == "Lizard") {
    matchResult = "Scissors decapitate lizard! You lose!";
    counterComputer++;
  } else if (computerChoice == "Scissors" && userChoice == "Rock") {
    matchResult = "Rock crushes scissors! You win!";
    counter++;
  } else if (computerChoice == "Scissors" && userChoice == "Spock") {
    matchResult = "Spock smashes scissors! You win!";
    counter++;
    //computer choice with lizard
  } else if (computerChoice == "Lizard" && userChoice == "Paper") {
    matchResult = "Lizard eats paper! You lose!";
    counterComputer++;
  } else if (computerChoice == "Lizard" && userChoice == "Scissors") {
    matchResult = "Scissors decapitate lizard! You win!";
    counter++
  } else if (computerChoice == "Lizard" && userChoice == "Rock") {
    matchResult = "Rock crushes lizard! You win";
    counter++;
  } else if (computerChoice == "Lizard" && userChoice == "Spock") {
    matchResult = "Lizard poisons Spock! You lose!";
    counterComputer++;
    //computer choice with Spock
  } else if (computerChoice == "Spock" && userChoice == "Paper") {
    matchResult = "Paper disproves Spock! You win!";
    counter++;
  } else if (computerChoice == "Spock" && userChoice == "Scissors") {
    matchResult = "Spock smashes scissors! You lose!";
    counterComputer++;
  } else if (computerChoice == "Spock" && userChoice == "Rock") {
    matchResult = "Spock vaporizes rock! You lose!";
    counterComputer++;
  } else if (computerChoice == "Spock" && userChoice == "Lizard") {
    matchResult = "Lizard poisons Spock! You win!";
    counter++;
  }

  resultSelector.innerHTML = matchResult;

  if (matchResult.includes("lose!")) {
    resultSelector.style.color = "#ff7300";
  } else if (matchResult.includes("tie")) {
    resultSelector.style.color = "#dedede";
  } else {
    resultSelector.style.color = "#19ff66";
  }

  userSelector.style.color = "#7fffd4";
};

const updateScore = () => {
  let player = document.getElementById("score");
  let computer = document.getElementById("score-computer");

  player.textContent = counter;
  computer.textContent = counterComputer;
};
