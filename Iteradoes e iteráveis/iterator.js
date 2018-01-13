var chapeuSeletor = function(bruxo){
    var casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa lufa']
    var casa = casas[Math.floor(Math.random() * casas.length)]
    console.log("Bruxo: " + bruxo + " | Casa: " + casa)
}

// escolhendo as casas dos bruxos
var bruxos = ['Harry Potter', 'Hermione Granger', 'Ronald Weasley', 'Luna Lovegood', 'Neville Longhbottom', 'Cedrico Diggory', 'Gina Weasley']
var iterador = bruxos[Symbol.iterator]()
var done = false
var proximo = iterador.next()
do {
    var bruxo = proximo.value
    chapeuSeletor(bruxo)
    proximo=iterador.next()
} while(!proximo.done)
