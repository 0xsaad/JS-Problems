const arr = [2,6, 8, 89, 76] 

var largest = arr[0];
for( i = 1; i < arr.length; i++ ){
     if(arr[i] > largest)
        largest = arr[i];
}

return console.log(largest)

// -----------------------------------

// let arrays = [
//     [2, 2, 9, 4, 0, 21, 199],
//     [2, 21, 3]
//     ];

// let flattenedArray =  arrays.flat(Infinity);  

// let maxNumber = Math.max(...flattenedArray);

// console.log(maxNumber); 