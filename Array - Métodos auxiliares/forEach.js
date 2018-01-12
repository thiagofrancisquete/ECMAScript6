var canais = ['globo', 'sbt', 'record']
canais.push('cultura')

canais.forEach(function(canal){
    // canais.push('cultura') -> inserido depois do forEach não funciona
    console.log(canal)
})

/* com ES5

for(var i = 0; i < canais.length; i++){
    console.log(canais)
    break
} */