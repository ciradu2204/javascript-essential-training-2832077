/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let array = [1, 2, 3, 4, 5, 5, 7];

console.log(array);
array.pop();
console.log(array);

//adds an item at the end of the array
array.push(7);
console.log(array);
//adds an item at the beginning of the array
array.unshift(7);
console.log(array);
array.sort(function (a, b) {
  return a - b;
});
console.log(array);

const found = array.find((item) => item > 2);
console.log(found);
