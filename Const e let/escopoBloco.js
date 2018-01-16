var arrayVar = []
for (var i = 1; i < 5; i++){
    arrayVar.push(function(){
        console.log(i)
    })
}


var arrayLet = []
for (let i = 1; i < 5; i++){
    arrayLet.push(function(){
        console.log(i)
    })
}

console.log('usando var: ')
arrayVar.forEach(function(funcao){
    funcao()
})

console.log('usando let')
arrayLet.forEach(function(funcao){
    funcao()
})