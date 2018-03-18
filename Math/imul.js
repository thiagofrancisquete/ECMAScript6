// The Math.imul() takes two numbers as 32-bit integers and multiplies them. It returns the lower 32 bits of the result. 
// This is the only native way to do 32-bit integer multiplication in JavaScript.


console.log(Math.imul(590, 5000000)); // 32 bit integer multiplication
console.log(590 * 5000000); // 64 bit floating-point multiplication 

/* 
Here when multiplication was done it produced a number so large it couldn't be 
stored in 32 bits, therefore the lower bits were lost.
*/