// com ES6

const nome = 'Maria'
const sobrenome = 'Joana'

const pessoa = {
    nome, sobrenome,
    apresentar(){
        console.log(` ola, sou a ${nome} ${sobrenome}`)
    }
}

pessoa.apresentar()
/*
var nome = 'Maria'
var sobrenome = 'Madalena'

var pessoa = {
    nome: nome,
    sobrenome: sobrenome
}
*/

