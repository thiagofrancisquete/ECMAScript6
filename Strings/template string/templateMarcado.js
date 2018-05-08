const nome = 'Thiago'
const idade = 22

function marcacao(strings, ...valores){
    console.log(strings[0])
    console.log(valores[0])
    console.log(strings[1])
    console.log(valores[1])
    console.log(strings[2])
}

var mensagem = marcacao `Meu nome é ${nome} e eu tenho ${idade} anos`
console.log(mensagem)