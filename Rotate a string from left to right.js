var str = "w3resourse";
var numi = 8;

for(let i = 0; i < numi; i++){
  var lastChar = str.slice(-1);
  var str = lastChar + str.slice(0,-1);
}

console.log(str); 