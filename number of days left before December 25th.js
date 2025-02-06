// Step 1: Get the current date
let today = new Date();

// Step 2: Get the date for December 25th of the current year
let year = today.getFullYear();
let december25 = new Date(year, 11, 25);

// Step 3: Calculate the difference in time
let timeDifference = december25 - today;

// Step 4: Convert the time difference to days
let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Step 5: Display the result
console.log("There are " + daysDifference + " days left before December 25th.");
