function stringPalChecker(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loop"));