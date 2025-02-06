function removeElements(arr, ...args){
  let newArray = arr.filter(element => !args.includes(element))
  return newArray
}

let arr = [1, 2, 3, 4, 5, 6, 2, 3] 
let result = removeElements(arr, 2, 3)
console.log(result)