function toPigLatin(str) {
    const vowels = /^[aeiou]/i
    if(vowels.test(str)){
        return str + "way";
    }
    else
    {
        const firstVowelIndex = str.search(/[aeiou]/i)
        return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
    }
}

let result1 = toPigLatin("hello");
console.log(result1);


