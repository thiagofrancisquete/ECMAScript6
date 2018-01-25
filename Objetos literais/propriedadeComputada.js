const nomeFuncao = 'mostrar'
const propriedade = 'Nome'

const objeto = {
    Nome: 'Objeto',
    [`${nomeFuncao}${propriedade}`](){
        console.log(this[propriedade])
    }
}

objeto.mostrarNome()