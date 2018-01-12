var alunos = [
    {nome: 'Luis', idade: 18},
    {nome: 'Caio', idade: 20},
    {nome: 'Pedro', idade: 17},
    {nome: 'Bruna', idade: 19},
    {nome: 'Lais', idade: 17}
]
var deMaior = alunos.filter(function(aluno){
    return aluno.idade >= 18
})
console.log(deMaior)

/* com ES5 
var deMaior = []
for (var i = 0; i < alunos.length; i++){
    var aluno = alunos[i]
    if(aluno.idade >= 18)
        deMaior.push(aluno)
}

console.log(deMaior)
*/