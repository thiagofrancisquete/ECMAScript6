function parametroObrigatorio(parametro){
    throw new Error(`O parametro ${parametro} é obrigatorio`)
}

function insideScreen(objeto = parametroObrigatorio('objeto')) {
    
}

insideScreen()