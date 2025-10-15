# Tutorial5: DOM objects and Events


## Submission Instructions

This time, there will be no autograder. (The autograder will appear to run on gradescope, but there are no autograder points assigned.) **The files index.html and scripts.js must be the only files included in the GitHub repository you submit.** (Any initalization files automatically created in the Github repository are acceptable, but do not submit a repository that contains code from previous assignments.) 

Your code will be graded based on functionality: Ensure each of the 5 steps listed below are completed and working.

## Description

The starter code of this tutorial has two files; one of the them is an HTML document linked to the other file which is a JavaScript file. Fill in the Javascript file without changing the HTML.

The goal of this tutorial is to practice using DOM Queries to access HTML elements, as well as assigning event listeners to elements. You will create the starting steps of a basic tic tac toe game. Note however, that you should **not** attempt to include logic to end the game once someone has won even if empty spaces remain on the board: just follow the steps below.

## Steps 

1. Initialize the game by setting the value inside next-lbl to nextPlayer .
2. Fill in the function createGameBoard such that each of the table cells c1 to c9 is initialized with a button with label "[ ]". It is recommended to test this step before continuing.
3. Add code to createGameBoard to assign an event listener to each of the 9 buttons. The event should fire on a "click" event and call takeCell.
4. Fill in takeCell such that when a button is clicked, that cell is filled in with the symbol for the next player (X or O) and the button is subsequently disabled. Ensure that the variable nextPlayer is updated, **and** that you remember to update the value shown in next-lbl.
5. Fill in isGameOver to return true when all buttons have been disabled (i.e., after they have been chosen). You do not need to include functionality to reset the board. (When testing, just refresh if you want to try again.)
6. Fill in the if statement inside takeCell to update the value of game-over-label based on isGameOver.


