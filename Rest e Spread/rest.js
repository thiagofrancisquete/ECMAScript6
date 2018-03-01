function myFunction(a, b, ...args) {
  console.log(`${args} `)
}

myFunction(1, 2, 3, 4, 5)

/* ES5
function myFunction (a, b, c){
  var args = Array.prototype.slice.call(arguments, myFunction.length)

  console.log(args)
} 
myFunction(1,2,3,4,5) 
*/