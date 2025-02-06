// Generate a random integer between 1 and 10 (inclusive)
// let num = Math.floor(Math.random() * 10) + 1;
//or
var num = Math.ceil(Math.random() * 10);

// Log the generated random number to the console
console.log(num);

// Prompt the user to guess a number between 1 and 10 (inclusive)
var gnum = prompt("Guess the number between 1 and 10 inclusive");

// Check if the guessed number matches the generated random number
if (gnum == num)
  // Log a message if the guessed number matches the random number
  console.log("Matched");
// Log a message if the guessed number does not match, and also provide the correct number
else console.log("Not matched, the number was " + gnum);
