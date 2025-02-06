function dropElements(X, y) {
  for (let i = 0; i < X.length; i++) {
    if (y % 2 === 0) {
      let restOfArray = X.slice(i);
      return console.log(restOfArray);
    }
  }

  return [];
}

let X = [12, 13, 45, 56];
let arr1 = dropElements(X);
console.log(arr1);

// function dropElements(X, predicate) {
//     for (let i = 0; i < X.length; i++) {
//       // If the predicate returns true, return the remaining array from this point
//       if (predicate(X[i])) {
//         return X.slice(i); // Return the rest of the array starting from the current element
//       }
//     }
//     return []; // If no elements pass the predicate, return an empty array
//   }

//   // Example usage:
//   let arr = [12, 13, 45, 56];

//   // Define a predicate function
//   let predicate = function(num) {
//     return num % 2 === 0; // Returns true for even numbers
//   };

//   let arr1 = dropElements(arr, predicate);
//   console.log(arr1); // Output: [12, 13, 45, 56]
