var jogos = [
    {nome: 'fifa 18', categoria: 'futebol' },
    {nome: 'need for sped most wanted' , categoria: 'corrida' },
    {nome: 'gran turismo 6', categoria: ' corrida'},
    {nome: 'counter strike', categoria: 'ação'},
    {nome: 'super mario world' , categoria: 'aventura'}
]
// como saber se são todos jogos de corrida?
var deCorrida = jogos.every(function(jogo){
    return jogo.categoria === 'corrida'
})
console.log(deCorrida)

/* com ES5 
var deCorrida = true;
for (var i = 0; i < jogos.length; i++){
    var jogo = jogos[i]
    if (jogo.categoria !== 'corrida')
    deCorrida = false
}
console.log(deCorrida)
*/
