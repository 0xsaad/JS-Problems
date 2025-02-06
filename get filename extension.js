function getFileExtension(filename){
    const name = filename.split(".");

    if( name.lenght === 1) return '';

    return name.pop();
}

const filename1 = "example.txt";
const filename2 = "example1.com";
const filename3 = "example_get";


console.log(getFileExtension(filename1));
console.log(getFileExtension(filename2)); 
console.log(getFileExtension(filename3)); 
