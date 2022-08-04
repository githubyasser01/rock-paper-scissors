let getComputerChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}
let arr = ["rock", "paper", "scissors"]
let computerSelection = getComputerChoice(arr);
let playerSelection = prompt().toLowerCase();
if (playerSelection == computerSelection)
    console.log("Tie!");
else
    {switch (playerSelection + computerSelection){
        case 'ROCKscissors':
        case 'SCISSORSpaper':
        case 'PAPERrock':
            console.log("You win!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "beats", computerSelection,".");
            break;
        default:
            console.log("You lose!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "loses against", computerSelection,".");
            break;
        }
    }
