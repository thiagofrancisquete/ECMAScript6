var livros = [
    {titulo: 'O poder do hábito', autor: 'Charles Duhigg', local: 'A1'},
    {titulo: 'Como fazer amigos e influenciar pessoas', autor: 'Dale Carnegie', local: 'D2'},
    {titulo: 'Geração de valor', autor: 'Flavio Augusto Silva', local: 'L3'},
    {titulo: 'Os segredos da mente milionária', autor: 'T. Harv Eker', local: 'O4'},
]

var estantes = new Map()
for (var livro of livros){
    estantes.set(livro.titulo, livro.local)
}

function getLocalLivro(titulo){
    var estante = estantes.get(titulo)
    if (estante === undefined){
        return 'Livro nao encontrado'
    }
    return estante
}

var localizacao = getLocalLivro('Palmeiras nao tem mundial')
console.log("o livro esta na estante:", localizacao)