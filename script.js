const computerSelector = document.getElementById("computer-choice");
const userSelector = document.getElementById("user-choice");
const resultSelector = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let resetButtonSelector = document.getElementById("reset-button");
let scoreSelectorPlayer = document.getElementById("score");
let scoreSelectorComputer = document.getElementById("score-computer");
let roundWinnerSelector = document.getElementById("round-winner");
let imagesContainerSelector = document.getElementById("icons-container");
let imagesContainerUserSelector = document.getElementById(
  "icons-container-user"
);

let mainGameSelector = document.getElementById("main-game");
////////////////////////////////////////

let userChoice;
let computerChoice;
let matchResult;
let counter = 0;
let counterComputer = 0;
let roundResult;

let resetButton = () => {
  document.location.reload();
};

let disabledButtons = [];

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userSelector.innerHTML = userChoice;
    e.target.disabled = true;
    computerChoiceGenerator();
    getResult();
    updateScore();

    //check if all buttons are disabled to give the the final result in each round
    disabledButtons.push(e.target.disabled);
    console.log(disabledButtons);
    if (disabledButtons.length === 5) {
      roundWinner();
      loadingWinner();
    }

    //create icon elements with each user choice
    let userIcon = document.createElement("div");

    if (userChoice == "Rock") {
      userIcon.classList.add("rock-icon");
      imagesContainerUserSelector.append(userIcon);
    } else if (userChoice == "Paper") {
      userIcon.classList.add("paper-icon");
      imagesContainerUserSelector.append(userIcon);
    } else if (userChoice == "Scissors") {
      userIcon.classList.add("scissors-icon");
      imagesContainerUserSelector.append(userIcon);
    } else if (userChoice == "Lizard") {
      userIcon.classList.add("lizard-icon");
      imagesContainerUserSelector.append(userIcon);
    } else {
      userIcon.classList.add("spock-icon");
      imagesContainerUserSelector.append(userIcon);
    }
  })
);

//////////////////////////

const opacityChange = [
  { opacity: 1 },
  { backgroundColor: "#525252" },
  { opacity: 0.5 },
];

const opacityTiming = {
  duration: 300,
  iterations: 4,
};

const loadingWinner = () => {
  // mainGameSelector.style.display = 'none'
  mainGameSelector.animate(opacityChange, opacityTiming);
};

const addIcons = () => {};

///////////////////////

const roundWinner = () => {
  setTimeout(() => {
    if (counter < counterComputer) {
      roundResult = "computer won this round!";
    } else if (counter > counterComputer) {
      roundResult = "you won this round!";
    } else {
      roundResult = "nobody won this round!";
    }

    roundWinnerSelector.innerHTML = roundResult;
    // roundResult.style.color = "#19ff66"
    if (roundResult.includes("you")) {
      roundWinnerSelector.style.color = "#19ff66";
    } else if (roundResult.includes("computer")) {
      roundWinnerSelector.style.color = "#ff3f3f";
    } else if (roundResult.includes("nobody")) {
      roundWinnerSelector.style.color = "#ffffff";
    }
  }, 1700);
};

resetButtonSelector.addEventListener("click", resetButton);

let computerChoiceGenerator = () => {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  let iconCreation = document.createElement("div");

  if (randomNum === 1) {
    computerChoice = "Rock";

    iconCreation.classList.add("rock-icon");
    imagesContainerSelector.append(iconCreation);
  } else if (randomNum === 2) {
    computerChoice = "Paper";

    iconCreation.classList.add("paper-icon");
    imagesContainerSelector.append(iconCreation);
  } else if (randomNum === 3) {
    computerChoice = "Scissors";

    iconCreation.classList.add("scissors-icon");
    imagesContainerSelector.append(iconCreation);
  } else if (randomNum === 4) {
    computerChoice = "Lizard";

    iconCreation.classList.add("lizard-icon");
    imagesContainerSelector.append(iconCreation);
  } else {
    computerChoice = "Spock";

    iconCreation.classList.add("spock-icon");
    imagesContainerSelector.append(iconCreation);
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
    counter++;
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
