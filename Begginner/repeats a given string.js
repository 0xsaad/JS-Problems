function repeatString(str, n){
   var repeatedString = " ";

   for (let i = 0; i < n; i++) {
    repeatedString += str;
   }

   return repeatedString;
}

const result = repeatString('Farzan', 3);
console.log(result);