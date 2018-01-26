// o que acontec ao chamar as funcoes sem os parametros esperados?

function meuParametro (parametro, parametro2){
    if (parametro2 === undefined){
        console.log(parametro)
    } else {
        console.log(parametro, parametro2)
    }
}
meuParametro('thiago')