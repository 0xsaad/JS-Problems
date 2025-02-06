let Array = [[1, [2, [3, 4], 5], 6]]

let flattenArray = Array.flat(3);
console.log(flattenArray);

let arrays = [
    [2, 2, 9, 4, 0, 21, 199],
    [2, 21, 3]
    ];

let flattenedArray =  arrays.flat(2);  

let maxNumber = Math.max(...flattenedArray);

console.log(maxNumber); 