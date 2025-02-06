function insertAt(arr, index, ...elements) {
    arr.splice(index, 0, ...elements);
    return arr;
}
const numbers = [1, 2, 5, 6];
insertAt(numbers, 2, 3, 4);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]


