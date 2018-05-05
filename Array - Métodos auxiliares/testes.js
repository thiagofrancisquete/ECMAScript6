/**
 * pequeno desafio: implemente um metodo que faça a leitura de varias palavras
 * e indique no console a quantidade de vogais nao acentuadas presentes
 */

function contadorVogaisSemAcento(...palavras){
  let qtdVogais = 0;
  for(let palavra of palavras){
    let palavrasLowerCase = palavra.toLowerCase();
    const letras = [...palavrasLowerCase];
    for(let letra of letras){
      if("aeiou".indexOf(letra)!== -1){
        qtdVogais++;
      }
    }
  }
  console.log(qtdVogais)
 }

 contadorVogaisSemAcento('es6') //1
 contadorVogaisSemAcento('javascript', 'delphi', 'assemble') //8
 contadorVogaisSemAcento('Não CONsidera acenTUAdos') // 10