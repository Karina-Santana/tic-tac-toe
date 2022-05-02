# Tic Tac Toe

## Sumary

This is a Tic Tac Toe game.

<a href="https://karina-santana.github.io/tic-tac-toe/">Click here to play the game</a>

How to play:

- First add the names of the two players, save and start playing.
- Go clicking on the boxes trying to form a combination of 3 boxes with your symbol.
- You can combine 3 boxes horizontally, vertically or both diagonally.
- The first player to get a combination of 3 boxes wins.
- To reset the game, press the 'Play Again' button.

## Plan

<img src="./images/Flowchart-Tic-Tac-Toe.jpeg">

**Step1:**
Create 2 inputs to put the players name and store them in variables.
Create 9 boxes (divs) with a class called game-section
Create a reset button 

**Step2:**
Create a variable for the player turn which will receive a 'X' value.
Create an EventListener with an if inside. 
The if condition is: when player turns is equal to 'X' the clicked box will have an 'X' inside, then the player turn will have a 'O' value. If player turn is equal to 'O' the clicked box will have an 'O' inside. 

**Step3:**
Create an if statement with the conditions:
If box1, box2 and box3 are equal to 'X' print that the play 1 won.
If it is working, continue with the other conditions.

**Step4**
Do not allow a player to click 2 consecutive times
Create a for loop with an EventListener and an if statement with the condition that if the user clicks on a box that has an 'X' value or 'O' value, print that the user cannot click there and use the pointerEvents method to not let the user to click on it anymore.

**Step5**
Create a count variable with a value of 0 and add an else if statement in the if of step 3 saying that if the count variable is equal to 9 print that nobody won.

**Step6**
Create an Event Listener for when the user clicks the save button on the input, create an element with the player's name and store it in the parent element I want.

**Step7**
Think about how to show the player's name along with that he won or that no one won without using console.log or alert, but creating an html element on the screen.

**Step8**
Create an event listener so that when the user clicks the Play Again button, all the boxes become empty. The method pointerEvents can help with that.

**Step9**
Create a for loop and if statement to count the scores of both players.

**Step 10**
Think about how to reduce and clean up the code a bit. Try storing if statements conditions in variables with arrays to see if it works.

**Step 11**
Make the website responsive for mobile.
