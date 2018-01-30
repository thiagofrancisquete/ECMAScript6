/*
function nomeCompleto (nome, sobrenome, nomeMeio){
    if(nomeMeio === undefined){
        console.log(`${nome} ${sobrenome}`)
    } else {
        console.log(`${nome} ${nomeMeio} ${sobrenome}`)
    }
}
*/
function nomeCompleto (nome, sobrenome, nomeMeio = ""){
    console.log(`${nome} ${nomeMeio} ${sobrenome}`)
}

nomeCompleto('Thiago', 'Francisquete', 'Luiz')
nomeCompleto('Kaique', 'Jaime')