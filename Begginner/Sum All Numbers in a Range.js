function sumNumbers(start, end){
  var hold = 0
  for( let i = start; i<= end; i++){
    hold += i
  }

   return hold

}

let totalSum = sumNumbers(1, 10)
console.log(totalSum)