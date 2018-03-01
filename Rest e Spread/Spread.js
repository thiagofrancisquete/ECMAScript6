function myFunction(a, b){
  return a + b;
}
let data = [1,4];
let result = myFunction(...data);
console.log(result);

/* using ES5 
function myFunction (a, b){
  return a + b;
}
var data = [5,4];
var result = myFunction.apply(null, data);
console.log(result);
*/