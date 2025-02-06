function stringAlphaBeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log(stringAlphaBeticalOrder("apple"))