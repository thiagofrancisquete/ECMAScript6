// AULA 01 - CLASES
/*
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = 'Thiago';
  }

  mostraUser() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUser();
*/

// Aula 3 - OPerações em array
const arr = [1, 3, 4, 5, 8, 9];

// map = percorre todo o arrayinvocando uma função de retorno em cada elemento com parâmetros. 
// Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.
const newArr = arr.map(function (item, index) {
  return item * index;
})
console.log(newArr);

// reduce = consumir todo o vetor e transformar num unico dado, normalmente um numero
// Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.
const sum = arr.reduce(function(total, next){
  return total + next;
});
console.log(sum);

// filter = retorna o array com os elementros true do filtro
// Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões)
const filtro = arr.filter(function(item){
  return item % 2 === 0;
})
console.log(filtro);

// find = usado para procurar se x existe no array
const procurar = arr.find(function(item){
  return item === 6;
})
console.log(procurar);
