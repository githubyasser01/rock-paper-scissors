var getComputerChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}
var pscore = 0, cscore = 0, t = 0;
//put the selection buttons into a node-list called 'buttons'.
 let buttons = document.querySelectorAll('.btn');

//loop over each choice to add an event-listener and respond by transitioning + audio
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        let playerSelecion = button.innerText;
        let audio = document.getElementById(`${playerSelecion}-sound`);
        if(audio)
            audio.currentTime = 0;
            audio.play();
        button.classList.add('playerPressed'); //could set a timeout fn. here to remove the class but it might cause sync issues
        playRound(playerSelecion);

        }
        )
        }
    )
//function to remove the '.playerPressed' transition effect
    function removeTransition(e){
        if(e.propertyName !== 'box-shadow') //should pick the longest one 
            return;
        else
            this.classList.remove('playerPressed');
    }
//loop over each button to remove the transition
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition))

var arr = ["rock", "paper", "scissors"]

function playRound(playerSelection)
{
    let computerSelection = getComputerChoice(arr);  
    if (playerSelection == computerSelection){ 
		console.log("Tie!");
    }
        
    else
        {switch (playerSelection + computerSelection){
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                console.log("You win!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "beats", computerSelection,".");
				pscore+=1;
				break;
            default:
                console.log("You lose!", (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1), "loses against", computerSelection,".");
                cscore+=1;
				break;
            }
        }
	
	let max = Math.max(pscore, cscore, 5);
	if (max == pscore) console.log("You are the ultimate winner.");
	else if (max == cscore) console.log("Computer wins.");
    }



