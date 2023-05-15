var ramdonWhile = function(min, max){
    var valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

var opcao = 0

while (opcao >= -1){
    opcao = ramdonWhile(-10,100)
    console.log(`O número gerado foi: ${opcao}.`)
}

console.log('Done')

var opcao2 = 0
while (opcao<=20){
    console.log(`O número é ${opcao}`)
    opcao++
}
console.log('Done')