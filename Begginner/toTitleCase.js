function toTitleCase(str) {
    return str
        .toLowerCase()                
        .split(' ')                   
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');                  
}


const sentence = "hello world from chatGPT";
const titleCasedSentence = toTitleCase(sentence);
console.log(titleCasedSentence);
