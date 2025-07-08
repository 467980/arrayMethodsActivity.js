let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Combined array:", combinedArr);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push:", fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift:", array1);

fruits.pop();
console.log("After pop:", fruits);

let array2 = [1, 2, 3];
array2.shift();
console.log("After shift:", array2);

fruits.sort();
console.log("After sort:", fruits);

let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);

let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log("After insert:", months);

months.splice(4, 1, "May");
console.log("After replace:", months);

