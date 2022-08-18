var getComputerChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

var statusBar = document.querySelector(".status");
var cDisplay = document.querySelector("#c_badge");
var pDisplay = document.querySelector("#p_badge");
var pDisplay_score = document.getElementById("p_score");
var cDisplay_score = document.getElementById("c_score");
var pscore = 0, cscore = 0, t = 0;
//put the selection buttons into a node-list called 'buttons'.
 let buttons = document.querySelectorAll('.btn');

//loop over each choice to add an event-listener and respond by transitioning + audio
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        let playerSelecion = button.innerText;
        let audio = document.getElementById(`${button.id}-sound`);
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

const SELECTIONS  = [
    {
        name: "a rock",
        beats: "a pair of scissors",
    },
    {
        name: "a pair of scissors",
        beats: "a piece of paper"
    },
    {
        name: "a piece of paper",
        beats: "a rock"
    }
]

function playRound(playerSelection)
{
    let computerSelection = getComputerChoice(SELECTIONS);  
    if (playerSelection == computerSelection.name){ 
		console.log("Tie!");
        statusBar.innerText = "Tie!";
    }
        
    else  if (playerSelection === computerSelection.beats){

                statusBar.innerText = "You lose!" + " " + (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1) + " " + "loses against" +" " + computerSelection.name + ".";
                cscore+=1;
    }
    else {      
        statusBar.innerText = "You Win!" + " " + (playerSelection.toLowerCase()).charAt(0).toUpperCase() + playerSelection.slice(1) + " " + "wins against" +" " + computerSelection.name + ".";
        pscore+=1;
            }
    pDisplay.innerText = "You threw" + " " + playerSelection+".";
    pDisplay_score.innerText = pscore;
    cDisplay.innerText = "Computer went" + " with " + computerSelection.name +"."; 
    cDisplay_score.innerText = cscore;
	
	var max = Math.max(pscore, cscore, 5);
	if (max == pscore) statusBar.innerText = String("You are the ultimate winner.");
	else if (max == cscore) statusBar.innerText = String("Computer wins.");

}
