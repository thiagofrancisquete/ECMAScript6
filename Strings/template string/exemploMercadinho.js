var nome = 'nome'
var idade = 23
var endereco = 'rua dos paes'

const div =
`
<div>
    <p><b>Nome:</b> ${nome}</p>
    <p><b>Idade:</b> ${idade}</p>
    <p><b>Endereço:</b> ${endereco}</p>
</div>
`
console.log(div)

/* usando ES5
var nome = 'nome'
var idade = 23
var endereco = 'rua dos paes'

var div = '<div>'

div += '<p><b>Nome: </b> ' +nome+ '</p>'
div += '<p><b>Idade:</b> ' +idade+ '</p>'
div += '<p><b>Endereço:</b> ' +endereco+ '</p>'
div += '</div>'

console.log(div)
*/