// musicas disponiveis
var musica_1 = { titulo: 'Sem voce meu coração é null', autor: 'Oracle'}
var musica_2 = { titulo: 'Meu coração componentizado', autor: 'React'}
var musica_3 = { titulo: 'Tudo isso é tão dinamico', autor: 'JavaScript'}
var musica_4 = { titulo: 'Não me chame depois...', autor: 'Node'}
var musica_5 = { titulo: 'No amor não existe rollback', autor: 'SQL'}

var playlist = new Set([musica_1, musica_2, musica_3, musica_4, musica_5])

function print() {
    for (var musica of playlist){
        console.log(musica)
   }
}

function tamanho() {
    console.log('tamanho da playlist: ', playlist.size)    
}

function espaco() {
    console.log()
}

espaco()
print()
tamanho()
espaco()

// remover uma musica
playlist.delete(musica_1)
console.log('removi a musica 1')
print()
tamanho()
espaco()

// adicionar uma musica manualmente
playlist.add(musica_1)
console.log('adicionei a musica 1')
print()
tamanho()
espaco()

// remover todas as musicas
playlist.clear()
console.log('apaguei todas as musicas')
print()
tamanho()
espaco()

// adicionar uma musica que ja existe na playlist
playlist.add(musica_1)
console.log('adicionei a musica 1 dnv')
print()
tamanho()
espaco()

// ver quantas musicas estão na playlist
console.log('total de musicas apos tudo isso')
tamanho()