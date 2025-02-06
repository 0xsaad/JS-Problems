// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }

// let arrayWithDuplicates = "12234455";
// let uniqueArray = removeDuplicates(arrayWithDuplicates);
// console.log(uniqueArray);

// function remove(arr1){
//      return new Set(arr1);
// }
// let duplicates = [1, 2, 2, 3, 4, 4, 5, 5];
// let unique = remove(duplicates);
// console.log(unique);

function removeDup(array) {
    const newArr = []
    for(const i=0; i<array.length; i++){
        const indexItem = array[i]; // 1

        for(const j=0; j<array.length;i++){
            const duplicate = array[j];
            if(indexItem == duplicate){
                console.log(`same`)
            }else{
                console.log(`not same`)
                newArr.push(indexItem)
            }
        }
    }
    return newArr
}

/**
 * [1, 2, 3, ,4, 4, 2, 6]
 * iterate array - outer for loop
 * inner for loop
 * 
 * 
 * put every index value in variable
 * run for loop on main array
 */

// -------------------------------------------------------------------------------

// The Array.from() method returns an array from any object with a length property.

// The Array.from() method returns an array from any iterable object.

// -------------------------------------------------------------------------------

// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.

