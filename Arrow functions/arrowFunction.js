// ES5
// var welcome = function(nome){
   // return 'seja bem vindo ' + nome
// }

// console.log(welcome('louis'))

var welcome = (nome, nome2) => {
    return 'seja bem vindo ' +nome +nome2
}

console.log(welcome('Jaime', ' Cirilo'))