let array1 = [2, 3, 4];
let array2 = [1];

array2.push(...array1);
console.log(` ${array2}`)

/* ES5
var array1 = [2, 3, 4];
var array2 = [1];

Array.prototype.push.apply(array2, array1);
console.log(array2)
*/