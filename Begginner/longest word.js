const string = "My name is Hassan";

function findLongestWord(str){
    const words = str.split(" ");

    let longestWord = ''; 

    for ( let word of words ){

        if ( word.length > longestWord.length ){
          longestWord = word;
        }
    }

    return longestWord;
}

const longest = findLongestWord(string);
console.log(longest);
