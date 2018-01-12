var jogos = [{
        nome: 'Uncharted 4',
        categoria: 'ação'
    },
    {
        nome: 'Crash',
        categoria: 'plataforma'
    },
    {
        nome: 'Assassins Creed',
        categoria: 'aventura'
    },
    {
        nome: 'Battlefield',
        categoria: 'shooter'
    }
]

// como saber se há pelo menos um de corrida?

var temCorrida = jogos.some(function (jogo) {
    return jogo.categoria === 'corrida'
})
console.log(temCorrida)

/* com ES5 

var temCorrida
for (var i = 0; i < jogos.length; i++) {
    var jogo = jogos[i]
    if (jogo.categoria === 'corrida'){
        temCorrida = true
    break
    }
}
console.log(temCorrida)*/