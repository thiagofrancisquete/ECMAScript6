const v = 'valor 1'
function funcao(x = v){
    const v = 'valor 2'
    console.log(x)
}
funcao()


/*
function calculaPotencia(x = 2,y = x){
    console.log(Math.pow(x,y))
}
calculaPotencia()
calculaPotencia(3)
calculaPotencia(2,3)
*/