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
    if(choice=== ("rock")){
        return choice;
    } else if(choice === ("paper")){
        return choice;
    } else if(choice === ("scissors")){
        return choice;
    } else {
        return "Please input a valid choice!";
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! Rock beats Scissors."
    } else if(humanChoice === computerChoice){
        return `You tied! You both chose ${humanChoice.substring(0,1).toUpperCase() + humanChoice.substring(1)}.`;
    } else if(humanChoice === "scissors" && computerChoice == "paper"){
        humanScore++;
        return "You win! Scissors beats Paper."
    } else if(humanChoice ==="scissors" && computerChoice =="rock"){
        computerScore++;
        return "You lose! Rock beats Scissors."
    } else if(humanChoice === "paper" && computerChoice == "rock"){
        humanScore++;
        return "You win! Paper beats Rock.";
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper!";
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()))