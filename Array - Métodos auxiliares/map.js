var numeros = [1, 2, 3]
var dobro = numeros.map(function(numero){
    return numero * 2
})
console.log(dobro)

/* 
--------> com forEach <-------- 
var dobro = []
numeros.forEach(function(numero){
    dobro.push(numero*2)
})
console.log(dobro)

--------> com ES5 <--------
for (var i = 0; i < numeros.length; i++){
    var dobro = numeros[i]*2;
    console.log(dobro)
} 
*/