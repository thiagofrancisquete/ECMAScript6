// -----------------> RETORNA A EQUIPE UNDEFINED <-----------------------
console.log('equipe 1: ')
const equipe1 = {
    nome: 'linguagens de programação',
    membros: ['JavaScript', 'Typescript', 'NodeJS'],
    membrosEquipe: function(){
        this.membros.forEach(function(membro){
            console.log(`${membro} faz parte da equipe ${this.nome}`)
        })
    }
}
equipe1.membrosEquipe()

console.log()
console.log('equipe 2: ')

// -------------------> RETORNA A EQUIPE CERTA <------------------------

const equipe = {
    nome: 'linguagens de programação',
    membros: ['JavaScript', 'Typescript', 'NodeJS'],
    membrosEquipe: function(){
        this.membros.forEach(membro => {
            console.log(`${membro} faz parte da equipe ${this.nome}`)
        })
    }
}
equipe.membrosEquipe()