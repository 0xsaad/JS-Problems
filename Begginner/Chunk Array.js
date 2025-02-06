function chunkArray(arr, size) {
const chunks = []
for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);

    chunks.push(chunk);
}

return chunks;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(arr, 3);
console.log(chunkedArray); 
