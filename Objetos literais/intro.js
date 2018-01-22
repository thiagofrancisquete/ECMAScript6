// duas formas de criar objetos: funcoes construtoras e objetos literais

// construtora
// console.log('construtora')
// function Livro(titulo){
    //this.titulo = titulo
//}
//var livro = new Livro('Harry Potter')
//console.log(typeof(livro))

// literal
//console.log('literal')
var livro = {
   titulo: 'O auto da compadecida',
   autor: 'Stephen Hawking'
}
console.log(livro)
livro.titulo = 'O codigo da vinci'
livro.autor = 'John Gray'
console.log(livro)