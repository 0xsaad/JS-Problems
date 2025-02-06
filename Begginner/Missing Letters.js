function findMissingLetter(letters){
   for(let i = 0; i < letters.length - 1; i++){
    let currentCharCode = letters[1].charCodeAt(0);
    let nextCharCode = letters[i + 1].charCodeAt(0);
    if(nextCharCode !== currentCharCode + 1){
        return String.fromCharCode(currentCharCode + 1);
    }
   }

   return null;
}

let letters = ['A', 'B', 'C', 'E'];
let missingLetter = findMissingLetter(letters);
console.log(missingLetter);