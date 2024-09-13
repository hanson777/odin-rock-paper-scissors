function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1
    if(random == 1){
        return "rock";
    } else if(random == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    choice = choice.toString();
    choice = choice.toLowerCase();
    if(choice === ("rock")){
        return choice;
    } else if(choice === ("paper")){
        return choice;
    } else if(choice === ("scissors")){
        return choice;
    } else {
        alert("Please input a valid choice!");
        return getHumanChoice();
    }
}

    function playRound(humanChoice, computerChoice){
        if(humanChoice === "rock" && computerChoice === "paper"){
            //computerScore++;
            return "You lose! Paper beats Rock.";
        } else if(humanChoice === "rock" && computerChoice === "scissors"){
            //humanScore++;
            return "You win! Rock beats Scissors."
        } else if(humanChoice === computerChoice){
            return `You tied! You both chose ${humanChoice.substring(0,1).toUpperCase() + humanChoice.substring(1)}.`;
        } else if(humanChoice === "scissors" && computerChoice == "paper"){
            //humanScore++;
            return "You win! Scissors beats Paper."
        } else if(humanChoice ==="scissors" && computerChoice =="rock"){
            //computerScore++;
            return "You lose! Rock beats Scissors."
        } else if(humanChoice === "paper" && computerChoice == "rock"){
            //humanScore++;
            return "You win! Paper beats Rock.";
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            //computerScore++;
            return "You lose! Scissors beats Paper!";
        }
    }


const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const text = document.querySelector(".text")


rockButton.addEventListener("click", () => text.textContent = (playRound("rock", getComputerChoice())))
paperButton.addEventListener("click", () => text.textContent = (playRound("paper", getComputerChoice())))
scissorsButton.addEventListener("click", () => text.textContent = (playRound("scissors", getComputerChoice())))



