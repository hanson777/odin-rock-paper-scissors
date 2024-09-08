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
    if(choice.toLowerCase() === ("rock")){
        return choice;
    } else if(choice.toLowerCase() === ("paper")){
        return choice;
    } else if(choice.toLowerCase() === ("scissors")){
        return choice;
    } else {
        return "Please input a valid choice!";
    }
}

let humanScore = 0
let computerScore = 0


console.log(getComputerChoice());
console.log(getHumanChoice())