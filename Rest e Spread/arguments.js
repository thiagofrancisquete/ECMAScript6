function somaTudo() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  console.log(soma);
}

somaTudo(1);
somaTudo(1, 2, 3);
somaTudo(1, 2);