function convertToEntities(str){
    const entityMap = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&#39;'
    }

    return str.replace(/[&<>"]'/g, function(char){
        return entityMap[char]
    })
}

let text = 'Hello & welcome to <my site> "awesome" isn\'t it?';
let result = convertToEntities(text);
console.log(result);