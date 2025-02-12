const buttons = document.querySelectorAll('button');
const resultEl= document.getElementById('result');
const playerScoreEL = document.getElementById('user-score');
const computerScoreEL = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=>{
    button.addEventListener("click",()=> {
        const result = playRound(button.id,coumputerPlay())
        resultEl.textContent=result;
    })
})


function coumputerPlay(){
    const choice =["rock","paper","sissors"]
    const randomChoice = Math.floor(Math.random()*choice.length)
    return choice[randomChoice]
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "it's a tie !"
    }
    else if(
        (playerSelection === "rock" && computerSelection === "sissors")||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "sissors" && computerSelection === "paper")){
            playerScore++;
            playerScoreEL.textContent=playerScore;
            return "you win ! " +playerSelection+" bet's"+computerSelection
        }
    else{
        computerScore++;
        computerScoreEL.textContent=computerScore;
        return "you lose ! "+computerSelection+" bet's"+playerSelection
    }
}