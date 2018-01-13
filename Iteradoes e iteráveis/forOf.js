var carro = {
    marca: 'fiat',
    ano: 98
}

/*
for (var propriedade of carro){
    console.log(propriedade)
}
*/

for (var propriedade in carro){
    var info = carro[propriedade]
    console.log(info)
}