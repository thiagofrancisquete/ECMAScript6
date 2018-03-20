let buffer = new ArrayBuffer(80) //80 bytes de tamanho
let view = new DataView(buffer)

view.setInt32(8, 22, false)

var number = view.getInt32(8, false)
console.log(number);