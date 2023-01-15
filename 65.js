// splice method
// start,  delete,  insert

const arr = ['item1', 'item2', 'item3', 'item4'];

//delete

const deletedItem = arr.splice(1,1);
// arr.splice(starting index, how many no.s to delete);
console.log(deletedItem);


// insert

arr.splice(1, 0, "inserted item");
// arr.splice(starting index, how many no.s to delete, inserting value);



// insert and delete together
const deletedItems = arr.splice(1, 2, "cat", "dog");
console.log(arr);
console.log(deletedItems);
