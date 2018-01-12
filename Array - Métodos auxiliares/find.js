// o metodo find pega só um registro do array
var alunos = [
    {nome: 'Luis', idade: 18},
    {nome: 'Caio', idade: 20},
    {nome: 'Bruna', idade: 19},
    {nome: 'Lais', idade: 17},
    {nome: 'Pedro', idade: 17}
]

var procurado = alunos.find(function(aluno){
    return aluno.nome === 'Luis'
})
console.log(procurado)

/* com ES5 
var procurado

for (var i = 0; i < alunos.length; i++){
    var aluno = alunos[i]
    if (aluno.nome === 'Luis'){
        procurado = aluno
        break
    }
}
console.log(procurado)
*/