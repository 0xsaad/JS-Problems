let mixedArray = [0, "hello", false, 42, "", null, "world", undefined, NaN, true];

function falsyArr(arr){
    return  arr.filter(Boolean);
}

let filterdedArray = falsyArr(mixedArray)
console.log(filterdedArray);