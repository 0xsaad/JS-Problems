function cloneArr(arr){ 
     return [...arr];
}

var newarr = cloneArr([1, 2, 3, 4]);

// or

function cloneArr(arr){
  var newarr = [];
  arr.forEach(function (e) {
    newarr.push(e);
  })
 return newarr;  
}

var abcd = [1, 2, 3]

var newarr = cloneArr(abcd);
newarr.pop();

// or

function cloneArr(arr){
  return arr.map(function(e){
    return e;
  })
}

var newarr = cloneArr([1, 2, 3, 4])