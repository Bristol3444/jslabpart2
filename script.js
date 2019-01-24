"use strict";
//initializing variables for entire game
let wins = 0;
let userHP = 40;
let grantHP = 10;
//created the first function, asking users if they want to play and what their name is. If they want to play, reference startCombat function
function startGame() {
    let answer = prompt("Do you want to play?");
    let nameInput = prompt("what is your name?");
    if (answer === "yes") {
        console.log("let's play");
        startCombat(); //reference second condition
    } else {
        console.log("lame.");
}
//creating second function, where if the user attacks, then implement the getDmg function
function startCombat () {
    while (wins <= 3) { //repeat the loop as long as a player does not have 3 wins
        let action = prompt("attack or quit?");
        if (action === "attack") { //user attacks, decrement HP with the returned number from getDmg function
            userHP -= getDmg(); 
            grantHP -= getDmg();
            getDmg();
        } else {
            console.log(`${nameInput} has left the game`); //user chose to quit the game, exit the while loop
            break;
        }
        console.log(`${nameInput} has ${userHP} left, grant has ${grantHP} left.`);
            if (grantHP <= 0 && wins >= 2) { //if grant's HP is 0 and the user has reached two or more wins, then user wins completely
                console.log(`${nameInput} wins and has defeated grant!`);
                wins++; //incrementing the number of wins until more than 2 is reached.
                break;
            } else if (grantHP <= 0) { // once grant's HP hits zero, log that the user has won a game (wins++) and play again
                grantHP = 10;
                wins++;
                console.log(`${nameInput} wins`);
            }
        } 
    }
    
}
//creating third function that will return a random number between 1-5
function getDmg() {
    return Math.floor(Math.random() * 5) + 1;
}
startGame();