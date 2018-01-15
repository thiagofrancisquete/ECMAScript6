// entendendo como é o escopo

/*
 * No ES5
 */

var mensagem = 'olá'
{
    var mensagem = 'adeus'
} 
console.log('esperado adeus, recebido: ', mensagem) 

//para nao interferir tem que criar uma funcao mensagem
var mensagem = 'ola'
function teste(){
    mensagem = 'adeus'
    console.log(mensagem)
}
console.log('esperado ola, recebido: ', mensagem)  // imprime 'ola'
console.log('esperado: adeus, recebido: ') //imprime 'adeus'
teste()