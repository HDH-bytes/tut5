let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
//hint: you could use innerText for this 
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i <= 9; i++) {
        let tableCell = document.getElementById('c' + i);
        let button = document.createElement('button');
        button.innerText = '[ ]';

        // Programatically add 'takeCell' as an event listener to all the buttons on the board
        button.addEventListener('click', takeCell);
        tableCell.appendChild(button);
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let button = event.target;
    button.innerText = '[' + nextPlayer + ']';

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    button.setAttribute('disabled', 'true');

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // Switch to the other player
    if (nextPlayer === 'O') { nextPlayer = 'X';} 
    else {nextPlayer = 'O';}

    // update the value shown in next-lbl
    document.getElementById('next-lbl').innerText = nextPlayer;

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        if (!buttons[i].disabled) {
            return false;
        }
    }
    return true;
}