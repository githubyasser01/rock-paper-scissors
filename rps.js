var getComputerChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

var arr = ["rock", "paper", "scissors"]

function playRound()
{
        let computerSelection = getComputerChoice(arr);
        let playerSelection = prompt().toLowerCase();
    
        if (playerSelection == computerSelection)
        { console.log("Tie!");
        return -1;
        }
        
    else
        {switch (playerSelection + computerSelection){
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                console.log("You win!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "beats", computerSelection,".");
                return 1;
            default:
                console.log("You lose!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "loses against", computerSelection,".");
                return 0;
            }
        }
    }

function game(n){
    let pscore = 0, cscore = 0, t = 0;

    for (let i = 0; i < n; i++)
    {
        x = playRound();
        if (x==1) pscore+=1;
        else if (x==0) cscore+=1;
        else t+=1;
    }
    let max = Math.max(pscore, cscore, t);
    if ((max == t && pscore == cscore) || pscore == cscore) console.log("Tied.");
    else if (max == pscore) console.log("You are the ultimate winner.");
    else console.log("Computer wins.");
}

game(5);