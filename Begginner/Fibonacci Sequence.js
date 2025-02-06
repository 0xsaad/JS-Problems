function fac(x){

    let arr = [0, 1];

     for( let z = 2; z < x; z++){
         
        let nextNum = arr[ z - 1 ] + arr[ z - 2];

        arr.push(nextNum);
     }

     return arr.slice(0, x);

}

console.log(fac(10));

