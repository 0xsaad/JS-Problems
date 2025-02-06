function sumOddNumbers(arr) {
    let sum = 0;
    
    for (let num of arr) {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
    
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sumOfOdds = sumOddNumbers(numbers);
  console.log(sumOfOdds);