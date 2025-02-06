function typeTeller(elem) {
  console.log(typeof elem);
}
console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller('12'));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () { }));