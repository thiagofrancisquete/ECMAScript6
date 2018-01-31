function somaTudo(...valores){
    return valores.reduce((soma, valor) =>{
        return soma+valor
    }, 0)    
}

console.log(somaTudo(1))
console.log(somaTudo(1,2,3))
console.log(somaTudo(1,2))


function multiplicaESoma(multiplicador, ...valores){
    return valores.reduce((soma,valor) =>{
        return soma + (valor*multiplicador)
    }, 0)
}

console.log(multiplicaESoma(2,1,2))
console.log(multiplicaESoma(2,6,7))