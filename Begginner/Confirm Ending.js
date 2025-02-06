function endsWith(str, target) {
    return str.slice(-target.length) === target;
}
console.log(endsWith('Hello world', 'world')); // Output: true
console.log(endsWith('Hello world', 'hello')); // Output: false
