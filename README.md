# Tic Tac Toe

## Sumary

This is a Tic Tac Toe game.

How to play:

- First add the names of the two players, save and start playing.
- Go clicking on the boxes trying to form a combination of 3 boxes with your symbol.
- You can combine 3 boxes horizontally, vertically or both diagonally.
- The first player to get a combination of 3 boxes wins.
- To play again, press the 'Play Again' button.

## Plan

<img src="https://lucid.app/lucidchart/7436b5db-3070-4040-9047-23b42aa3a03e/edit?viewport_loc=620%2C417%2C692%2C293%2C0_0&invitationId=inv_bcf939ef-c822-470a-9f32-9ada6677014d" width="128">

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
Create a for loop with an EventListener and an if statement with the condition that if the user clicks on a box that has an 'X' value or 'O' value, print that the user cannot click there and think of a way not to let it possible for the user to click on it.

**Step5**
Create a count variable with a value of 0 and add an else if statement in the if of step 3 saying that if the count variable is equal to 9 print that nobody won.

**Step6**
Create an Event Listener for when the user clicks the save button on the input, create an element with the player's name and store it in the parent element I want.

**Step7**
Think about how to show the player's name along with that he won or that no one won without using console.log or alert, but creating an html element on the screen.

**Step8**
Think about how to reduce and clean up the code a bit. Try storing if statements conditions in variables with arrays to see if it works.
