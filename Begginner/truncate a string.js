function truncateString(string, maxLength){
    if (string.length > maxLength)
        return string.slice(0, maxLength - 3) + '...';
    else
        return string;
}

const result = truncateString('This is a long sentance', 10);
console.log(result);