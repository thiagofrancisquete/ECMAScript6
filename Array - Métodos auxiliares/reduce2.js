var alunos = [
    {nome: 'João', idade: 20},
    {nome:'José', idade: 21},
    {nome: 'Lucas', idade: 19}
]

// como coletar somente os nomes?

var nomes = alunos.reduce(function(arrayNomes, aluno){
    arrayNomes.push(aluno.nome)
    return arrayNomes
}, [])

console.log(nomes)