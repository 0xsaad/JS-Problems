var arr = ["dgewfety",12 , 34, "jbejhfbjrf"]
var sum = 0;
arr.forEach(function (elem) {
  if (typeof elem === 'number'){
    sum = sum + elem;
  }
})

console.log(sum)