/**
 * usando ES5
 * var x = {x: 12}
 * var y = Object.create(x, {y: {value: 13}})
 * 
 * console.log(y.x) output 12
 * console.log(y.y) output 13
 */

 let a = { a: 12, __proto__: {b: 13}}
 console.log(`a.a = ${a.a}`);
 console.log(`a.b = ${a.b}`);