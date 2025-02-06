const array1 = [1, 2, 3];
const array2 = [5, 5, 6];
const array3 = [7, 8, 8];

const mergedArrays = array1.concat(array2, array3);
const uniqueArray = [...new Set(mergedArrays)]

console.log(uniqueArray);

// Alternatively, you can use the filter() method along with indexOf() to achieve the same result:

// javascript
// Copy code
// const array = [1, 2, 2, 3, 4, 4, 5];

// // Removing duplicates using filter and indexOf
// const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]