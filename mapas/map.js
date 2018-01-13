var map = new Map()
function funcao(){}
var objeto = {}

map.set("string", "sou uma string")
map.set("string2", "sou uma string tambem")
map.set(objeto, "sou um objeto")
map.set(funcao, "sou uma função")

console.log("iterando as chaves e mostrando o nome delas")
for (var chave of map.keys()){
    console.log(chave)
}
console.log()

console.log("iterando os valores e mostrando-os")
for (var valor of map.values()){
    console.log(valor)
}
console.log()

console.log("iterando chave e valores e mostrando os dois")
for (var entrada of map.entries()){
    console.log(entrada)
}
console.log()

console.log("metodo GET")
console.log(map.get("string")) // sou uma string
console.log(map.get("string2")) // sou uma string tambem
console.log(map.get(objeto)) // sou um objeto
console.log(map.get(funcao)) // sou uma função
console.log()

console.log("metodo SIZE")
console.log("tamanho: " + map.size) // 4
console.log()

console.log("metodo HAS")
console.log(map.has("string")) // true
console.log(map.has("string3")) // false
console.log()

console.log("metodo DELETE")
map.delete("string")
console.log(map.has("string")) // false
console.log()

console.log("metodo CLEAR")
console.log(map.size) // 3
map.clear()
console.log(map.size) // 0
console.log()