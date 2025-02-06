function lowestIndex(sortedArray,insertValue){
   for( let i = 0; i < sortedArray.length; i++){
     if(sortedArray[i] >= insertValue){
        return i
     }
   }

   return sortedArray.length;

}

let sortedArray = [10, 20, 30, 40, 50]
let index = lowestIndex(sortedArray, 25)
console.log(index)

// let sortedArray = [10, 20, 30, 40, 50];
// let index = findInsertIndex(sortedArray, 25);
// console.log(index);