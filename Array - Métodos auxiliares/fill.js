let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5];


arr1.fill(5);
arr2.fill(5, 1, 2);
arr3.fill(5, 2, 3);
arr4.fill(5, -3, 2);
arr5.fill(5, 0, -2);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);