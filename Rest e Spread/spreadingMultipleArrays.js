let array1 = [1]
let array2 = [2]
let array3 = [...array1, ...array2, ...[3, 4]]
let array4 = [5]

function myFunction(a, b, c, d, e) {
  return a + b + c + d + e
}
let result = myFunction(...array3, ...array4)
console.log(`${result}`)