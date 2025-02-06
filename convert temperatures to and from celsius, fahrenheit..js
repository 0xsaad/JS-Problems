// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// let choice = prompt("Type 'C' to convert Celsius to Fahrenheit, or 'F' to convert Fahrenheit to Celsius:");

// let temperature;
// if (choice.toUpperCase() === 'C') {
//     temperature = prompt("Enter the temperature in Celsius:");
//     temperature = parseFloat(temperature); // Convert to a number
//     let result = celsiusToFahrenheit(temperature);
//     alert(temperature + "°C is " + result + "°F");
// } else if (choice.toUpperCase() === 'F') {
//     temperature = prompt("Enter the temperature in Fahrenheit:");
//     temperature = parseFloat(temperature); // Convert to a number
//     let result = fahrenheitToCelsius(temperature);
//     alert(temperature + "°F is " + result + "°C");
// } else {
//     alert("Invalid choice. Please refresh and try again.");
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// rl.question(
//   "Type 'C' to convert Celsius to Fahrenheit, or 'F' to convert Fahrenheit to Celsius: ",
//   function (choice) {
//     if (choice.toUpperCase() === "C") {
//       rl.question("Enter the temperature in Celsius: ", function (temp) {
//         let temperature = parseFloat(temp);
//         let result = celsiusToFahrenheit(temperature);
//         console.log(temperature + "°C is " + result + "°F");
//         rl.close();
//       });
//     } else if (choice.toUpperCase() === "F") {
//       rl.question("Enter the temperature in Fahrenheit: ", function (temp) {
//         let temperature = parseFloat(temp);
//         let result = fahrenheitToCelsius(temperature);
//         console.log(temperature + "°F is " + result + "°C");
//         rl.close();
//       });
//     } else {
//       console.log("Invalid choice. Please restart and try again.");
//       rl.close();
//     }
//   }
// );

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

rl.question("Type 'C' to convert Celsius to Fahrenheit, or 'F' to convert Fahrenheit to Celsius: ", function(choice) {
    if (choice.toUpperCase() === 'C') {
        rl.question("Enter the temperature in Celsius: ", function(temp) {
            let temperature = parseFloat(temp);
            let result = celsiusToFahrenheit(temperature);
            console.log(`${temperature}°C is ${result}°F`);
            rl.close();
        });
    } else if (choice.toUpperCase() === 'F') {
        rl.question("Enter the temperature in Fahrenheit: ", function(temp) {
            let temperature = parseFloat(temp);
            let result = fahrenheitToCelsius(temperature);
            console.log(`${temperature}°F is ${result}°C`);
            rl.close();
        });
    } else {
        console.log("Invalid choice. Please restart and try again.");
        rl.close();
    }
});

rl.on('close', function() {
    console.log('Program terminated.');
    process.exit(0);
});

