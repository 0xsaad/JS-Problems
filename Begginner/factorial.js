
function fac(x) {
    // Initialize a variable to hold the factorial result, starting with 1
    var result = 1;
    
    // Loop from 1 to x (inclusive)
    for (var z = 1; z <= x; z++) {
        result *= z; // Multiply the current result by z
    }
    
    // Return the final factorial value
    return result;
}

console.log(fac(5)); // Output: 120


/**
 * 
 */