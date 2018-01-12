var numeros = [1, 2, 3, 4, 5]

/* com ES5
var soma = 0

for(var i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
*/

// Com ES6
var soma = numeros.reduce(function(somaAux, numero){
    return somaAux + numero
}, 0)

console.log(soma)