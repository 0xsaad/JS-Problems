var arr = [
  {name: "Saad", gender: "male"},
  {name: "Hafsa", gender: "female"},
  {name: "unknown", gender: "unknown"},
  {name: "Amna", gender: "female"},
  {name: "Dua", gender: "female"},
]

// var newarr = arr.filter(function(elem){
  //   return elem.gender === "male";
  // })
  
  // console.log(newarr)
  
  // or
  
  // arr = newarr;
  // console.log(arr)

var count = 0;
arr.forEach(function(elem){
  if(elem.gender !== "male") 
  count++;
})

for(let i = 1; i <= count; i++){
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male"){
      arr.splice(j, 1);
    }
  }
}

console.log(arr)