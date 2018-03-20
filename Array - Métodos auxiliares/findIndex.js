let x = 12
let arr = [11, 12, 13]
let result = arr.findIndex(function(value, index, array) {
  if (value == this){
    return true
  }
}, x);

console.log(result);