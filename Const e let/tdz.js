// temporal dead zone

var valor = 2
if (true){
    let valor // undefined
    console.log(valor)
    valor = 4 // só é atribuido o valor aqui
    console.log(valor)
}
console.log(valor) // sai do bloco entao imprime 2