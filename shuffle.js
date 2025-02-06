function shuffleKaro(arr) {
  var totalShuffleArea = arr.length;
  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    var indexToBeExchange = Math.floor(Math.random() * totalShuffleArea);
    var temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchange];
    arr[indexToBeExchange] = temp;
  }
  return arr;
}

console.log(shuffleKaro([1, 2, 3, 4, 5, 6, 7]))