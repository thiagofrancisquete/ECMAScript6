// usado para manter o programa protegido de memory leak
// manter dados privados dentro da aplicação

var Pessoa = (function(){
    var dadosPrivados = new WeakMap()

    function Pessoa(nome) {
        dadosPrivados.set(this, {nome: nome})
    }

    Pessoa.prototype.getNome = function() {
        return dadosPrivados.get(this).nome
    }

    return Pessoa
}())

var roberto = new Pessoa ('Roberto Firmino')
console.log(roberto.getNome())
console.log(roberto._nome)