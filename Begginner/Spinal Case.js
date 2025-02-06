function toSpinalCase(str){
    return str
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

let text = 'Hello World This_Is A Test';
let result = toSpinalCase(text);
console.log(result);