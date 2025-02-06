function findFirstElement(arr, testFunc) {
    for (let i = 0; i < arr.length; i++) {
        if (testFunc(arr[i])) {
            return arr[i];
        }
    }
    return undefined; 
}

const numbers = [1, 3, 7, 10, 14];

const isEven = function(num) {
    return num % 2 === 0;
};

const firstEven = findFirstElement(numbers, isEven);
console.log(firstEven); 
