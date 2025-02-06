function update(records, id, newData){
   for(let i = 0; i < records.length; i++){
     if(records[i].id === id){
       records[i] = {...records[i], ...newData};
       break
     }
   }

   return records   
}

let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
];

let updatedUsers = update(users, 2, { age: 31 });

console.log(updatedUsers);
