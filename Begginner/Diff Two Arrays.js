function Array(arr1, arr2){
    empArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            empArr.push(arr1[i])
        }
    }

    for(let i = 0; i < arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            empArr.push(arr2[i])
        }
    }

    return empArr
}

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

let result = Array(arr1, arr2);
console.log(result);